import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache, gql } from "apollo-boost";

// create an authorization header if the current request is authenticated
function getHeaders(ctx) {
  let token = undefined;

  // `ctx` is provided by Next.js and passed through document middleware and
  // `getInitialProps` methods defined on <App />, <Document />, and page
  // components
  if (ctx && ctx.session) {
    // ctx.session is set by the document middleware in pages/_document.js
    token = ctx.session.idToken;
  } else if (typeof window !== "undefined") {
    // window.__NEXT_DATA__ is created by Next.js, and is augmented to include
    // the token by pages/_document.js
    token = window.__NEXT_DATA__.token;
  }

  // if no token is available, don't include an authorization header property
  // at all, since Apollo seems to include all defined headers, even if the
  // value is `null` or `undefined`
  if (token) {
    return { authorization: `Bearer ${token}` };
  } else {
    return undefined;
  }
}

// configure server-side local state, specifically the value for the `me` query
// resolver
function getLocalStateDefaults(ctx) {
  // `ctx` is provided by Next.js and augmented to include auth0 session data
  // by pages/_document.js

  if (!ctx) {
    return undefined;
  }

  if (!ctx.session || !ctx.session.user) {
    return {
      me: null
    };
  }

  // update the user object so that it works correctly with Apollo
  let user = JSON.parse(JSON.stringify(ctx.session.user)); // deep clone object
  user.id = user.sub || 0; // every GraphQL object requires an ID
  delete user.sub;
  user.__typename = "User"; // every GraphQL object requires a typename
  delete user["https://hasura.io/jwt/claims"]; // remove Hasura claims
  return { me: user };
}

// client-side type definitions that used by queries with `@client` directives
// that will be merged with the server-side schema for usage by the Apollo
// client
const typeDefs = gql`
  extend type Query {
    me: User
  }
  type User {
    id: string
    name: string
  }
`;

// configure a new Apollo Client for each server-side request and the shared
// instance for the browser
export default withApollo(
  ({ ctx, initialState }) =>
    new ApolloClient({
      uri: process.env.GRAPHQL_ENDPOINT,
      cache: new InMemoryCache().restore(initialState || {}),
      headers: getHeaders(ctx),
      clientState: {
        typeDefs,
        // empty `resolvers` object is required for `@client` directives in
        // GraphQL queries to work correctly
        resolvers: {},
        defaults: getLocalStateDefaults(ctx)
      }
    })
);

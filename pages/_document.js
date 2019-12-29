import BaseDocument from "next/document";
import auth0 from "../lib/auth0";

export default class Document extends BaseDocument {
  // get token from request context and set it as a prop
  static async getInitialProps(ctx) {
    const initialProps = await super.getInitialProps(ctx);
    const token = ctx.session ? ctx.session.idToken : null;
    return { ...initialProps, token };
  }

  // provide token to browser, used by `withApollo` in utils/with-apollo.js
  constructor(props) {
    super(props);

    // __NEXT_DATA__ is a prop provided by Next.js to serialize data from the
    // server to be used by the browser from `window.__NEXT_DATA__`
    props.__NEXT_DATA__.token = props.token;
  }
}

// early-stage request middleware used to inject session data into request
// context before `App.getInitialProps` and `Document.getInitialProps` are
// called
export async function middleware(ctx) {
  const session = await auth0.getSession(ctx.req);
  ctx.session = session;
}

import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { Auth0Provider } from "use-auth0-hooks";
import Helmet from "react-helmet";
import moment from "moment";
import withData from "../lib/apollo";

moment.locale("en", {
  relativeTime: {
    future: "%s",
    past: "%s",
    s: "S",
    m: "1M",
    mm: "%dM",
    h: "1H",
    hh: "%dH",
    d: "1D",
    dd: "%dd",
    M: "1M",
    MM: "%dM",
    y: "1Y",
    yy: "%dY"
  }
});

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Auth0Provider
          domain={process.env.AUTH0_DOMAIN}
          clientId={process.env.AUTH0_CLIENT}
          redirectUri={"http://localhost:3000"}
        >
          <Helmet bodyAttributes={{ class: "bg-gray-300 font-mono font-thin" }}>
            <link
              href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <Component {...pageProps} />
        </Auth0Provider>
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);

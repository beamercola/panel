import React from "react";
import App from "next/app";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Helmet from "react-helmet";
import moment from "moment";
import fetch from "node-fetch";

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

const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
  fetch: fetch
  // headers: { authorization: `Bearer ${accessToken}` } // NEED TOKEN
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>
        <Helmet bodyAttributes={{ class: "bg-gray-300 font-mono font-thin" }}>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default MyApp;

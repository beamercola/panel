import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import Helmet from "react-helmet";
import withData from "../lib/apollo";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
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

// Wraps all components in the tree with the data provider
export default withData(MyApp);

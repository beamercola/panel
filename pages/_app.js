import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../lib/apollo";
import Head from "next/head";

import "../style.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);

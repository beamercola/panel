import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";
import App from "next/app";
import Helmet from "react-helmet";
import moment from "moment";

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

export default withApollo(MyApp);

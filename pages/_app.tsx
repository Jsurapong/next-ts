import React from "react";
import App from "next/app";

// import fetch from "node-fetch";

// import { createHttpLink } from "apollo-link-http";
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";

// // apollo client setup
// // const client: any = new ApolloClient({
// //   uri: "http://localhost:4000/graphql"
// // });

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;

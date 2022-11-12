import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import React from "react";
import { Toaster } from "react-hot-toast";
import { wrapper } from "src/store";

import apolloClient from "@shared/libs/apollo";

import "../styles/globals.css";

import "nprogress/nprogress.css";

/**
 * App wrapper for the whole application
 * @param {NextComponentType<NextPageContext, any, {}>} Component
 * @param {any} pageProps
 * @return {AppProps}
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  NProgress.configure({
    easing: "ease-out",
    minimum: 0.2,
  });

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <ApolloProvider client={apolloClient}>
      <Toaster
        position="bottom-left"
        toastOptions={{
          // Default options for specific types
          custom: {
            duration: 3000,
          },
        }}
      />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default wrapper.withRedux(MyApp);

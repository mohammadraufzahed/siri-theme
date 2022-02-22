import "~/styles/globals.scss";
import "normalize.css/normalize.css";
import type { AppProps } from "next/app";
import { ComponentType } from "react";

type MyAppProps = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: ComponentType;
  };
};

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;

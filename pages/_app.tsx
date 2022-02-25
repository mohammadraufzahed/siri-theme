import "~/styles/globals.scss";
import "normalize.css/normalize.css";
import type { AppProps } from "next/app";
import { ComponentType, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

type MyAppProps = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: ComponentType;
  };
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const [reactQueryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={reactQueryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;

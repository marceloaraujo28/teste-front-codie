import type { AppProps } from "next/app";
import { GlobalStyle } from "@/src/styles/global";
import { Container } from "@/src/styles/pages/app";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";

import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Container>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </Hydrate>
    </QueryClientProvider>
  );
}

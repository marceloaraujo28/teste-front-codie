import type { AppProps } from "next/app";
import { GlobalStyle } from "@/src/styles/global";
import { Container } from "@/src/styles/pages/app";

import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Container>
  );
}

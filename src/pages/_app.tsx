import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import theme from "@/theme";
import "nextra-theme-docs/style.css";
// import Fonts from "@/theme/Font";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

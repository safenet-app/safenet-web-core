import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { EthereumContextProvider } from "../hooks/ethereumContext";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <EthereumContextProvider>
        <Component {...pageProps} />
      </EthereumContextProvider>
    </ThemeProvider>
  );
}

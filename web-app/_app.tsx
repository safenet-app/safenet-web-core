import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { EthereumContextProvider } from "../hooks/ethereumContext";

import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
    
     
     
        <Component {...pageProps} />
     
   
    </Layout>
  );
}

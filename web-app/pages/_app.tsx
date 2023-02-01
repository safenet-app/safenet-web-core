import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from '../components/Layout';
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
      
        <Component {...pageProps} />
      
      </Layout>
    </ThemeProvider>
  );
}

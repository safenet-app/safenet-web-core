import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";

import "@/styles/globals.css";
import { wagmiClient, ethereumClient } from "../WalletConnect/config";
import { Web3Modal } from "@web3modal/react";

const PROJECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal
        projectId={PROJECT_ID}
        ethereumClient={ethereumClient}
        themeMode="dark"
        themeColor="blackWhite"
      />
    </>
  );
}

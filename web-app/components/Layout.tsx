"use client";

import useEthereumContext, { EthereumContext, EthereumContextProvider } from "@/hooks/ethereumContext";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import WalletAddress from "./Wallet/WalletAddress";
import WalletConnectHandler from "./Wallet/WalletConnectHandler";


const Buttons = () => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(e.target.value);
  }
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={handleClick} value={"/"}  >
        Home
      </button>

      <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={handleClick} value={"/event/create"}>
        Events
      </button>

      <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={handleClick} value={"/donation/create"} >
        Donations
      </button>

      {/* <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        onClick={handleClick} value={"/event/EventDetails"} >
        Event Details
      </button> */}
    </div>
  )
}
const Header = () => {
  const { walletConnected } = useEthereumContext() as EthereumContext;

  return (
    <>

      <Head>
        <title>Safenet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="font-sans hover:font-serif text-2xl text-center">
          SafeNet</p>

        {!walletConnected ? (
          <>
            <WalletConnectHandler />


          </>
        ) :
          (
            <WalletAddress />

          )
        }
      </main>
    </>

  );
}




const Layout = ({ children }: any) => {
  return (
    //<ThemeProvider>
      <EthereumContextProvider>
        <Header />
        <Buttons/>
        {children}
      </EthereumContextProvider>
   // </ThemeProvider>
  );
};

export default Layout;
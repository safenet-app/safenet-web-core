
import Head from "next/head";
import WalletAddress from "@/components/Wallet/WalletAddress";
import WalletConnectHandler from "@/components/Wallet/WalletConnectHandler";
import {useEthereumContext,EthereumContext, EthereumContextProvider} from "../hooks/ethereumContext"
import { useRouter } from 'next/router'



export default function Home() {
  const { walletConnected,userAddress } = useEthereumContext() as EthereumContext;
  return (
    <>
        <p>{walletConnected.toString()}</p>
        <p>{userAddress}</p>  
    </>
  );
}

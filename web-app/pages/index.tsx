
import Head from "next/head";
import WalletAddress from "@/components/Wallet/WalletAddress";
import WalletConnectHandler from "@/components/Wallet/WalletConnectHandler";
import {useEthereumContext,EthereumContext, EthereumContextProvider} from "../hooks/ethereumContext"
import { useRouter } from 'next/router'
import { EventListComponent } from "@/components/ContractEventList/EventList";



export default function Home() {
  //const { walletConnected,userAddress } = useEthereumContext() as EthereumContext;
  return (
    <>
        
        <div><EventListComponent/></div>  
    </>
  );
}

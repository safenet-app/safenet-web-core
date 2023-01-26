import useEthereumContext from "../../hooks/ethereumContext";
import { EthereumContext } from "../../hooks/ethereumContext";
export default function WalletConnectHandler() {
  const { connectWallet } = useEthereumContext() as EthereumContext;
  return (
    <div className="flex flex-col bg-slate-100 dark:bg-slate-900 m-auto mt-10 p-5 max-w-md rounded-md shadow-xl gap-3">
      <div className="flex flex-col justify-center items-center mt-10">
        <p>Your wallet is not connected</p>
        <button
          onClick={connectWallet}
          className="bg-black dark:bg-slate-200 text-white dark:text-black my-10 mx-auto px-4 py-2 rounded-md shadow-md"
        >
          Connect your wallet
        </button>
      </div>
    </div>
  );
}

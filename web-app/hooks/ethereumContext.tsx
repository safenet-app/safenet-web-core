import {
  useState,
  useRef,
  useEffect,
  createContext,
  useMemo,
  useContext,
} from "react";
import { providers } from "ethers";
import Web3Modal from "web3modal";

export interface EthereumContext {
  userAddress: string;
  walletConnected: boolean;
  connectWallet: () => Promise<boolean>;
  getProviderOrSigner: (needSigner?: boolean) => Promise<any>;
}
export const EthereumContext = createContext<EthereumContext | null>(null);

export const EthereumContextProvider = ({ children }: any) => {
  const [userAddress, setUserAddress] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef() as React.MutableRefObject<Web3Modal>;

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const address = await web3Provider.getSigner().getAddress();

    setUserAddress(address);
    // If user is not connected to the Goerli network,
    // let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Change the network to Polygon Mumbai");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      // console.log("SIGNER", signer); // ! uncomment to debug
      return signer;
    }
    // console.log("PROVIDER", web3Provider); // ! uncomment to debug
    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "goerli",
      providerOptions: {},
      disableInjectedProvider: false,
    });
  });

  const values: EthereumContext = useMemo(
    () => ({
      userAddress,
      walletConnected,
      connectWallet,
      getProviderOrSigner,
    }),
    [userAddress, walletConnected]
  );

  return (
    <EthereumContext.Provider value={values}>
      {children}
    </EthereumContext.Provider>
  );
};

export function useEthereumContext() {
  const contractContext = useContext(EthereumContext);

  if (!contractContext) {
    return console.error({ error: "ERROR_DEPLOYING_ETHEREUM_CONTEXT" });
  }

  return contractContext;
}

export default useEthereumContext;

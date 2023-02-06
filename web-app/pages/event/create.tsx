import CreateEventForm from "../../components/Event/CreateEventForm";
import { useEthereumContext, EthereumContext } from "@/hooks/ethereumContext";

export default function create() {
  // const { walletConnected } = useEthereumContext() as EthereumContext;
  // console.log(walletConnected);
  return (
    <div className="flex justify-center">
      <CreateEventForm />
    </div>
  );
}

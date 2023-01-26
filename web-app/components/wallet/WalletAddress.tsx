import { useState } from "react";
import Image from "next/image";
import { BiCopy } from "react-icons/bi";

import useContractContext, {
  EthereumContext,
} from "../../hooks/ethereumContext";
import { copyToClipboard } from "../../lib/utils";

export default function WalletAddress() {
  const { userAddress, walletConnected } =
    useContractContext() as EthereumContext;
  const [isClicked, setIsClicked] = useState(false);
  const renderAddress = () => {
    const addrStart = userAddress.substring(0, 5);
    const addrEnd = userAddress.substring(35, userAddress.length);
    const addr = addrStart + "..." + addrEnd;
    return addr;
  };

  const handleOnClick = async () => {
    await copyToClipboard(userAddress);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 400);
  };

  return (
    <>
      {walletConnected ? (
        <button
          className="flex gap-2 m-auto bg-black px-3 py-2 rounded-md text-white"
          onClick={handleOnClick}
        >
          <Image
            src="/pattern.svg"
            alt="Icon"
            width={25}
            height={25}
            className="rounded-full m-auto"
          />
          <BiCopy
            className={`m-auto ${
              isClicked
                ? "bg-green-300 p-0.5 transition-all text-white rounded-full"
                : ""
            }`}
          />{" "}
          {renderAddress()}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

import { useState } from "react";
import { Web3Button } from "@web3modal/react";
import { FiMenu } from "react-icons/fi";

import NavMenu from "../Navigation/NavMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="flex flex-row p-3 justify-between border-b-2 mb-6 backdrop-blur-sm">
        <h1 className="my-auto text-3xl font-bold">Safenet</h1>
        <div className="flex flex-row gap-3">
          <Web3Button />
          <button
            onClick={() => {
              console.log("click");
              window.alert("click");
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <FiMenu className="text-3xl my-auto" />
          </button>
        </div>
      </header>
      {isMenuOpen && <NavMenu />}
    </>
  );
}

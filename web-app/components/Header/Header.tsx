import { useState } from "react";
import { Web3Button } from "@web3modal/react";
import { FiMenu } from "react-icons/fi";

import NavMenu from "../Navigation/NavMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header >
       
        <div >
          <Web3Button icon="show" label="Connect Wallet" balance="show"/>
          
        </div>
      </header>
    
    </>
  );
}

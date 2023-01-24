import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {
  ETHER_SCAN_API_KEY,
  GOERLI_URL,
  MUMBAI_URL,
  PRIVATE_KEY,
} from "./constants";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    // https://wiki.polygon.technology/docs/develop/hardhat/
    polygon_mumbai: {
      url: MUMBAI_URL,
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHER_SCAN_API_KEY,
  },
};

export default config;

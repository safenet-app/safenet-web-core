import { Contract } from "ethers";
export class Logger {
  private readonly goerliBaseUrl: string =
    "https://goerli.etherscan.io/address/";
  private readonly mumbaiScanBaseUrl =
    "https://mumbai.polygonscan.com/address/";

  async logDeploy(network: string, contract: Contract): Promise<void> {
    if (contract) {
      const signerAddress = await contract.signer.getAddress();

      console.log(
        `\nDEPLOYING_ON_NETWORK: [ ${network} ] WITH ADDRESS: [ ${signerAddress} ]\n`
      );

      if (network === "goerli")
        return console.log(
          this.successResultResponse(contract.address, this.goerliBaseUrl)
        );

      if (network === "maticmum")
        return console.log(
          this.successResultResponse(contract.address, this.mumbaiScanBaseUrl)
        );

      if (network === "hardhat" || network === "unknown")
        return console.log(this.successResultResponse(contract.address));
    } else {
      throw new Error("CONTRACT_CANNOT_BE_FOUND");
    }
  }

  private successResultResponse(contractAddress: string, baseUrl?: string) {
    if (baseUrl) {
      return {
        message: "CONTRACT_DEPLOYED_SUCCESSFULLY",
        address: contractAddress,
        blockExplorerUrl: baseUrl + contractAddress,
      };
    }

    return {
      message: "CONTRACT_DEPLOYED_SUCCESSFULLY",
      address: contractAddress,
    };
  }
}

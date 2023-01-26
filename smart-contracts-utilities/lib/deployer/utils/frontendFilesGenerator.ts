import { join } from "node:path";
import fs from "node:fs";
import { artifacts } from "hardhat";

export class FrontendFilesGenerator {
  private frontendContractsDirTarget = join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "web-app",
    "contracts"
  );

  constructor(frontendContractsDirTarget?: string) {
    if (frontendContractsDirTarget) {
      if (!fs.existsSync(frontendContractsDirTarget))
        throw new Error("THE_SPECIFIED_PATH_CANNOT_BE_FOUND");
      this.frontendContractsDirTarget = frontendContractsDirTarget;
    }
  }

  async save(contractName: string, contractAddress: string): Promise<void> {
    try {
      if (!fs.existsSync(this.frontendContractsDirTarget)) {
        fs.mkdirSync(this.frontendContractsDirTarget);
      }

      const contractsArtifact = artifacts.readArtifactSync(contractName);

      const contract = {
        address: contractAddress,
        abi: contractsArtifact.abi,
      };

      fs.writeFileSync(
        join(this.frontendContractsDirTarget, `${contractName}.json`),
        JSON.stringify(contract, null, 2)
      );

      console.log({
        message: "CONTRACT_FILES_GENERATED_SUCCESSFULLY",
        path: join(this.frontendContractsDirTarget, `${contractName}.json`),
      });
    } catch (error) {
      console.error({
        message: "CONTRACT_FILES_CANNOT_BE_GENERATED",
        error,
      });
    }
  }
}

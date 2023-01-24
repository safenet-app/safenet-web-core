import { join } from "node:path";
import fs from "node:fs";
import { artifacts } from "hardhat";

export class FrontendFilesGenerator {
  frontendContractsDir = join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "web-app",
    "contracts"
  );

  constructor(frontendContractsDir?: string) {
    if (frontendContractsDir) {
      if (!fs.existsSync(frontendContractsDir))
        throw new Error("THE_SPECIFIED_PATH_CANNOT_BE_FOUND");
      this.frontendContractsDir = frontendContractsDir;
    }
  }

  async save(contractName: string, contractAddress: string): Promise<void> {
    try {
      if (!fs.existsSync(this.frontendContractsDir)) {
        fs.mkdirSync(this.frontendContractsDir);
      } else {
        fs.rmSync(this.frontendContractsDir, { recursive: true });
        fs.mkdirSync(this.frontendContractsDir);
      }

      const contractsArtifact = artifacts.readArtifactSync(contractName);

      const contract = {
        address: contractAddress,
        abi: contractsArtifact.abi,
      };

      fs.writeFileSync(
        join(this.frontendContractsDir, `${contractName}.json`),
        JSON.stringify(contract, null, 2)
      );

      console.log({
        message: "CONTRACT_FILES_GENERATED_SUCCESSFULLY",
        path: this.frontendContractsDir + `${contractName}.json`,
      });
    } catch (error) {
      console.error({
        message: "CONTRACT_FILES_CANNOT_BE_GENERATED",
        error,
      });
    }
  }
}

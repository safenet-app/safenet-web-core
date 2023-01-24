import fs from "node:fs";
import { join } from "node:path";

import { ethers } from "hardhat";
import { Contract } from "ethers";
import { DeployerOptions } from "../../types";
import {
  FrontendFilesGenerator,
  ReactComponentsGenerator,
  Logger,
} from "./utils/";

export class Deployer {
  private readonly frontendFilesGenerator?: FrontendFilesGenerator;
  private readonly reactComponentsGenerator?: ReactComponentsGenerator;

  constructor(
    options?: DeployerOptions,
    private readonly logger: Logger = new Logger()
  ) {
    if (options) {
      if (options.generateFrontendFiles) {
        this.frontendFilesGenerator = new FrontendFilesGenerator();
      }

      if (options.generateReactComponents) {
        this.reactComponentsGenerator = new ReactComponentsGenerator();
      }
    }
  }

  private async getNetworkName(): Promise<string> {
    const network = await ethers.provider.getNetwork();
    return network.name;
  }

  private getContractsNames(): string[] | Error {
    const contractsNames = fs
      .readdirSync(join(__dirname, "..", "..", "contracts"))
      .map((fileName) => fileName.split(".")[0]);

    if (contractsNames.length > 0) return contractsNames;

    throw new Error("CONTRACTS_CANNOT_BE_FOUND");
  }

  async deploy(): Promise<void> {
    try {
      const networkName = await this.getNetworkName();
      const contractsNames = this.getContractsNames() as string[];

      const contracts = contractsNames.map(async (contractName: string) => {
        const factory = await ethers.getContractFactory(contractName);
        const deployer = await factory.deploy();

        if (this.frontendFilesGenerator) {
          await this.frontendFilesGenerator.save(
            contractName,
            deployer.address
          );
        }

        // if (this.reactComponentsGenerator) {}
        return await deployer.deployed();
      });

      contracts.forEach(async (contract) => {
        const c = await contract;
        this.logger.logDeploy(networkName, c);
      });
    } catch (error) {
      console.error({
        message: "ERROR_DEPLOYING_CONTRACTS",
        error,
      });
    }
  }
}

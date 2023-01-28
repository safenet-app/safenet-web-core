import { join } from "node:path";
import fs from "node:fs";
import { artifacts } from "hardhat";
import { ContractFunction, Options } from "../../../types/";
export class ReactComponentsGenerator {
  private componentsContractsDirTarget = join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "web-app",
    "components",
    "contracts"
  );

  constructor(
    private readonly generateUI = true,
    componentsContractsDirTarget?: string
  ) {
    if (componentsContractsDirTarget) {
      if (!fs.existsSync(componentsContractsDirTarget))
        throw new Error("THE_SPECIFIED_PATH_CANNOT_BE_FOUND");
      this.componentsContractsDirTarget = componentsContractsDirTarget;
    }
  }

  private parseFunctionsWithParams(functions: ContractFunction[]) {
    // console.log("functions with params", { functions });
  }

  private parseFunctionsWithoutParams(functions: ContractFunction[]) {
    // console.log("functions NO params", { functions });
  }

  private UI() {}

  async generate(contractName: string) {
    let component = `
import { useRef, useState } from "react";
`;

    try {
      if (!fs.existsSync(this.componentsContractsDirTarget))
        fs.mkdirSync(this.componentsContractsDirTarget);

      const { abi } = artifacts.readArtifactSync(contractName);

      const functionsWithParams = abi.filter(
        (func: any) => func.type === "function" && func.inputs.length > 0
      ) as ContractFunction[];

      const functions_Without_Params = abi.filter(
        (func: any) => func.type === "function" && func.inputs.length === 0
      ) as ContractFunction[];

      this.parseFunctionsWithParams(functionsWithParams);
      this.parseFunctionsWithoutParams(functions_Without_Params);
    } catch (error) {
      console.error({ error });
    }
  }
}

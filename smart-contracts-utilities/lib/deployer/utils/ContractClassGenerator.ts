import { join } from "node:path";
import fs from "node:fs";
import { artifacts } from "hardhat";
import { ContractFunction } from "../../../types";

export class ContractClassGenerator {
  private contractsClassDirTarget = join(
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
    contractsClassDirTarget?: string
  ) {
    if (contractsClassDirTarget) {
      if (!fs.existsSync(contractsClassDirTarget))
        throw new Error("THE_SPECIFIED_PATH_CANNOT_BE_FOUND");
      this.contractsClassDirTarget = contractsClassDirTarget;
    }
  }

  private parseType(type: string) {
    if (type.includes("int")) {
      let v = "BigNumberish";
      if (type.includes("[]")) v + [];
      return v;
    } else if (type === "address") {
      let v = "string";
      if (type.includes("[]")) v + [];
      return v;
    } else if (type.includes("bytes")) {
      let v = "string";
      if (type.includes("[]")) v + [];
      return v;
    } else if (type === "string") {
      let v = "string";
      if (type.includes("[]")) v + [];
      return v;
    } else if (type === "bool") {
      let v = "boolean";
      if (type.includes("[]")) v + [];
      return v;
    } else {
      return type;
    }
  }

  private parseInputsWithTypes(inputs: any[]) {
    let parsedInputs = inputs.map((input) => {
      if (input.name) return `${input.name}: ${this.parseType(input.type)}`;
    });
    return parsedInputs.join(", ");
  }

  private parseInputsNames(inputs: any[]) {
    let inputsNames = inputs.map((input) => {
      if (input.name) return input.name;
    });
    return inputsNames.join(", ");
  }

  private parseOutputs(outputs: any[]) {
    let parsedOutputs = outputs.map((output) => {
      return `${this.parseType(output.type)}`;
    });

    return parsedOutputs.join(", ");
  }

  private parseFunctionsWithParams(functions: ContractFunction[]) {
    functions.forEach((func) => console.log(func.inputs));
    let parsedFunctions = functions.map((func) => {
      return `
  async ${func.name}(${this.parseInputsWithTypes(
        func.inputs
      )}): ${this.parseOutputs(func.outputs)} {
    try {
      const tx = await this.contract.${func.name}(${this.parseInputsNames(
        func.inputs
      )});
      const res = await tx.wait();
      return res;
    } catch {
      console.error(error)
    }
  } 
`;
    });

    return parsedFunctions.join("\n");
  }

  // private parseFunctionsWithoutParams(functions: ContractFunction[]) {} // ! todo

  // private UI() {} // ! todo

  async generate(contractName: string) {
    try {
      if (!fs.existsSync(this.contractsClassDirTarget))
        fs.mkdirSync(this.contractsClassDirTarget);

      const { abi } = artifacts.readArtifactSync(contractName);

      const functionsWithParams = abi.filter(
        (func: any) => func.type === "function" && func.inputs.length > 0
      ) as ContractFunction[];

      const functions_Without_Params = abi.filter(
        (func: any) => func.type === "function" && func.inputs.length === 0
      ) as ContractFunction[];

      let contractClass = `
import { BigNumberish, Contract, Signer } from 'ethers';

export class SecretsCementery {
  contract: Contract;
  constructor(
    private readonly address: string,
    private readonly abi: any,
    private readonly signer: Signer
  ) {
    this.contract = new Contract(address, abi, signer);
  }

  ${this.parseFunctionsWithParams(functionsWithParams)}

}
`;

      console.log(contractClass);
    } catch (error) {
      console.error({ error });
    }
  }
}

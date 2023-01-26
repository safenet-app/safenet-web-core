# SMART CONTRACTS UTILITIES

This repository contains a collection of utilities for smart contracts development based on Hardhat

## Installation

```bash
npm install
```

## Usage

### Compile

```bash
npm run compile # to compile all contracts in ./contracts/* dir
```

### Test

```bash
npm test # to run all tests in ./test/* dir
```

### Deploy

```bash
npm run deploy:<network> # to deploy all contracts in ./contracts/* dir
```

## Advance

### Generate useful frontend files

With this option active when you deploy your contracts a `contracts` directory will be created in the `web-app` directory with one JSON file for each contract with the format `<ContractName>.json`. Each JSON file will contain the contract `address` and the contract `abi`.

- `FrontendFilesGenerator`: Canrecive one optional parameter:
  - `frontendContractsDirTarget`: `string`. Default: `<Project Root>/web-app/contracts`. The path specifying where to save the generatedFiles. an Error `THE_SPECIFIED_PATH_CANNOT_BE_FOUND` will be throw if the path does not exist.
  
- `ReactComponentsGenerator`: Can receive two optionals constructor parameters:
  - `generateUI`: `boolean`. Default: `true`. This option allow you to choose if the `ReactComponentsGenerator` will generate a fully functional React Component (with default styles) or (when `false`) just generate functions to interact with the deployed contract.
  - `componentsContractsDirTarget`: `string`. Default: `<Project Root>/web-app/components/contracts`. The path specifying where to save the generatedFiles. an Error `THE_SPECIFIED_PATH_CANNOT_BE_FOUND` will be throw if the path does not exist.

```typescript
import { Deployer } from "../lib/deployer/deployer";
import {
  ReactComponentsGenerator,
  FrontendFilesGenerator,
} from "../lib/deployer/utils";

const frontendFilesGenerator = new FrontendFilesGenerator();
const reactComponentsGenerator = new ReactComponentsGenerator();
const deployer = new Deployer(frontendFilesGenerator, reactComponentsGenerator);

async function main() {
  deployer.deploy();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

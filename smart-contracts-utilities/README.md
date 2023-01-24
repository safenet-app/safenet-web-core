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

```typescript
// smart-contracts-utilities/scripts/deploy.ts

import { Deployer } from "../lib/deployer/deployer";
import { DeployerOptions } from "../types";

const deployerOptions: DeployerOptions = {
  // generateFrontendFiles: true, // * Uncomment this line to generate useful frontend file
  // generateReactComponents: true, // * Uncomment this line to generate React Components from contracts ABI
};

async function main() {
  const deployer = new Deployer(deployerOptions);
  deployer.deploy();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

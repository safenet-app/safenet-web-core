import { Deployer } from "../lib/deployer/deployer";
import { DeployerOptions } from "../types";

const deployerOptions: DeployerOptions = {
  generateFrontendFiles: true, // * Uncomment this line to generate useful frontend file
  // generateReactComponents: true, // ! NOT_SUPPORTED_YET // * Uncomment this line to generate React Components from contracts ABI
};

async function main() {
  const deployer = new Deployer(deployerOptions);
  deployer.deploy();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

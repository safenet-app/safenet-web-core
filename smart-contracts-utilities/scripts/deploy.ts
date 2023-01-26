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

import { Deployer } from "../lib/deployer/deployer";
import { ReactComponentsGenerator } from "../lib/deployer/utils/reactComponentsGenerator";

const reactComponentsGenerator = new ReactComponentsGenerator();

async function main() {
  const deployer = new Deployer(undefined, reactComponentsGenerator);
  deployer.deploy();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

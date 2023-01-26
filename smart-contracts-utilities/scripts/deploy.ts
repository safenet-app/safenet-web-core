import { Deployer } from "../lib/deployer/deployer";
import { FrontendFilesGenerator } from "../lib/deployer/utils";

const frontendFilesGenerator = new FrontendFilesGenerator();
const deployer = new Deployer(frontendFilesGenerator);

async function main() {
  deployer.deploy();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

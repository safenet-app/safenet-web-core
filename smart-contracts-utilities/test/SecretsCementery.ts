import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { decodeEvents } from "../lib/deployer/utils/logEvents";

/**
 * Consider this workflow:
 *  1. getSigners()
 *  2. getContractFactory()
 *  3. deploy()
 *  3. test...
 */

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySecretsCementeryFixture() {
    // Contracts are deployed using the first signer/account by default
    const [acc1, acc2, acc3] = await ethers.getSigners();

    const SecretsCementery = await ethers.getContractFactory(
      "SecretsCementery"
    );
    const secretsCementery = await SecretsCementery.deploy(); // * deploy() will trigger this deployment of the contract

    await secretsCementery.deployed();
    // * deployed() checks if the contract is already available on the blockchain
    // * and if the deployment is still ongoing will wait for the deployment transaction to be mined

    return { acc1, acc2, acc3, secretsCementery };
  }

  describe("Bury new secret", function () {
    it("Should emit a `SecretBuriedOut` event", async function () {
      const { acc1, secretsCementery } = await loadFixture(
        deploySecretsCementeryFixture
      );

      const newSecret = "New Secret";

      const tx = await secretsCementery.connect(acc1).buryNewSecret(newSecret);
      const res = await tx.wait();

      decodeEvents(res);

      expect(res).to.emit(secretsCementery, "SecretBuriedOut");
    });
  });

  describe("Should query a secret", function () {
    it("Should get a secret by `id`", async function () {});
  });
});

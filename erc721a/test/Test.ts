import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";

describe("ERC721A vs ERC721", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployBase() {
    const ERC721Factory = await ethers.getContractFactory("MockERC721");
    const ERC721 = await ERC721Factory.deploy();
    const ERC721AFactory = await ethers.getContractFactory("MockERC721A");
    const ERC721A = await ERC721AFactory.deploy();

    // Contracts are deployed using the first signer/account by default
    const [ace, acadia] = await ethers.getSigners();

    return { ERC721, ERC721A, ace, acadia };
  }

  describe("Gas Tests", function () {
    it("Should set the right unlockTime", async function () {
      const { ERC721, ERC721A, ace, acadia } = await loadFixture(deployBase);
      let MAX = 100;
      await ERC721.mint(MAX);
      await ERC721A.mint(MAX);
      for (let i = 0; i < MAX; i++) {
        await ERC721.transferFrom(ace.address, acadia.address, i);
        await ERC721A.transferFrom(ace.address, acadia.address, i);
      }
    });
  });
});

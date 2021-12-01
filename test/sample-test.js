const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Registration", function () {
  it("Should return the new registry once it's changed", async function () {
    const [sender] = await ethers.getSigners();
    const NonRepudiation = await ethers.getContractFactory("NonRepudiation");
    const nonRepudiation = await NonRepudiation.deploy();
    await nonRepudiation.deployed();

    const setRegistryTx = await nonRepudiation.setRegistry("7","9");

    // wait until the transaction is mined
    await setRegistryTx.wait();
   
    // check the registration
    const registry = await nonRepudiation.registry(sender.address,"7");
    expect(registry).to.equal("9");
  });
  // TODO add a test for double registration
});

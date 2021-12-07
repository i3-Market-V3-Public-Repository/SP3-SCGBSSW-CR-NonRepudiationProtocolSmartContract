const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Registration", function () {
  it("Should return the new registry once it's changed", async function () {
    const [sender] = await ethers.getSigners();
    const NonRepudiation = await ethers.getContractFactory("NonRepudiation");
    const nonRepudiation = await NonRepudiation.deploy();
    await nonRepudiation.deployed();

    const setRegistryTx = await nonRepudiation.setRegistry("10","10");

    // wait until the transaction is mined
    await setRegistryTx.wait();
   
    // check the registration
    const registry = await nonRepudiation.registry(sender.address,"10");
    expect(registry.secret).to.equal("10");
  });
  // TODO add a test for double registration
});

const { ethers } = require("hardhat")
require("dotenv").config()

async function main() {
    const KiKoCoinFactory = await ethers.getContractFactory("KiKoCoin")
    console.log("Deploying contract........")
    const KiKoCoinContract = await KiKoCoinFactory.deploy()
    await KiKoCoinContract.deployed()
    console.log(`Contract deployed at ${KiKoCoinContract.address}`)

    console.log("------------------------------------")
    console.log()
    const tokenName = await KiKoCoinContract.name()
    const symbol = await KiKoCoinContract.symbol()
    console.log(`Token Name   : ${tokenName}`)
    console.log(`Token Symbol : ${symbol}`)
    const totalSupply = await KiKoCoinContract.totalSupply()
    console.log(`Total Supply : ${totalSupply}`)
    console.log()
    console.log("------------------------------------")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})

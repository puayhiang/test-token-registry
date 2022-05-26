import { TradeTrustERC721Factory } from "@govtechsg/token-registry";
import { providers, ethers } from "ethers";

// const provider = new providers.JsonRpcProvider();

const walletKey = 'INSERT KEY HERE'

const network = "ropsten";

const initializedProvider = providers.getDefaultProvider(network);

var wallet = new ethers.Wallet(`${walletKey}`, initializedProvider);

const test = async () => {
    const factory = new TradeTrustERC721Factory(wallet);
    const tokenRegistry = await factory.deploy("MY_TOKEN_REGISTRY", "TKN", { gasLimit: 36000000 });
}

test()
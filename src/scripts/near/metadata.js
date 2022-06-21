import * as nearAPI from "near-api-js";
const { connect, Contract } = nearAPI;

const config = {
    networkId: "mainnet",
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://explorer.mainnet.near.org",
};

export async function getMetadata(tokenId) {
    const near = await connect({ ...config });
    const deployer = await near.account('0.near');
    const TOKEN = await initializeToken(deployer, tokenId);
    return (await TOKEN.ft_metadata());
}

async function initializeToken(deployer, token) {
    const TOKEN = new Contract(
        deployer,
        token,
        {
            viewMethods: ["ft_metadata"],
            changeMethods: [],
            sender: deployer
        }
    );
    return TOKEN;
}
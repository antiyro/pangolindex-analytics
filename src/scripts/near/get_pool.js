// import * as nearAPI from "near-api-js";
// const { connect, Contract } = nearAPI;

// const config = {
//     networkId: "mainnet",
//     nodeUrl: "https://rpc.mainnet.near.org",
//     walletUrl: "https://wallet.mainnet.near.org",
//     helperUrl: "https://helper.mainnet.near.org",
//     explorerUrl: "https://explorer.mainnet.near.org",
// };

// export async function getPool(poolId) {
//     const near = await connect({ ...config });
//     const deployer = await near.account('0.near');
//     const EXCHANGE = await initializeExchange(deployer, CONTRACTS.exchange);
//     if (await EXCHANGE.get_number_of_pools() <= parseInt(poolId)) {
//         console.log("INVALID POOL_ID")
//         console.log("MAXIMUM ID:", await EXCHANGE.get_number_of_pools() - 1)
//         process.exit(1);
//     }
//     const pool = await EXCHANGE.get_pool(
//         {
//             pool_id: parseInt(poolId)
//         }
//     );
//     const poolVolumes = await EXCHANGE.get_pool_volumes(
//         {
//             pool_id: parseInt(poolId)
//         }
//     );
//     console.log("Pool Kind:", "\x1b[32m" + pool.pool_kind);
//     console.log("\x1b[37m" + "Tokens:", "\x1b[32m" + pool.token_account_ids);
//     console.log("\x1b[37m" + "Amounts:", "\x1b[32m" + pool.amounts);
//     console.log("\x1b[37m" + "Total fee:", "\x1b[32m" + pool.total_fee);
//     console.log("\x1b[37m" + "Shares total supply:", "\x1b[32m" + pool.shares_total_supply);
//     console.log("\x1b[37m" + "AMP:", "\x1b[32m" + pool.amp);
//     console.log("\x1b[37m" + "Volumes:")
//     for (i = 0; i < poolVolumes.length; i++) {
//         console.log("   \x1b[34m" + pool.token_account_ids[i])
//         console.log("       \x1b[37m" + "Input:", "\x1b[32m" + poolVolumes[i].input);
//         console.log("       \x1b[37m" + "Output:", "\x1b[32m" + poolVolumes[i].output);
//     }
// }

// async function initializeExchange(deployer, exchange) {
//     const EXCHANGE = new Contract(
//         deployer,
//         exchange,
//         {
//             viewMethods: ["get_pool", "get_number_of_pools", "get_pool_volumes"],
//             changeMethods: [],
//             sender: deployer
//         }
//     );
//     return EXCHANGE;
// }


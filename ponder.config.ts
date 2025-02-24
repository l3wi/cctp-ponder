import { createConfig } from "ponder";
import { http } from "viem";

import { tokenMessengerAbi } from "./abis/tokenMessenger";

export default createConfig({
  ordering: "multichain",
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
    base: {
      chainId: 8453,
      transport: http(process.env.PONDER_RPC_URL_8453),
    },
    avalanche: {
      chainId: 43114,
      transport: http(process.env.PONDER_RPC_URL_43114),
    },
    optimism: {
      chainId: 10,
      transport: http(process.env.PONDER_RPC_URL_10),
    },
    polygon: {
      chainId: 137,
      transport: http(process.env.PONDER_RPC_URL_137),
    },
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_42161),
    },
  },
  contracts: {
    tokenMessenger: {
      abi: tokenMessengerAbi,
      startBlock: "latest",
      network: {
        mainnet: { address: "0xbd3fa81b58ba92a82136038b25adec7066af3155" },
        avalanche: { address: "0x6b25532e1060ce10cc3b0a99e5683b91bfde6982" },
        optimism: { address: "0x2B4069517957735bE00ceE0fadAE88a26365528f" },
        arbitrum: { address: "0x19330d10D9Cc8751218eaf51E8885D058642E08A" },
        base: { address: "0x1682Ae6375C4E4A97e4B583BC394c861A46D8962" },
        polygon: { address: "0x9daF8c91AEFAE50b9c0E69629D3F6Ca40cA3B3FE" },
      },
    },
  },
});

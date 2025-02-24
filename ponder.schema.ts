import { index, onchainTable } from "ponder";

export const account = onchainTable("account", (t) => ({
  address: t.hex().primaryKey(),
  balance: t.bigint().notNull(),
}));

//   inputs: [
//     { internalType: "address", name: "_messageTransmitter", type: "address" },
//     { internalType: "uint32", name: "_messageBodyVersion", type: "uint32" },
//   ],
//   stateMutability: "nonpayable",
//   type: "constructor",
// },
// {
//   anonymous: false,
//   inputs: [
//     { indexed: true, internalType: "uint64", name: "nonce", type: "uint64" },
//     {
//       indexed: true,
//       internalType: "address",
//       name: "burnToken",
//       type: "address",
//     },
//     {
//       indexed: false,
//       internalType: "uint256",
//       name: "amount",
//       type: "uint256",
//     },
//     {
//       indexed: true,
//       internalType: "address",
//       name: "depositor",
//       type: "address",
//     },
//     {
//       indexed: false,
//       internalType: "bytes32",
//       name: "mintRecipient",
//       type: "bytes32",
//     },
//     {
//       indexed: false,
//       internalType: "uint32",
//       name: "destinationDomain",
//       type: "uint32",
//     },
//     {
//       indexed: false,
//       internalType: "bytes32",
//       name: "destinationTokenMessenger",
//       type: "bytes32",
//     },
//     {
//       indexed: false,
//       internalType: "bytes32",
//       name: "destinationCaller",
//       type: "bytes32",
//     },
//   ],
//   name: "DepositForBurn",
//   type: "event",
// },

export const burnToken = onchainTable(
  "burnToken",
  (t) => ({
    id: t.hex().primaryKey(),
    timestamp: t.timestamp().notNull(),
    depositor: t.hex().notNull(),
    amount: t.bigint().notNull(),
    mintRecipient: t.hex().notNull(),
    destinationDomain: t.bigint().notNull(),
  }),
  (table) => ({
    depositorIdx: index().on(table.depositor),
  })
);

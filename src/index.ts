import { ponder } from "ponder:registry";
import { account, burnToken } from "ponder:schema";

ponder.on("tokenMessenger:DepositForBurn", async ({ event, context }) => {
  await context.db.insert(burnToken).values({
    id: event.transaction.hash,
    timestamp: new Date(Number(event.block.timestamp) * 1000),
    depositor: event.args.depositor,
    amount: event.args.amount,
    mintRecipient: event.args.mintRecipient,
    destinationDomain: BigInt(event.args.destinationDomain),
  });
});

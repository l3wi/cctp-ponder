import { ponder } from "ponder:registry";
import { burnToken } from "ponder:schema";

ponder.on("tokenMessenger:DepositForBurn", async ({ event, context }) => {
  await context.db
    .insert(burnToken)
    .values({
      id: event.transaction.hash,
      timestamp: event.block.timestamp,
      depositor: event.args.depositor,
      amount: event.args.amount,
      mintRecipient: event.args.mintRecipient,
      destinationDomain: BigInt(event.args.destinationDomain),
    })
    .onConflictDoNothing();
});

import { index, onchainTable } from "ponder";

export const burnToken = onchainTable(
  "burnToken",
  (t) => ({
    id: t.hex().primaryKey(),
    timestamp: t.bigint().notNull(),
    depositor: t.hex().notNull(),
    amount: t.bigint().notNull(),
    mintRecipient: t.hex().notNull(),
    destinationDomain: t.bigint().notNull(),
  }),
  (table) => ({
    depositorIdx: index().on(table.depositor),
  })
);

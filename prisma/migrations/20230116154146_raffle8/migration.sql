/*
  Warnings:

  - You are about to drop the column `checkoutType` on the `StakedRaffleTickets` table. All the data in the column will be lost.
  - Added the required column `transactionType` to the `StakedRaffleTickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StakedRaffleTickets" DROP COLUMN "checkoutType",
ADD COLUMN     "transactionType" "TRANSACTION_TYPE" NOT NULL;

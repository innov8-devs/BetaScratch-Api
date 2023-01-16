/*
  Warnings:

  - Added the required column `isPaid` to the `StakedRaffleTickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StakedRaffleTickets" ADD COLUMN     "isPaid" BOOLEAN NOT NULL,
ALTER COLUMN "originalNumbers" SET DATA TYPE TEXT,
ALTER COLUMN "sortedNumbers" SET DATA TYPE TEXT;

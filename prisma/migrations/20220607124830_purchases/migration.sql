/*
  Warnings:

  - Made the column `reference` on table `Cart` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "transactionRef" TEXT,
ALTER COLUMN "reference" SET NOT NULL;

/*
  Warnings:

  - You are about to drop the column `account` on the `FlutterwaveLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FlutterwaveLog" DROP COLUMN "account",
ADD COLUMN     "customerEmail" TEXT,
ALTER COLUMN "card" DROP NOT NULL;

/*
  Warnings:

  - You are about to drop the column `referralId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_referralId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "referralId";

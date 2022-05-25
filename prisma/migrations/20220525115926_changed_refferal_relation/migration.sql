/*
  Warnings:

  - You are about to drop the column `referralId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_referralId_fkey";

-- AlterTable
ALTER TABLE "Referral" ADD COLUMN     "referrals" INTEGER[];

-- AlterTable
ALTER TABLE "User" DROP COLUMN "referralId";

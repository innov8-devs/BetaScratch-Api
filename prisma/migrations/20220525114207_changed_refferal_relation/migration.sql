/*
  Warnings:

  - You are about to drop the column `referrals` on the `Referral` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Referral" DROP COLUMN "referrals";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "referralId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_referralId_fkey" FOREIGN KEY ("referralId") REFERENCES "Referral"("id") ON DELETE SET NULL ON UPDATE CASCADE;

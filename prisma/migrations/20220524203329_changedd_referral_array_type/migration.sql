/*
  Warnings:

  - The `referrals` column on the `Refferal` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Refferal" DROP COLUMN "referrals",
ADD COLUMN     "referrals" INTEGER[];

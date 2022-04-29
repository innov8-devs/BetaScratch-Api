/*
  Warnings:

  - Made the column `amount` on table `WithdrawalRequest` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "licenseBackImage" TEXT,
ADD COLUMN     "licenseFrontImage" TEXT,
ADD COLUMN     "verificationStatus" TEXT NOT NULL DEFAULT E'inactive';

-- AlterTable
ALTER TABLE "WithdrawalRequest" ADD COLUMN     "licenseNumber" TEXT,
ADD COLUMN     "licenseType" TEXT,
ALTER COLUMN "accountNumber" SET DATA TYPE TEXT,
ALTER COLUMN "amount" SET NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE TEXT,
ALTER COLUMN "status" DROP NOT NULL;

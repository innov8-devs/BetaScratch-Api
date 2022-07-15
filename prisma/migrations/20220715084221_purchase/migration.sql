-- CreateEnum
CREATE TYPE "TRANSACTION_TYPE" AS ENUM ('ACCOUNT', 'BONUS', 'FLUTTERWAVE');

-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "flutterwaveType" TEXT,
ADD COLUMN     "transactionType" "TRANSACTION_TYPE";

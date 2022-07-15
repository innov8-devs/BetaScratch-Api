/*
  Warnings:

  - The values [ACCOUNT] on the enum `TRANSACTION_TYPE` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TRANSACTION_TYPE_new" AS ENUM ('WALLET', 'BONUS', 'FLUTTERWAVE');
ALTER TABLE "Purchase" ALTER COLUMN "transactionType" TYPE "TRANSACTION_TYPE_new" USING ("transactionType"::text::"TRANSACTION_TYPE_new");
ALTER TYPE "TRANSACTION_TYPE" RENAME TO "TRANSACTION_TYPE_old";
ALTER TYPE "TRANSACTION_TYPE_new" RENAME TO "TRANSACTION_TYPE";
DROP TYPE "TRANSACTION_TYPE_old";
COMMIT;

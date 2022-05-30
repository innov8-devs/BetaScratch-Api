-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ROLE" ADD VALUE 'IT_ADMIN';
ALTER TYPE "ROLE" ADD VALUE 'ACCOUNT_ADMIN';
ALTER TYPE "ROLE" ADD VALUE 'CUSTOMER_SUPPORT_ADMIN';
ALTER TYPE "ROLE" ADD VALUE 'BUSINESS_DEV_ADMIN';

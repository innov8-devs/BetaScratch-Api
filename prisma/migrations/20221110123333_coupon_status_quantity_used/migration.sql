-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "quantityUsed" INTEGER,
ALTER COLUMN "quantityCount" DROP NOT NULL;

/*
  Warnings:

  - Added the required column `couponUsed` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "purchaseId" INTEGER;

-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "couponUsed" BOOLEAN NOT NULL;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

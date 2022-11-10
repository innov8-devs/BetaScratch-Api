/*
  Warnings:

  - Added the required column `quantity` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantityCount` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "COUPON_QUANTITY" AS ENUM ('UNLIMITED', 'LIMITED');

-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "quantity" "COUPON_QUANTITY" NOT NULL,
ADD COLUMN     "quantityCount" INTEGER NOT NULL;

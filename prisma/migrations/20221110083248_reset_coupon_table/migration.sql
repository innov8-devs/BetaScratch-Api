/*
  Warnings:

  - You are about to drop the column `cap` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `capAmount` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `expire` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `validity` on the `Coupon` table. All the data in the column will be lost.
  - Added the required column `capped` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cappedAmount` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expires` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "cap",
DROP COLUMN "capAmount",
DROP COLUMN "expire",
DROP COLUMN "validity",
ADD COLUMN     "capped" BOOLEAN NOT NULL,
ADD COLUMN     "cappedAmount" INTEGER NOT NULL,
ADD COLUMN     "expires" TIMESTAMP(3) NOT NULL;

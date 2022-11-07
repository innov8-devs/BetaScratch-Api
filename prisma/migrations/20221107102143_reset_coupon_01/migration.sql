/*
  Warnings:

  - Added the required column `expire` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validity` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "expire" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "validity" BOOLEAN NOT NULL;

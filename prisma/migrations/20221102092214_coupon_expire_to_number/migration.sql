/*
  Warnings:

  - Changed the type of `expire` on the `Coupon` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "expire",
ADD COLUMN     "expire" INTEGER NOT NULL;

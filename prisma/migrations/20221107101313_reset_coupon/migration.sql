/*
  Warnings:

  - You are about to drop the column `amount` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `expire` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `validity` on the `Coupon` table. All the data in the column will be lost.
  - Added the required column `cap` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capAmount` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Made the column `percentage` on table `Coupon` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "amount",
DROP COLUMN "expire",
DROP COLUMN "type",
DROP COLUMN "validity",
ADD COLUMN     "cap" BOOLEAN NOT NULL,
ADD COLUMN     "capAmount" INTEGER NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL,
ALTER COLUMN "percentage" SET NOT NULL;

-- DropEnum
DROP TYPE "COUPON_TYPE";

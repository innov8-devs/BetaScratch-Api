/*
  Warnings:

  - You are about to drop the column `expire` on the `Coupon` table. All the data in the column will be lost.
  - Added the required column `expireMinutes` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "expire",
ADD COLUMN     "expireMinutes" INTEGER NOT NULL;

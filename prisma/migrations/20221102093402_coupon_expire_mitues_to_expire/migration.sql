/*
  Warnings:

  - You are about to drop the column `expireMinutes` on the `Coupon` table. All the data in the column will be lost.
  - Added the required column `expire` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "expireMinutes",
ADD COLUMN     "expire" TIMESTAMP(3) NOT NULL;

/*
  Warnings:

  - You are about to drop the column `expiriy` on the `Raffle` table. All the data in the column will be lost.
  - Added the required column `expiry` to the `Raffle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Raffle" DROP COLUMN "expiriy",
ADD COLUMN     "expiry" TIMESTAMP(3) NOT NULL;

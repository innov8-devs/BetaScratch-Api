/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `ResetPasswordMetrics` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Raffle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Raffle" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ResetPasswordMetrics" DROP COLUMN "updatedAt";

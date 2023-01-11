/*
  Warnings:

  - Added the required column `updatedAt` to the `ResetPasswordMetrics` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RAFFLE_TYPE" AS ENUM ('WEEKLY', 'YEARLY');

-- AlterTable
ALTER TABLE "ResetPasswordMetrics" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Raffle" (
    "id" SERIAL NOT NULL,
    "type" "RAFFLE_TYPE" NOT NULL,
    "win" INTEGER NOT NULL,
    "stake" INTEGER NOT NULL,
    "expiriy" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Raffle_pkey" PRIMARY KEY ("id")
);

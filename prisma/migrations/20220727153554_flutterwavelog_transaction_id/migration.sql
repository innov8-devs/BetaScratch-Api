/*
  Warnings:

  - Added the required column `transactionId` to the `FlutterwaveLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FlutterwaveLog" ADD COLUMN     "transactionId" INTEGER NOT NULL;

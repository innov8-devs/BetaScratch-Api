/*
  Warnings:

  - A unique constraint covering the columns `[referralId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "referralId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_referralId_key" ON "User"("referralId");

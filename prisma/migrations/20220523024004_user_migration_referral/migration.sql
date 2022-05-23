/*
  Warnings:

  - A unique constraint covering the columns `[referralId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "referralId" TEXT;

-- CreateTable
CREATE TABLE "Refferal" (
    "id" SERIAL NOT NULL,
    "referrals" TEXT[],
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Refferal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Refferal_userId_key" ON "Refferal"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_referralId_key" ON "User"("referralId");

-- AddForeignKey
ALTER TABLE "Refferal" ADD CONSTRAINT "Refferal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

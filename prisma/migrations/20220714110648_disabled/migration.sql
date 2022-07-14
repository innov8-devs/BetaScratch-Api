/*
  Warnings:

  - You are about to drop the column `disaled` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "disaled",
ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false;

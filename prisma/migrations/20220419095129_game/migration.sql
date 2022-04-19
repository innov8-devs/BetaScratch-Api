/*
  Warnings:

  - Added the required column `availability` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "availability" INTEGER NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;

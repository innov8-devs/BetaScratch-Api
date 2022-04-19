/*
  Warnings:

  - You are about to drop the column `availability` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `defaultCurrrency` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `gameId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Game` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Game_gameId_key";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "availability",
DROP COLUMN "defaultCurrrency",
DROP COLUMN "description",
DROP COLUMN "gameId",
DROP COLUMN "imageUrl",
DROP COLUMN "price";

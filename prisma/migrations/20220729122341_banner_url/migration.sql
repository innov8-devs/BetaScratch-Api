/*
  Warnings:

  - A unique constraint covering the columns `[imageUrl]` on the table `Banner` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageUrl` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Banner_url_key";

-- AlterTable
ALTER TABLE "Banner" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ALTER COLUMN "url" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Banner_imageUrl_key" ON "Banner"("imageUrl");

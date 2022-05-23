-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "played" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "reference" TEXT;

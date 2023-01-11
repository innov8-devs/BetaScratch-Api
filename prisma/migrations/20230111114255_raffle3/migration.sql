/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `Raffle` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Raffle_type_key" ON "Raffle"("type");

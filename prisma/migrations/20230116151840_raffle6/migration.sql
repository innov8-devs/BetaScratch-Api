/*
  Warnings:

  - You are about to drop the `StakedRaffle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StakedRaffle" DROP CONSTRAINT "StakedRaffle_userId_fkey";

-- DropTable
DROP TABLE "StakedRaffle";

-- CreateTable
CREATE TABLE "StakedRaffleTickets" (
    "id" SERIAL NOT NULL,
    "type" "RAFFLE_TYPE" NOT NULL,
    "originalNumbers" INTEGER NOT NULL,
    "sortedNumbers" INTEGER NOT NULL,
    "reference" TEXT,
    "checkoutType" "TRANSACTION_TYPE" NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StakedRaffleTickets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StakedRaffleTickets" ADD CONSTRAINT "StakedRaffleTickets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

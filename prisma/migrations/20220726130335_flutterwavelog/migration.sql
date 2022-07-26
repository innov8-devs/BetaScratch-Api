-- CreateTable
CREATE TABLE "FlutterwaveLog" (
    "id" SERIAL NOT NULL,
    "tx_ref" TEXT NOT NULL,
    "amount" INTEGER,
    "currency" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "paymentType" TEXT NOT NULL,
    "account" JSONB NOT NULL,
    "customerName" TEXT,
    "narration" TEXT NOT NULL,
    "processorResponse" TEXT,
    "card" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FlutterwaveLog_pkey" PRIMARY KEY ("id")
);

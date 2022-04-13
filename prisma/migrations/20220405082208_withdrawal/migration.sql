-- CreateTable
CREATE TABLE "WithdrawalRequest" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "bank" TEXT,
    "accountNumber" INTEGER,
    "accountName" TEXT,
    "amount" INTEGER,
    "status" TEXT NOT NULL,
    "paypal" TEXT,
    "btcWalletAdderess" TEXT,

    CONSTRAINT "WithdrawalRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WithdrawalRequest" ADD CONSTRAINT "WithdrawalRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

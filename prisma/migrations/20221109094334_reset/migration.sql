-- CreateTable
CREATE TABLE "ResetPasswordMetrics" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "ResetPasswordMetrics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ResetPasswordMetrics" ADD CONSTRAINT "ResetPasswordMetrics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "StakedRaffle" (
    "id" SERIAL NOT NULL,
    "type" "RAFFLE_TYPE" NOT NULL,
    "numbers" INTEGER[],
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StakedRaffle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StakedRaffle_type_key" ON "StakedRaffle"("type");

-- AddForeignKey
ALTER TABLE "StakedRaffle" ADD CONSTRAINT "StakedRaffle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

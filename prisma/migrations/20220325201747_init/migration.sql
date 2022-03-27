-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "expire" TIMESTAMP(3) NOT NULL,
    "validity" BOOLEAN NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

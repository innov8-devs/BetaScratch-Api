-- CreateTable
CREATE TABLE "GameCategory" (
    "id" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,
    "categoryLabel" TEXT NOT NULL,

    CONSTRAINT "GameCategory_pkey" PRIMARY KEY ("id")
);

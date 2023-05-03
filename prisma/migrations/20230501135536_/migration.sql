-- CreateEnum
CREATE TYPE "TypeSex" AS ENUM ('mare', 'gelding', 'stallion');

-- CreateTable
CREATE TABLE "Horse" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "sex" TEXT NOT NULL,
    "profileImageUrl" TEXT,
    "place" TEXT NOT NULL,
    "mother" TEXT NOT NULL,
    "father" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Horse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsTab" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tabName" TEXT NOT NULL,

    CONSTRAINT "NewsTab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VetTab" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tabName" TEXT NOT NULL,

    CONSTRAINT "VetTab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FarrierTab" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tabName" TEXT NOT NULL,

    CONSTRAINT "FarrierTab_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Horse_name_key" ON "Horse"("name");

-- AddForeignKey
ALTER TABLE "NewsTab" ADD CONSTRAINT "NewsTab_tabName_fkey" FOREIGN KEY ("tabName") REFERENCES "Horse"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VetTab" ADD CONSTRAINT "VetTab_tabName_fkey" FOREIGN KEY ("tabName") REFERENCES "Horse"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarrierTab" ADD CONSTRAINT "FarrierTab_tabName_fkey" FOREIGN KEY ("tabName") REFERENCES "Horse"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

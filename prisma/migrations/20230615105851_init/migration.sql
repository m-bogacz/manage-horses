-- CreateEnum
CREATE TYPE "TypeSex" AS ENUM ('mare', 'gelding', 'stallion');

-- CreateTable
CREATE TABLE "Horse" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "sex" TEXT,
    "profileImageUrl" TEXT,
    "place" TEXT,
    "images" TEXT[],
    "createAsParent" BOOLEAN NOT NULL DEFAULT false,
    "fatherName" TEXT,
    "motherName" TEXT,

    CONSTRAINT "Horse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsTab" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "horseName" TEXT NOT NULL,
    "executedBy" TEXT,

    CONSTRAINT "NewsTab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VetTab" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "horseName" TEXT NOT NULL,
    "executedBy" TEXT,

    CONSTRAINT "VetTab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FarrierTab" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "horseName" TEXT NOT NULL,
    "executedBy" TEXT,

    CONSTRAINT "FarrierTab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhotosEntity" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "horseName" TEXT NOT NULL,

    CONSTRAINT "PhotosEntity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Horse_name_key" ON "Horse"("name");

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_fatherName_fkey" FOREIGN KEY ("fatherName") REFERENCES "Horse"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_motherName_fkey" FOREIGN KEY ("motherName") REFERENCES "Horse"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsTab" ADD CONSTRAINT "NewsTab_horseName_fkey" FOREIGN KEY ("horseName") REFERENCES "Horse"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VetTab" ADD CONSTRAINT "VetTab_horseName_fkey" FOREIGN KEY ("horseName") REFERENCES "Horse"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarrierTab" ADD CONSTRAINT "FarrierTab_horseName_fkey" FOREIGN KEY ("horseName") REFERENCES "Horse"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotosEntity" ADD CONSTRAINT "PhotosEntity_horseName_fkey" FOREIGN KEY ("horseName") REFERENCES "Horse"("name") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `horseName` on the `FarrierTab` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `FarrierTab` table. All the data in the column will be lost.
  - The primary key for the `NewsTab` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `horseName` on the `NewsTab` table. All the data in the column will be lost.
  - You are about to drop the column `newsId` on the `NewsTab` table. All the data in the column will be lost.
  - You are about to drop the column `horseName` on the `VetTab` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `VetTab` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "FarrierTab" DROP CONSTRAINT "FarrierTab_horseName_fkey";

-- DropForeignKey
ALTER TABLE "NewsTab" DROP CONSTRAINT "NewsTab_newsId_fkey";

-- DropForeignKey
ALTER TABLE "VetTab" DROP CONSTRAINT "VetTab_horseName_fkey";

-- AlterTable
ALTER TABLE "FarrierTab" DROP COLUMN "horseName",
DROP COLUMN "type";

-- AlterTable
ALTER TABLE "NewsTab" DROP CONSTRAINT "NewsTab_pkey",
DROP COLUMN "horseName",
DROP COLUMN "newsId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "NewsTab_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "VetTab" DROP COLUMN "horseName",
DROP COLUMN "type";

-- CreateTable
CREATE TABLE "Veterinarian" (
    "id" SERIAL NOT NULL,
    "type" "TypeTab" NOT NULL DEFAULT 'veterinarian',
    "horseName" TEXT,

    CONSTRAINT "Veterinarian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farrier" (
    "id" SERIAL NOT NULL,
    "type" "TypeTab" NOT NULL DEFAULT 'farrier',
    "horseName" TEXT,

    CONSTRAINT "Farrier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Veterinarian_horseName_key" ON "Veterinarian"("horseName");

-- CreateIndex
CREATE UNIQUE INDEX "Farrier_horseName_key" ON "Farrier"("horseName");

-- AddForeignKey
ALTER TABLE "NewsTab" ADD CONSTRAINT "NewsTab_id_fkey" FOREIGN KEY ("id") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veterinarian" ADD CONSTRAINT "Veterinarian_horseName_fkey" FOREIGN KEY ("horseName") REFERENCES "Horse"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VetTab" ADD CONSTRAINT "VetTab_id_fkey" FOREIGN KEY ("id") REFERENCES "Veterinarian"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farrier" ADD CONSTRAINT "Farrier_horseName_fkey" FOREIGN KEY ("horseName") REFERENCES "Horse"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarrierTab" ADD CONSTRAINT "FarrierTab_id_fkey" FOREIGN KEY ("id") REFERENCES "Farrier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `newsId` on the `Horse` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[horseName]` on the table `News` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Horse" DROP CONSTRAINT "Horse_newsId_fkey";

-- AlterTable
ALTER TABLE "Horse" DROP COLUMN "newsId";

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "horseName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "News_horseName_key" ON "News"("horseName");

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_horseName_fkey" FOREIGN KEY ("horseName") REFERENCES "Horse"("name") ON DELETE SET NULL ON UPDATE CASCADE;

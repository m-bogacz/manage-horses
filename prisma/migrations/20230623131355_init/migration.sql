/*
  Warnings:

  - You are about to drop the column `sex` on the `Horse` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "FarrierTab" DROP CONSTRAINT "FarrierTab_id_fkey";

-- DropForeignKey
ALTER TABLE "NewsTab" DROP CONSTRAINT "NewsTab_id_fkey";

-- DropForeignKey
ALTER TABLE "VetTab" DROP CONSTRAINT "VetTab_id_fkey";

-- AlterTable
ALTER TABLE "FarrierTab" ADD COLUMN     "farrierId" INTEGER;

-- AlterTable
ALTER TABLE "Horse" DROP COLUMN "sex",
ADD COLUMN     "gender" "TypeGender";

-- AlterTable
ALTER TABLE "NewsTab" ADD COLUMN     "newsId" INTEGER;

-- AlterTable
ALTER TABLE "VetTab" ADD COLUMN     "vetId" INTEGER;

-- AddForeignKey
ALTER TABLE "NewsTab" ADD CONSTRAINT "NewsTab_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VetTab" ADD CONSTRAINT "VetTab_vetId_fkey" FOREIGN KEY ("vetId") REFERENCES "Veterinarian"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarrierTab" ADD CONSTRAINT "FarrierTab_farrierId_fkey" FOREIGN KEY ("farrierId") REFERENCES "Farrier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

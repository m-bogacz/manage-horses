-- CreateEnum
CREATE TYPE "TypeGender" AS ENUM ('mare', 'gelding', 'stallion');

-- CreateEnum
CREATE TYPE "TypeTab" AS ENUM ('news', 'veterinarian', 'farrier');

-- DropForeignKey
ALTER TABLE "NewsTab" DROP CONSTRAINT "NewsTab_horseName_fkey";

-- AlterTable
ALTER TABLE "FarrierTab" ADD COLUMN     "type" "TypeTab" NOT NULL DEFAULT 'farrier';

-- AlterTable
ALTER TABLE "Horse" ADD COLUMN     "newsId" INTEGER;

-- AlterTable
ALTER TABLE "NewsTab" ADD COLUMN     "newsId" INTEGER;

-- AlterTable
ALTER TABLE "VetTab" ADD COLUMN     "type" "TypeTab" NOT NULL DEFAULT 'veterinarian';

-- DropEnum
DROP TYPE "TypeSex";

-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "type" "TypeTab" NOT NULL DEFAULT 'news',

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsTab" ADD CONSTRAINT "NewsTab_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE SET NULL ON UPDATE CASCADE;

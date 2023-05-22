/*
  Warnings:

  - You are about to drop the column `horseId` on the `SlideEntity` table. All the data in the column will be lost.
  - Added the required column `horseName` to the `SlideEntity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SlideEntity" DROP CONSTRAINT "SlideEntity_horseId_fkey";

-- AlterTable
ALTER TABLE "SlideEntity" DROP COLUMN "horseId",
ADD COLUMN     "horseName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SlideEntity" ADD CONSTRAINT "SlideEntity_horseName_fkey" FOREIGN KEY ("horseName") REFERENCES "Horse"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

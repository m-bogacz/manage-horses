/*
  Warnings:

  - The primary key for the `NewsTab` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `NewsTab` table. All the data in the column will be lost.
  - Made the column `newsId` on table `NewsTab` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "NewsTab" DROP CONSTRAINT "NewsTab_newsId_fkey";

-- AlterTable
CREATE SEQUENCE newstab_newsid_seq;
ALTER TABLE "NewsTab" DROP CONSTRAINT "NewsTab_pkey",
DROP COLUMN "id",
ALTER COLUMN "newsId" SET NOT NULL,
ALTER COLUMN "newsId" SET DEFAULT nextval('newstab_newsid_seq'),
ADD CONSTRAINT "NewsTab_pkey" PRIMARY KEY ("newsId");
ALTER SEQUENCE newstab_newsid_seq OWNED BY "NewsTab"."newsId";

-- AddForeignKey
ALTER TABLE "NewsTab" ADD CONSTRAINT "NewsTab_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

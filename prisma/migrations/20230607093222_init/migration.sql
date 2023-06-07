-- DropForeignKey
ALTER TABLE "FarrierTab" DROP CONSTRAINT "FarrierTab_tabName_fkey";

-- DropForeignKey
ALTER TABLE "NewsTab" DROP CONSTRAINT "NewsTab_tabName_fkey";

-- DropForeignKey
ALTER TABLE "SlideEntity" DROP CONSTRAINT "SlideEntity_horseName_fkey";

-- DropForeignKey
ALTER TABLE "VetTab" DROP CONSTRAINT "VetTab_tabName_fkey";

-- DropIndex
DROP INDEX "SlideEntity_src_key";

-- AddForeignKey
ALTER TABLE "NewsTab" ADD CONSTRAINT "NewsTab_tabName_fkey" FOREIGN KEY ("tabName") REFERENCES "Horse"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VetTab" ADD CONSTRAINT "VetTab_tabName_fkey" FOREIGN KEY ("tabName") REFERENCES "Horse"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarrierTab" ADD CONSTRAINT "FarrierTab_tabName_fkey" FOREIGN KEY ("tabName") REFERENCES "Horse"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SlideEntity" ADD CONSTRAINT "SlideEntity_horseName_fkey" FOREIGN KEY ("horseName") REFERENCES "Horse"("name") ON DELETE CASCADE ON UPDATE CASCADE;

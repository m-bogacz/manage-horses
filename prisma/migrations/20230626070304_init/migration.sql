-- CreateEnum
CREATE TYPE "TypeGender" AS ENUM ('mare', 'gelding', 'stallion');

-- CreateEnum
CREATE TYPE "TypeTab" AS ENUM ('news', 'veterinarian', 'farrier');

-- CreateTable
CREATE TABLE "Horse" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "gender" "TypeGender",
    "profile_image_url" TEXT,
    "place" TEXT,
    "images" TEXT[],
    "create_as_parent" BOOLEAN NOT NULL DEFAULT false,
    "father_name" TEXT,
    "mother_name" TEXT,

    CONSTRAINT "Horse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "type" "TypeTab" NOT NULL DEFAULT 'news',
    "horse_name" TEXT,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsTab" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "executed_by" TEXT,
    "news_id" INTEGER,

    CONSTRAINT "NewsTab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Veterinarian" (
    "id" SERIAL NOT NULL,
    "type" "TypeTab" NOT NULL DEFAULT 'veterinarian',
    "horse_name" TEXT,

    CONSTRAINT "Veterinarian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VetTab" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "executed_by" TEXT,
    "vet_id" INTEGER,

    CONSTRAINT "VetTab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farrier" (
    "id" SERIAL NOT NULL,
    "type" "TypeTab" NOT NULL DEFAULT 'farrier',
    "horse_name" TEXT,

    CONSTRAINT "Farrier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FarrierTab" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "executed_by" TEXT,
    "farrier_id" INTEGER,

    CONSTRAINT "FarrierTab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhotosEntity" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "horse_name" TEXT NOT NULL,

    CONSTRAINT "PhotosEntity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Horse_name_key" ON "Horse"("name");

-- CreateIndex
CREATE UNIQUE INDEX "News_horse_name_key" ON "News"("horse_name");

-- CreateIndex
CREATE UNIQUE INDEX "Veterinarian_horse_name_key" ON "Veterinarian"("horse_name");

-- CreateIndex
CREATE UNIQUE INDEX "Farrier_horse_name_key" ON "Farrier"("horse_name");

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_father_name_fkey" FOREIGN KEY ("father_name") REFERENCES "Horse"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Horse" ADD CONSTRAINT "Horse_mother_name_fkey" FOREIGN KEY ("mother_name") REFERENCES "Horse"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_horse_name_fkey" FOREIGN KEY ("horse_name") REFERENCES "Horse"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsTab" ADD CONSTRAINT "NewsTab_news_id_fkey" FOREIGN KEY ("news_id") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veterinarian" ADD CONSTRAINT "Veterinarian_horse_name_fkey" FOREIGN KEY ("horse_name") REFERENCES "Horse"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VetTab" ADD CONSTRAINT "VetTab_vet_id_fkey" FOREIGN KEY ("vet_id") REFERENCES "Veterinarian"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farrier" ADD CONSTRAINT "Farrier_horse_name_fkey" FOREIGN KEY ("horse_name") REFERENCES "Horse"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarrierTab" ADD CONSTRAINT "FarrierTab_farrier_id_fkey" FOREIGN KEY ("farrier_id") REFERENCES "Farrier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotosEntity" ADD CONSTRAINT "PhotosEntity_horse_name_fkey" FOREIGN KEY ("horse_name") REFERENCES "Horse"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "SlideEntity" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "horseId" INTEGER,

    CONSTRAINT "SlideEntity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SlideEntity_src_key" ON "SlideEntity"("src");

-- AddForeignKey
ALTER TABLE "SlideEntity" ADD CONSTRAINT "SlideEntity_horseId_fkey" FOREIGN KEY ("horseId") REFERENCES "Horse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

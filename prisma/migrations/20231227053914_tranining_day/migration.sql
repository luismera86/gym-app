/*
  Warnings:

  - You are about to drop the `TrainingDayUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TrainingDayUser" DROP CONSTRAINT "TrainingDayUser_trainingDayId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingDayUser" DROP CONSTRAINT "TrainingDayUser_userId_fkey";

-- DropTable
DROP TABLE "TrainingDayUser";

-- CreateTable
CREATE TABLE "_TrainingDayToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TrainingDayToUser_AB_unique" ON "_TrainingDayToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TrainingDayToUser_B_index" ON "_TrainingDayToUser"("B");

-- AddForeignKey
ALTER TABLE "_TrainingDayToUser" ADD CONSTRAINT "_TrainingDayToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "TrainingDay"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrainingDayToUser" ADD CONSTRAINT "_TrainingDayToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

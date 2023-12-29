/*
  Warnings:

  - You are about to drop the column `usersLimit` on the `TrainingDay` table. All the data in the column will be lost.
  - You are about to drop the `_TrainingDayToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TrainingDayToUser" DROP CONSTRAINT "_TrainingDayToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_TrainingDayToUser" DROP CONSTRAINT "_TrainingDayToUser_B_fkey";

-- AlterTable
ALTER TABLE "TrainingDay" DROP COLUMN "usersLimit",
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "trainingDayHourId" TEXT;

-- DropTable
DROP TABLE "_TrainingDayToUser";

-- CreateTable
CREATE TABLE "TrainingDayHour" (
    "id" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "trainingDayId" TEXT NOT NULL,
    "userLimit" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "TrainingDayHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TrainingDayHourToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TrainingDayHourToUser_AB_unique" ON "_TrainingDayHourToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TrainingDayHourToUser_B_index" ON "_TrainingDayHourToUser"("B");

-- AddForeignKey
ALTER TABLE "TrainingDayHour" ADD CONSTRAINT "TrainingDayHour_trainingDayId_fkey" FOREIGN KEY ("trainingDayId") REFERENCES "TrainingDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrainingDayHourToUser" ADD CONSTRAINT "_TrainingDayHourToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "TrainingDayHour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TrainingDayHourToUser" ADD CONSTRAINT "_TrainingDayHourToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

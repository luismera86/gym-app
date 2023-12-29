/*
  Warnings:

  - You are about to drop the column `hour` on the `TrainingDay` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TrainingDay" DROP COLUMN "hour";

-- AlterTable
ALTER TABLE "TrainingDayHour" ALTER COLUMN "userLimit" SET DEFAULT 3;

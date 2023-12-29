/*
  Warnings:

  - You are about to drop the column `daysSuscription` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "daysSuscription",
ADD COLUMN     "daysSubscription" INTEGER NOT NULL DEFAULT 0;

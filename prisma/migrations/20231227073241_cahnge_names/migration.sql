/*
  Warnings:

  - You are about to drop the column `susciptionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Susciption` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `subscriptionId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_susciptionId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "susciptionId",
ADD COLUMN     "subscriptionId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Susciption";

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "days" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_name_key" ON "Subscription"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

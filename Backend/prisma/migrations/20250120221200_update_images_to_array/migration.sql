/*
  Warnings:

  - The `images` column on the `Gallery` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `imageUrl` column on the `Menu` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Gallery" DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];

-- AlterTable
ALTER TABLE "Menu" DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[];

/*
  Warnings:

  - Changed the type of `type` on the `About` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('VISI', 'MISI', 'BACKGROUND');

-- AlterTable
ALTER TABLE "About" DROP COLUMN "type",
ADD COLUMN     "type" "Type" NOT NULL;

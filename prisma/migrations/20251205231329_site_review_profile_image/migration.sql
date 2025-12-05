/*
  Warnings:

  - Added the required column `description` to the `SiteReview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImage` to the `SiteReview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SiteReview" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT NOT NULL;

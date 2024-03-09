/*
  Warnings:

  - Made the column `title` on table `FeedbackSection` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FeedbackSection" ALTER COLUMN "title" SET NOT NULL;

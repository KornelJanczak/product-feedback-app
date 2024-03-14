/*
  Warnings:

  - Added the required column `authorId` to the `FeedbackToFeedbackSection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FeedbackToFeedbackSection" ADD COLUMN     "authorId" TEXT NOT NULL;

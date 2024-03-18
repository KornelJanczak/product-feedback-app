/*
  Warnings:

  - You are about to drop the column `count` on the `CommentsToSuggestion` table. All the data in the column will be lost.
  - You are about to drop the column `count` on the `FeedbackToFeedbackSection` table. All the data in the column will be lost.
  - You are about to drop the column `count` on the `RepliesToComments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CommentsToSuggestion" DROP COLUMN "count";

-- AlterTable
ALTER TABLE "FeedbackToFeedbackSection" DROP COLUMN "count",
ADD COLUMN     "likedBy" TEXT[];

-- AlterTable
ALTER TABLE "RepliesToComments" DROP COLUMN "count";

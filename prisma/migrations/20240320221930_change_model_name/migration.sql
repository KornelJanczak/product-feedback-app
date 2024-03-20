/*
  Warnings:

  - You are about to drop the `CommentsToSuggestion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CommentsToSuggestion" DROP CONSTRAINT "CommentsToSuggestion_suggestionId_fkey";

-- DropForeignKey
ALTER TABLE "RepliesToComments" DROP CONSTRAINT "RepliesToComments_commentId_fkey";

-- DropTable
DROP TABLE "CommentsToSuggestion";

-- CreateTable
CREATE TABLE "CommentsToFeedback" (
    "id" TEXT NOT NULL,
    "feedbackId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommentsToFeedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommentsToFeedback" ADD CONSTRAINT "CommentsToFeedback_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "FeedbackToFeedbackSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesToComments" ADD CONSTRAINT "RepliesToComments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "CommentsToFeedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

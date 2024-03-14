/*
  Warnings:

  - You are about to drop the `SuggestionsToFeedbackSection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CommentsToSuggestion" DROP CONSTRAINT "CommentsToSuggestion_suggestionId_fkey";

-- DropForeignKey
ALTER TABLE "SuggestionsToFeedbackSection" DROP CONSTRAINT "SuggestionsToFeedbackSection_feedbackSectionId_fkey";

-- DropTable
DROP TABLE "SuggestionsToFeedbackSection";

-- CreateTable
CREATE TABLE "FeedbackToFeedbackSection" (
    "id" TEXT NOT NULL,
    "feedbackSectionId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeedbackToFeedbackSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeedbackToFeedbackSection" ADD CONSTRAINT "FeedbackToFeedbackSection_feedbackSectionId_fkey" FOREIGN KEY ("feedbackSectionId") REFERENCES "FeedbackSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentsToSuggestion" ADD CONSTRAINT "CommentsToSuggestion_suggestionId_fkey" FOREIGN KEY ("suggestionId") REFERENCES "FeedbackToFeedbackSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

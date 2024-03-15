-- DropForeignKey
ALTER TABLE "ActivityToFeedbackSection" DROP CONSTRAINT "ActivityToFeedbackSection_feedbackSectionId_fkey";

-- AddForeignKey
ALTER TABLE "ActivityToFeedbackSection" ADD CONSTRAINT "ActivityToFeedbackSection_feedbackSectionId_fkey" FOREIGN KEY ("feedbackSectionId") REFERENCES "FeedbackSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

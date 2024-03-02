-- DropForeignKey
ALTER TABLE "AdminToFeedbackSection" DROP CONSTRAINT "AdminToFeedbackSection_feedbackSectionId_fkey";

-- DropForeignKey
ALTER TABLE "UserToFeedbackSection" DROP CONSTRAINT "UserToFeedbackSection_feedbackSectionId_fkey";

-- AddForeignKey
ALTER TABLE "UserToFeedbackSection" ADD CONSTRAINT "UserToFeedbackSection_feedbackSectionId_fkey" FOREIGN KEY ("feedbackSectionId") REFERENCES "FeedbackSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminToFeedbackSection" ADD CONSTRAINT "AdminToFeedbackSection_feedbackSectionId_fkey" FOREIGN KEY ("feedbackSectionId") REFERENCES "FeedbackSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

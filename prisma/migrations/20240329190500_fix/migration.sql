-- DropForeignKey
ALTER TABLE "RepliesToComments" DROP CONSTRAINT "RepliesToComments_commentId_fkey";

-- AddForeignKey
ALTER TABLE "RepliesToComments" ADD CONSTRAINT "RepliesToComments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "CommentsToFeedback"("id") ON DELETE CASCADE ON UPDATE CASCADE;

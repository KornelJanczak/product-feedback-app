/*
  Warnings:

  - You are about to drop the column `authorId` on the `FeedbackSection` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `FeedbackSection` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `FeedbackSection` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `UserToFeedbackSection` table. All the data in the column will be lost.
  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_feedbackSectionId_fkey";

-- AlterTable
ALTER TABLE "FeedbackSection" DROP COLUMN "authorId",
DROP COLUMN "description",
DROP COLUMN "type",
ADD COLUMN     "title" TEXT;

-- AlterTable
ALTER TABLE "UserToFeedbackSection" DROP COLUMN "role";

-- DropTable
DROP TABLE "Feedback";

-- CreateTable
CREATE TABLE "AdminToFeedbackSection" (
    "userId" TEXT NOT NULL,
    "feedbackSectionId" TEXT NOT NULL,

    CONSTRAINT "AdminToFeedbackSection_pkey" PRIMARY KEY ("userId","feedbackSectionId")
);

-- AddForeignKey
ALTER TABLE "AdminToFeedbackSection" ADD CONSTRAINT "AdminToFeedbackSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminToFeedbackSection" ADD CONSTRAINT "AdminToFeedbackSection_feedbackSectionId_fkey" FOREIGN KEY ("feedbackSectionId") REFERENCES "FeedbackSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

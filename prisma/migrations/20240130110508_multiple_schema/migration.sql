-- CreateTable
CREATE TABLE "Friend" (
    "friendOfId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,

    PRIMARY KEY ("friendId", "friendOfId"),
    CONSTRAINT "Friend_friendOfId_fkey" FOREIGN KEY ("friendOfId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Friend_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FeedbackSection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "authorId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "feedbackSectionId" TEXT NOT NULL,
    CONSTRAINT "Feedback_feedbackSectionId_fkey" FOREIGN KEY ("feedbackSectionId") REFERENCES "FeedbackSection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserToFeedbackSection" (
    "userId" TEXT NOT NULL,
    "feedbackSectionId" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    PRIMARY KEY ("userId", "feedbackSectionId"),
    CONSTRAINT "UserToFeedbackSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserToFeedbackSection_feedbackSectionId_fkey" FOREIGN KEY ("feedbackSectionId") REFERENCES "FeedbackSection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

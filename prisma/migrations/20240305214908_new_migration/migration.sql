-- CreateTable
CREATE TABLE "ActivityToFeedbackSection" (
    "id" TEXT NOT NULL,
    "feedbackSectionId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ActivityToFeedbackSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuggestionsToFeedbackSection" (
    "id" TEXT NOT NULL,
    "feedbackSectionId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuggestionsToFeedbackSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentsToSuggestion" (
    "id" TEXT NOT NULL,
    "suggestionId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CommentsToSuggestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepliesToComments" (
    "id" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "RepliesToComments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActivityToFeedbackSection" ADD CONSTRAINT "ActivityToFeedbackSection_feedbackSectionId_fkey" FOREIGN KEY ("feedbackSectionId") REFERENCES "FeedbackSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuggestionsToFeedbackSection" ADD CONSTRAINT "SuggestionsToFeedbackSection_feedbackSectionId_fkey" FOREIGN KEY ("feedbackSectionId") REFERENCES "FeedbackSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentsToSuggestion" ADD CONSTRAINT "CommentsToSuggestion_suggestionId_fkey" FOREIGN KEY ("suggestionId") REFERENCES "SuggestionsToFeedbackSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepliesToComments" ADD CONSTRAINT "RepliesToComments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "CommentsToSuggestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

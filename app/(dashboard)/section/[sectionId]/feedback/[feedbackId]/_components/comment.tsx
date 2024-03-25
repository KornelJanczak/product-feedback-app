"use client";
import { Separator } from "@/components/ui/separator";
import CommentCard from "./comment-card";
import { CommentsToFeedback } from "@prisma/client";
import { useState } from "react";

export interface ICommentWithAuthor extends CommentsToFeedback {
  author: IAuthor | undefined;
}

export default function Comment({
  comment,
  replies,
  currentUserIsAdmin,
  currentUserIsAuthor,
}: {
  currentUserIsAdmin: boolean;
  currentUserIsAuthor: boolean;
  comment: ICommentWithAuthor;
  replies: ICommentWithAuthor[];
}) {
  const [openReplyContainer, setOpenReplyContainer] = useState<boolean>(false);

  return (
    <div>
      <CommentCard
        id={comment.id}
        cardType="comment"
        createdAt={comment.createdAt}
        author={comment.author}
        content={comment.content}
        commentHasReplies={replies.length > 0}
        openReplyContainer={openReplyContainer}
        setOpenReplyContainer={() => {
          setOpenReplyContainer(true);
        }}
        currentUserIsAdmin={currentUserIsAdmin}
        currentUserIsAuthor={currentUserIsAuthor}
      />
      {openReplyContainer && (
        <div className="flex flex-row pl-6 pt-2">
          <Separator orientation="vertical" className=" h-30" />
          <div className="flex w-full flex-col gap-3">
            {replies.map((reply) => (
              <div key={reply.id} className="flex gap-2 w-full pl-4">
                <CommentCard
                  id={reply.id}
                  cardType="reply"
                  createdAt={reply.createdAt}
                  author={reply.author}
                  content={reply.content}
                  currentUserIsAdmin={currentUserIsAdmin}
                  currentUserIsAuthor={currentUserIsAuthor}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

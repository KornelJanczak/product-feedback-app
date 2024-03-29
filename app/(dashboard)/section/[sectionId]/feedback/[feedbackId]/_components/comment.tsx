"use client";
import { Separator } from "@/components/ui/separator";
import CommentCard from "./comment-card";
import { useState } from "react";

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

  const isReplies = replies.length > 0;

  return (
    <div>
      <CommentCard
        commentId={comment.id}
        cardType="comment"
        createdAt={comment.createdAt}
        author={comment.author}
        content={comment.content}
        commentHasReplies={isReplies}
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
                  commentId={comment.id}
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

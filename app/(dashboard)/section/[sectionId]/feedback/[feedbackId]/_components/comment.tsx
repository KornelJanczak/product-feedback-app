import { Separator } from "@/components/ui/separator";
import CommentCard from "./comment-card";
import { CommentsToFeedback } from "@prisma/client";

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
  return (
    <div>
      <CommentCard
        id={comment.id}
        createdAt={comment.createdAt}
        author={comment.author}
        content={comment.content}
        currentUserIsAdmin={currentUserIsAdmin}
        currentUserIsAuthor={currentUserIsAuthor}
      />
      <div className="flex flex-row">
        <Separator orientation="vertical" className="center h-30" />
        <div className="flex w-full flex-col gap-2">
          {replies.map((reply) => (
            <div key={reply.id} className="flex gap-2 w-full pl-10">
              <CommentCard
                id={reply.id}
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
    </div>
  );
}

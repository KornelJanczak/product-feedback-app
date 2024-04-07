"use client";
import { useState } from "react";
import SettingsPopover from "./settings-popover";
import { formatDistanceToNow } from "date-fns";
import ReplyBox from "./reply-box";
import { CornerDownRight } from "lucide-react";
import AuthorInfoPanel from "../../../_components/author-info-panel";

export default function CommentCard({
  cardType,
  commentId,
  replyId,
  author,
  currentUserIsAdmin,
  currentUserIsAuthor,
  content,
  createdAt,
  setOpenReplyContainer,
  commentHasReplies,
  openReplyContainer,
}: ICommentCard) {
  const [replyBoxCommentId, setReplyBoxCommentId] = useState<string | null>(
    null
  );

  const toggleReplyBox = () => {
    if (replyBoxCommentId === commentId) {
      setReplyBoxCommentId(null);
    } else {
      setReplyBoxCommentId(commentId);
    }
  };

  if (!author) return null;

  const formattedCreatedAt = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  if (author) {
    let userName;
    let commentContent;

    if (content.startsWith("@")) {
      const splitContent = content.split(" ");
      userName = `@${splitContent[0].slice(1)} `;
      commentContent = splitContent.slice(1).join(" ");
    }

    const isComment = cardType === "comment";
    const hasAccesToSettings = currentUserIsAdmin || currentUserIsAuthor;
    const isShowReplies = isComment && !openReplyContainer && commentHasReplies;

    return (
      <div className="w-full">
        <div className="flex flex-col px-3 py-3.5 rounded-md bg-basicWhite">
          <div className="flex flex-col">
            <div className="flex ">
              <AuthorInfoPanel
                authorId={author.id}
                firstName={author.firstName}
                lastName={author.lastName}
                userName={author.userName}
                image={author.image}
                isAdmin={author.isAdmin}
              />
              {hasAccesToSettings && (
                <SettingsPopover
                  commentId={commentId}
                  replyId={replyId}
                  cardyType={cardType}
                />
              )}
            </div>
            <span className="text-sm text-grey text-wrap break-all pt-3">
              <strong className="text-sm text-pink font-semibold">
                {userName}
              </strong>
              {commentContent || content}
            </span>
            <div className="flex justify-between pt-2">
              <button
                className="text-sm sm:text-base font-semibold text-blue"
                onClick={toggleReplyBox}
              >
                Reply
              </button>
              <span className="text-sm sm:text-base text-grey">
                {formattedCreatedAt}
              </span>
            </div>
          </div>
          {replyBoxCommentId && (
            <ReplyBox
              commentId={commentId}
              authorUsername={author.userName}
              setReplyBoxComment={() => setReplyBoxCommentId(null)}
            />
          )}
        </div>
        {isShowReplies && (
          <button
            className="flex gap-1 text-sm  text-grey pl-4 pt-1"
            onClick={setOpenReplyContainer}
          >
            <CornerDownRight color="#647196" width={16} height={16} />
            Show replies
          </button>
        )}
      </div>
    );
  }
}

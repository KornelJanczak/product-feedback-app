"use client";
import { useState } from "react";
import UserAvatar from "@/components/user/user-avatar";
import Link from "next/link";
import SettingsPopover from "./settings-popover";
import AdminTag from "../../../_components/admin-tag";
import { formatDistanceToNow } from "date-fns";
import ReplyBox from "./reply-box";
import { CornerDownRight } from "lucide-react";

export default function CommentCard({
  id,
  author,
  content,
  createdAt,
  currentUserIsAdmin,
  currentUserIsAuthor,
  setOpenReplyContainer,
  commentHasReplies,
  openReplyContainer,
  cardType,
}: ICommentCard) {
  const [replyBoxCommentId, setReplyBoxCommentId] = useState<string | null>(
    null
  );

  const toggleReplyBox = () => {
    if (replyBoxCommentId === id) {
      setReplyBoxCommentId(null);
    } else {
      setReplyBoxCommentId(id);
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
    const isReply = cardType === "reply";
    const hasAccesToSettings = currentUserIsAdmin || currentUserIsAuthor;
    const isShowReplies = isComment && !openReplyContainer && commentHasReplies;

    return (
      <div className="w-full">
        <div className="flex flex-col p-3 rounded-md bg-basicWhite">
          <div className="flex flex-col">
            <div className="flex ">
              <Link href={`/profile?id=${author.id}`}>
                <UserAvatar userImage={author.image} />
              </Link>
              <div className="flex flex-col pl-2">
                <div className="flex gap-1.5">
                  <span className="text-sm sm:text-base text-secondDark font-semibold">
                    {author.firstName + " " + author.lastName}
                  </span>
                  {author.isAdmin && <AdminTag />}
                </div>
                <span className="text-sm sm:text-base text-grey">
                  @{author.userName}
                </span>
              </div>
              {hasAccesToSettings && <SettingsPopover />}
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
              commentId={id}
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

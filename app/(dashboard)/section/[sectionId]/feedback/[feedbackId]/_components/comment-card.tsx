"use client";
import { useState } from "react";
import UserAvatar from "@/components/user/user-avatar";
import Link from "next/link";
import SettingsPopover from "./settings-popover";
import AdminTag from "../../../_components/admin-tag";
import { formatDistanceToNow } from "date-fns";
import ReplyBox from "./reply-box";

interface ICommentCard {
  id: string;
  author?: IAuthor | null;
  createdAt: Date;
  content: string;
  currentUserIsAdmin: boolean;
  currentUserIsAuthor: boolean;
}

export default function CommentCard({
  id,
  author,
  content,
  createdAt,
  currentUserIsAdmin,
  currentUserIsAuthor,
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
    const hasAccesToSettings = currentUserIsAdmin || currentUserIsAuthor;

    return (
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
                {author.userName}
              </span>
            </div>
            {hasAccesToSettings && <SettingsPopover />}
          </div>
          <span className="text-sm text-grey text-wrap break-all pt-3">
            {content}
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
        {replyBoxCommentId && <ReplyBox commentId={id} />}
      </div>
    );
  }
}

import UserAvatar from "@/components/user/user-avatar";
import Link from "next/link";
import SettingsPopover from "./settings-popover";
import AdminTag from "../../../_components/admin-tag";
import { formatDistanceToNow } from "date-fns";

interface ICommentCard {
  id: string;
  author?: IAuthor | null;
  createdAt: Date;
  content: string;
  currentUserIsAdmin: boolean;
  currentUserIsAuthor: boolean;
}

export default function CommentCard({
  author,
  content,
  createdAt,
  currentUserIsAdmin,
  currentUserIsAuthor,
}: ICommentCard) {
  if (!author) return null;

  const formattedCreatedAt = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  if (author) {
    const hasAccesToSettings = currentUserIsAdmin || currentUserIsAuthor;

    return (
      <div className="flex flex-col p-3 rounded-md bg-basicWhite">
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
          <button className="text-sm sm:text-base font-semibold text-blue">
            Reply
          </button>
          <span className="text-sm sm:text-base text-grey">
            {formattedCreatedAt}
          </span>
        </div>
      </div>
    );
  }
}

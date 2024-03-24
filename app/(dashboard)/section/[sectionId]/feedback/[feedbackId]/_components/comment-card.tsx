import UserAvatar from "@/components/user/user-avatar";
import Link from "next/link";
import SettingsPopover from "./settings-popover";

interface ICommentCard {
  author?: IAuthor | null;
  content: string;
  currentUserIsAdmin: boolean;
}

export default function CommentCard({ author, content }: ICommentCard) {
  if (!author) return null;

  if (author)
    return (
      <div className="flex flex-col p-3 rounded-md bg-basicWhite">
        <div className="flex ">
          <Link href={`/profile?id=${author.id}`}>
            <UserAvatar userImage={author.image} />
          </Link>
          <div className="flex flex-col pl-2">
            <span className="text-sm sm:text-base text-secondDark font-semibold">
              {author.firstName + " " + author.lastName}
            </span>
            <span className="text-sm sm:text-base text-grey">
              {author.userName}
            </span>
          </div>
          <SettingsPopover />
        </div>
        <span className="text-sm text-grey text-wrap break-all pt-3">
          {content}
        </span>
      </div>
    );
}

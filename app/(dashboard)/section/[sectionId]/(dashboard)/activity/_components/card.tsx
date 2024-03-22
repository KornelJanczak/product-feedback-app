import UserAvatar from "@/components/user/user-avatar";

interface ICard {
  description: string;
  author: IAuthor;
  createdAt: Date;
}
export default function Card({ description, author, createdAt }: ICard) {
  return (
    <div className="flex gap-3 pt-1 px-2 bg-basicWhite w-full">
      <UserAvatar userImage={author.image} className="h-12 w-12" />
      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:gap-1 sm:flex-row">
          <strong className="text-sm sm:text-base text-semibold text-secondDark">
            {author.userName}
          </strong>
          <span className="text-sm sm:text-base text-grey">
            {description.toLowerCase()}
          </span>
        </div>
        <span className="text-sm sm:text-base text-grey">
          {createdAt.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </span>
      </div>
    </div>
  );
}

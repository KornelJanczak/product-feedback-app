import UserAvatar from "@/components/user/user-avatar";
import { Settings } from "lucide-react";

interface ICard {
  id: string;
  feedbackSectionId: string;
  currentUserId: string;
  title: string;
  detail: string;
  status: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  author?: {
    id: string;
    image: string | null;
    userName: string;
    lastName: string | null;
    firstName: string | null;
    isAdmin: boolean;
  };
}

export default function Card({
  id,
  feedbackSectionId,
  currentUserId,
  title,
  detail,
  status,
  category,
  createdAt,
  updatedAt,
  author,
}: ICard) {
  if (!author) return null;

  if (author) {
    const isAdmin = author.isAdmin;
    const isCurrentUser = currentUserId === author.id;

    const hasAccessToSettings = isAdmin || isCurrentUser;

    const firstCategoryLetter = category.split("")[0].toUpperCase();

    const modifiedCategory = firstCategoryLetter + category.slice(1);

    return (
      <div className="flex flex-col px-1 py-2">
        <div className="flex flex-row justify-between">
          <div className="flex gap-1.5">
            <UserAvatar className="h-10 w-10" userImage={author.image} />
            <div>
              <h4 className="text-dark font-semibold">
                {author.firstName + " " + author.lastName}
              </h4>
              <span className="text-sm text-pink bg-[#d68ffd] px-1 font-semibold rounded mr-auto">
                Admin
              </span>
            </div>
          </div>
          {hasAccessToSettings && (
            <Settings width={20} height={20} color="#3A4374" />
          )}
        </div>
        <div className="pt-2">
          <h3 className="text-dark font-semibold">{title}</h3>
          <p className="text-grey"> {detail}</p>
          <span className="text-blue font-semibold pl-3 pt-1">
            {modifiedCategory}
          </span>
        </div>
      </div>
    );
  }
}

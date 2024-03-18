import UserAvatar from "@/components/user/user-avatar";
import { Settings, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";

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

    switch (category) {
      case "ui":
      case "ux":
        category = category.toUpperCase();
        break;
      default:
        break;
    }

    const firstCategoryLetter = category.split("")[0].toUpperCase();
    const modifiedCategory = firstCategoryLetter + category.slice(1);

    return (
      <Link
        href={`/section/${feedbackSectionId}/suggestion/${id}`}
        className="flex flex-col px-4 py-3 rounded-md bg-basicWhite"
      >
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
        <div className="flex flex-col pt-2">
          <h3 className="text-dark font-semibold px-1">{title}</h3>
          <p className="text-grey text-sm sm:text-base text-wrap break-all px-1">
            {detail}
          </p>
          <span className="text-blue text-sm sm:text-base font-semibold px-3 pt-3">
            {modifiedCategory}
          </span>
          <div className="flex justify-between items-center pt-3 px-3">
            <button className="flex justify-center items-center gap-1">
              <Heart width={20} height={20} color="blue" />
              <span className="text-dark font-semibold">0</span>
            </button>
            <div className="flex justify-center items-center gap-1">
              <MessageCircle width={20} height={20} color="grey" fill="grey" />
              <span className="text-dark font-semibold">0</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

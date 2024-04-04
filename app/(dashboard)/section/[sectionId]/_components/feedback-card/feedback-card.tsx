import UserAvatar from "@/components/user/user-avatar";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import SettingsPopover from "./settings-popover";
import LikeButton from "./like-button";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import AdminTag from "../admin-tag";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthorInfoPanel from "../author-info-panel";

interface ICard {
  id: string;
  feedbackSectionId: string;
  currentUserId: string;
  currentUserIsAdmin: boolean;
  likedBy: string[];
  title: string;
  detail: string;
  status: string;
  category: string;
  className?: string;
  commentsCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
  author?: IAuthor;
}

export default async function FeedbackCard({
  id,
  feedbackSectionId: sectionId,
  currentUserId,
  currentUserIsAdmin,
  likedBy,
  className,
  title,
  commentsCount,
  detail,
  category,
  author,
}: ICard) {
  if (!author) return null;

  if (author) {
    const isAdmin = author.isAdmin;
    const isAuthor = currentUserId === author.id;
    const hasAccessToSettings = currentUserIsAdmin || isAuthor;

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
      <Card
        className={cn(
          "flex flex-col px-4 py-3 h-48  rounded-md bg-basicWhite",
          className
        )}
      >
        <CardHeader className="flex flex-row justify-between p-0">
          <AuthorInfoPanel
            authorId={author.id}
            firstName={author.firstName}
            lastName={author.lastName}
            userName={author.userName}
            image={author.image}
            isAdmin={isAdmin}
          />
          {hasAccessToSettings && (
            <SettingsPopover
              feedbackId={id}
              sectionId={sectionId}
              currentUserId={currentUserId}
            />
          )}
        </CardHeader>
        <Link href={`/section/${sectionId}/feedback/${id}`}>
          <CardContent className="flex flex-col pt-2 px-0 pb-0">
            <CardTitle className="text-sm sm:text-base text-dark font-semibold px-1">
              {title}
            </CardTitle>
            <CardDescription className="text-grey text-sm sm:text-base text-wrap break-all px-1 pb-2">
              {detail}
            </CardDescription>
            <span className="text-blue text-sm sm:text-base font-semibold px-3">
              {modifiedCategory}
            </span>
          </CardContent>
        </Link>
        <CardFooter className="flex justify-between items-center pt-2 px-3">
          <LikeButton
            likedBy={likedBy}
            currentUserId={currentUserId}
            feedbackId={id}
            sectionId={sectionId}
          />
          <div className="flex justify-center items-center gap-1">
            <MessageCircle
              width={20}
              height={20}
              color="#CDD2EE"
              fill="#CDD2EE"
            />
            <span className="text-dark font-semibold">{commentsCount}</span>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export const FeedbackCardSkeleton = () => {
  return (
    <div className="h-48 rounded-md">
      <Skeleton className="bg-skeletonTheme h-48 w-full" />
    </div>
  );
};

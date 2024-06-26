import { Skeleton } from "@/components/ui/skeleton";
import UserAvatar from "@/components/user/user-avatar";
import { UsersIcon } from "lucide-react";

interface IHeader {
  title?: string | null;
  sectionUsers: { user: IFeedbackSectionUser | null }[];
}

export default async function MainInformation({
  title,
  sectionUsers,
}: IHeader) {
  return (
    <div className="px-5">
      <h1 className="text-bold text-secondDark text-2xl  md:text-4xl py-2">
        {title}
      </h1>
      <div className="flex flex-col">
        <div className="flex gap-x-1">
          <UsersIcon width={20} height={20} color="#3A4374" />
          <h3 className="text-grey text-base sm:text-lg md:text-xl">
            Members: {sectionUsers.length}
          </h3>
        </div>
        <div className="flex flex-row pt-2">
          {sectionUsers.slice(0, 5).map(({ user }) => (
            <UserAvatar key={user?.id} userImage={user?.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const MainInformationSkeleton = ({
  membersNumber,
}: {
  membersNumber: number;
}) => {
  return (
    <div className="px-5">
      <div className="py-2">
        <Skeleton className="w-52 h-8 md:h-10 rounded bg-skeletonTheme"></Skeleton>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-x-1">
          <Skeleton className="h-6 w-32 md:h-7 rounded bg-skeletonTheme" />
        </div>
        <div className="flex flex-row pt-2">
          {[...new Array(membersNumber)].map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-10 rounded-full bg-skeletonTheme"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

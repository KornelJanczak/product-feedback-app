import UserAvatar from "@/components/user/user-avatar";
import { UsersIcon } from "lucide-react";

interface IHeader {
  title?: string | null;
  sectionUsers: { user: IFeedbackSectionUser | null }[];
}

export default function MainInformation({ title, sectionUsers }: IHeader) {
  return (
    <div>
      <h1 className="text-bold text-secondDark text-2xl sm:text-3xl md:text-4xl px-5 py-2">
        {title}
      </h1>
      <div className="flex flex-col px-5">
        <div className="flex gap-x-1">
          <UsersIcon width={20} height={20} color="#3A4374" />
          <h3 className="text-grey text-base sm:text-lg md:text-xl">
            Members: {sectionUsers.length}
          </h3>
        </div>
        <div className="flex flex-row pt-2">
          {sectionUsers.map(({ user }) => (
            <UserAvatar key={user?.id} userImage={user?.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

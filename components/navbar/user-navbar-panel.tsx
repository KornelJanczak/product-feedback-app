import UserDetailCard from "./user-detail-card";
import UserAvatar from "../user/user-avatar";
import SidebarRoutes from "./sidebar-routes";

export default function UserNavBarPanel({
  currentUser,
}: {
  currentUser?: ICurrentUser | null;
}) {
  return (
    <div
      className="
    hidden md:flex md:flex-col md:items-end 
    md:justify-center md:bg-basicWhite 
    md:border md:border-[#CDD2EE]
    md:h-44 md:rounded-lg md:p-3 md:w-2/5 lg:gap-2
    lg:items-center lg:h-32 lg:w-full
    "
    >
      <UserDetailCard currentUser={currentUser!}>
        <UserAvatar
          className="h-16 w-16 lg:m-auto"
          userImage={currentUser?.image}
        />
      </UserDetailCard>
      <SidebarRoutes />
    </div>
  );
}

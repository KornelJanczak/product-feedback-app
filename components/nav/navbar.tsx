"use client";
import MobileSidebar from "./mobile-sidebar";
import SidebarRoutes from "./sidebar-routes";
import UserAvatar from "../user/user-avatar";
import UserDetailCard from "./user-detail-card";
import { useSession } from "next-auth/react";
import NavBarBackground from "./navbar-background";

export default function Nav() {
  const session = useSession();

  const currentUser: ICurrentUser = session.data?.user as ICurrentUser;

  return (
    <header
      className="text md:container md:py-5 md:flex md:w-full md:gap-4
      lg:max-w-64 lg:flex lg:flex-col lg:m-0 lg:px-0 lg:py-0 lg:gap-4"
    >
      <NavBarBackground
        mobileSidebar={<MobileSidebar />}
        className="md:relative md:w-full lg:w-full lg:h-20"
      />
      <div
        className="
        hidden md:flex md:flex-col md:items-end 
        md:justify-center md:bg-darkWhite 
        md:border md:border-[#CDD2EE]
        md:h-44 md:rounded-lg md:p-3 md:w-2/5 lg:gap-2
        lg:items-center lg:h-32 lg:w-full
        "
      >
        <UserDetailCard currentUser={currentUser}>
          <UserAvatar
            className="h-16 w-16 lg:m-auto"
            userImage={currentUser?.image}
          />
        </UserDetailCard>
        <SidebarRoutes />
      </div>
    </header>
  );
}

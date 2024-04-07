"use client";
import MobileSidebar from "./mobile-sidebar";
import { useSession } from "next-auth/react";
import NavBarBackground from "./navbar-background";
import NavBarHeader from "./navbar-header";
import UserNavBarPanel from "./user-navbar-panel";

export default function Nav() {
  const session = useSession();
  const currentUser: ICurrentUser = session.data?.user as ICurrentUser;

  return (
    <NavBarHeader>
      <NavBarBackground
        mobileSidebar={<MobileSidebar />}
        className="md:relative md:w-full lg:w-full lg:h-20"
      />
      <UserNavBarPanel currentUser={currentUser} />
    </NavBarHeader>
  );
}

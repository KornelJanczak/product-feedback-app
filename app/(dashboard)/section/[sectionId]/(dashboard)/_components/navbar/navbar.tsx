import NavBarBackground from "@/components/navbar/navbar-background";
import NavBarHeader from "@/components/navbar/navbar-header";
import MobileSidebar from "./mobile-sidebar";
import RoadmapPanel from "./roadmap-panel";
import UserNavBarPanel from "@/components/navbar/user-navbar-panel";

export default function Navbar({
  currentUser,
  params,
}: {
  currentUser?: ICurrentUser | null;
  params: string;
}) {
  return (
    <NavBarHeader>
      <NavBarBackground
        className="md:relative md:w-full lg:w-full lg:h-20 "
        mobileSidebar={
          <MobileSidebar currentUser={currentUser} params={params} />
        }
      />

      <RoadmapPanel
        className="hidden md:flex lg:order-3 lg:w-auto lg:pt-0 lg:px-1.5"
        params={params}
      />
      <UserNavBarPanel currentUser={currentUser} />
    </NavBarHeader>
  );
}

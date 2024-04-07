import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarRoutes from "@/components/navbar/sidebar-routes";
import UserInfoCard from "@/components/navbar/user-info-card";
import IconHamburger from "@/public/icons/icon-hamburger";
import RoadmapPanel from "./roadmap-panel";

export default function MobileSidebar({
  currentUser,
  params,
}: {
  currentUser?: ICurrentUser | null;
  params: string;
}) {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <IconHamburger />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <UserInfoCard
          userEmail={currentUser?.email}
          userImage={currentUser?.image}
          userName={currentUser?.name}
        />
        <SidebarRoutes />
        <RoadmapPanel params={params} />
      </SheetContent>
    </Sheet>
  );
}

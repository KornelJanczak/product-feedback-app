import NavBarBackground from "@/components/navbar/navbar-background";
import NavBarHeader from "@/components/navbar/navbar-header";
import MobileSidebar from "./mobile-sidebar";

export default function Navbar({
  currentUser,
  params,
}: {
  currentUser: ICurrentUser | null;
  params: string;
}) {
  return (
    <NavBarHeader>
      <NavBarBackground
        className="md:relative md:w-full lg:w-full lg:h-20"
        mobileSidebar={
          <MobileSidebar currentUser={currentUser} params={params} />
        }
      />
    </NavBarHeader>
  );
}

import NavBarBackground from "@/components/nav/navbar-background";
import NavBarHeader from "@/components/nav/navbar-header";

export default function Navbar() {
  return (
    <NavBarHeader>
      <NavBarBackground className="md:relative md:w-full lg:w-full lg:h-20" />
    </NavBarHeader>
  );
}

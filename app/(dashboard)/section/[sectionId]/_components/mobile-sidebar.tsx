import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import NavBarFilter from "./navbar-filter";

export default function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon color="#ffffff" />
      </SheetTrigger>
      <SheetContent>
        <NavBarFilter />
      </SheetContent>
    </Sheet>
  );
}

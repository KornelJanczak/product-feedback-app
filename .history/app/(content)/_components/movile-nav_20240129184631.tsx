import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import IconClose from "@/public/icons/icon-close";
import IconHamburger from "@/public/icons/icon-hamburger";

export default function MobileSheet() {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  return (
    <Sheet>
      <SheetTrigger>
        {mobileNav ? <IconClose /> : <IconHamburger />}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

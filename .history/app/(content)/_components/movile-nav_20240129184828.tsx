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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <SheetDescription className="pt-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

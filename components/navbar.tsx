"use client";
import ResponsiveImage from "@/components/responsive-image";
import MobileSidebar from "./mobile-sidebar";
import { usePathname } from "next/navigation";
import SidebarRoutes from "./sidebar-routes";
import UserAvatar from "./user-avatar";

export default function Nav() {
  const pathname = usePathname();

  const siteName =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <header
      className="text md:container md:py-5 md:flex md:w-full
      lg:max-w-64 lg:flex lg:flex-col lg:m-0 lg:px-0 lg:py-0"
    >
      <div className="md:relative md:w-full md:order-2">
        <ResponsiveImage
          images={{
            desktop: "/assets/suggestions/desktop/background-header.png",
            mobile: "/assets/suggestions/mobile/background-header.png",
            tablet: "/assets/suggestions/tablet/background-header.png",
          }}
          pictureClassName="w-full w-full md:h-16 md:w-full md:rounded-lg"
          imgClassName="w-full h-16 md:h-44 md:w-full md:rounded-lg"
          altText="Gradient image"
          width={340}
          height={72}
        />
        <div
          className="px-5 z-10 absolute
          top-0 pt-4 flex 
          w-full
          justify-between mx-auto my-0 
          md:bottom-0 md:instet-x-auto md:inset-y-1/2
          md:w-full
          md:flex-col
          "
        >
          <h2 className="text-lg font-bold text-basicWhite md:text-xl">
            Feedback Product
          </h2>
          <span className="hidden md:block text-md text-basicWhite md:mb-auto">
            {siteName} Board
          </span>
          <MobileSidebar />
        </div>
      </div>
      {/* <div className="hidden md:flex w-full">CHUJ</div> */}
      <div
        className="hidden md:flex md:flex-col md:items-end 
        md:justify-center md:bg-darkWhite md:h-full md:rounded-lg md:p-4"
      >
        <UserAvatar className="h-14 w-14" />
        <SidebarRoutes className="gap-1" />
      </div>
    </header>
  );
}

"use client";
import ResponsiveImage from "@/components/responsive-image";
import MobileSidebar from "./mobile-sidebar";
import SidebarRoutes from "./sidebar-routes";
import UserAvatar from "./user-avatar";

export default function Nav({ currentUser }: { currentUser?: ICurrentUser }) {
  return (
    <header
      className="text md:container md:py-5 md:flex md:w-full md:gap-4
      lg:max-w-64 lg:flex lg:flex-col lg:m-0 lg:px-0 lg:py-0 lg:gap-4"
    >
      <div className="md:relative md:w-full lg:w-full lg:h-20">
        <ResponsiveImage
          images={{
            desktop: "/assets/suggestions/desktop/background-header.png",
            mobile: "/assets/suggestions/mobile/background-header.png",
            tablet: "/assets/suggestions/tablet/background-header.png",
          }}
          pictureClassName="w-full md:h-16 md:w-full md:rounded-lg lg:h-36"
          imgClassName="w-full h-16 md:h-44 md:w-full md:rounded-lg lg:h-36"
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
          <h2 className="text-lg font-bold text-basicWhite md:text-xl lg:text-center">
            Feedback Product
          </h2>
          <MobileSidebar />
        </div>
      </div>
      <div
        className="
        hidden md:flex md:flex-col md:items-end 
        md:justify-center md:bg-darkWhite 
        md:border md:border-[#CDD2EE]
        md:h-44 md:rounded-lg md:p-3 md:w-2/5 lg:gap-2
        lg:items-center lg:h-32 lg:w-full
        "
      >
        <UserAvatar className="h-16 w-16 lg:m-auto" />
        <SidebarRoutes />
      </div>
    </header>
  );
}

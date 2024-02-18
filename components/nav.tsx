"use client";
import ResponsiveImage from "@/components/responsive-image";
import MobileSheet from "./mobile-nav";
import { usePathname } from "next/navigation";
import AccountPanel from "../app/(users)/_components/account-panel";

export default function Nav() {
  const pathname = usePathname();

  const siteName =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  return (
    <header
      className="text md:container md:py-5 md:flex md:w-full 
    lg:max-w-64 lg:flex lg:flex-col lg:m-0 lg:px-0 lg:py-0"
    >
      <div className="md:relative md:w-full">
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
          <MobileSheet />
        </div>
      </div>
      <div className="hidden md:flex w-full">CHUJ</div>
      <div className="hidden md:flex items-center justify-center">
        <AccountPanel
          className="gap-1"
          classNameBox="md:flex flex-col gap-2"
          friendBtnClass="mt-1"
        />
      </div>
    </header>
  );
}

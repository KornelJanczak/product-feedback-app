"use client";
import ResponsiveImage from "@/components/ui/responsive-image";
import IconClose from "@/public/icons/icon-close";
import IconHamburger from "@/public/icons/icon-hamburger";
import { useState } from "react";
import MobileSheet from "./movile-nav";

export default function Nav() {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  return (
    <>
      <header className="text relative">
        <ResponsiveImage
          images={{
            desktop: "/assets/suggestions/desktop/background-header.png",
            mobile: "/assets/suggestions/mobile/background-header.png",
            tablet: "/assets/suggestions/tablet/background-header.png",
          }}
          pictureClassName="absolute w-full w-full sm:h-16"
          imgClassName="w-full h-16 sm:h-44"
          altText="Gradient image"
          width={340}
          height={72}
        />
        <div className="container z-10 absolute pt-4 flex justify-between">
          <h2 className="text-lg font-bold text-basicWhite">
            Feedback Product
          </h2>
          <button
            className="border-0 bg-none"
            onClick={() => setMobileNav((nav) => !nav)}
          >
            {mobileNav ? <IconClose /> : <IconHamburger />}
          </button>
        </div>
      </header>
      {/* {mobileNav && <MobileSheet />} */}
    </>
  );
}

import ResponsiveImage from "@/components/ui/responsive-image";

export default function Nav() {
  return (
    <header className="text relative">
      <ResponsiveImage
        images={{
          desktop: "/assets/suggestions/desktop/background-header.png",
          mobile: "/assets/suggestions/mobile/background-header.png",
          tablet: "/assets/suggestions/tablet/background-header.png",
        }}
        pictureClassName="absolute w-full w-full sm:h-16"
        imgClassName="w-full h-16 sm:h-44 text"
        altText="Gradient image"
        width={340}
        height={72}
      />
      <div className="container z-10">
        <h2 className="text-lg font-bold">Feedback Product</h2>
      </div>
    </header>
  );
}

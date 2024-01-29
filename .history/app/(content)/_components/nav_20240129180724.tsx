import ResponsiveImage from "@/components/ui/responsive-image";

export default function Nav() {
  return (
    <header className="bg-[url('/public/assets/suggestions/mobile/background-header.png')] text  relative">
      <ResponsiveImage
        images={{
          desktop: "/assets/suggestions/desktop/background-header.png",
          mobile: "/assets/suggestions/mobile/background-header.png",
          tablet: "/assets/suggestions/tablet/background-header.png",
        }}
        pictureClassName="absolute w-full h-full w-full"
        imgClassName="w-full sm:h-16 md:h-44"
        altText="Gradient image"
        width={340}
        height={78}
      />
      <div className="container">
        <h2 className="text-lg font-bold">Feedback Product</h2>
      </div>
    </header>
  );
}

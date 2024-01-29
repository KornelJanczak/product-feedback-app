import ResponsiveImage from "@/components/ui/responsive-image";

export default function Nav() {
  return (
    <header className="bg-[url('/public/assets/suggestions/mobile/background-header.png')] text pt-4">
      <ResponsiveImage />
      <div className="container">
        <h2 className="text-lg font-bold">Feedback Product</h2>
      </div>
    </header>
  );
}

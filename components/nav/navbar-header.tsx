export default function NavBarHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header
      className="text md:container md:py-5 md:flex md:w-full md:gap-4
    lg:max-w-64 lg:flex lg:flex-col lg:m-0 lg:px-0 lg:py-0 lg:gap-4"
    >
      {children}
    </header>
  );
}

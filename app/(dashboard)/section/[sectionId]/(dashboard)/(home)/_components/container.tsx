export default async function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-4 px-1">{children}</div>;
}

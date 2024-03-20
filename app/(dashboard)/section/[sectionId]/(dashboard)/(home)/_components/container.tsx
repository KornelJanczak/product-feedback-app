export default async function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-6 px-1 py-5">{children}</div>;
}

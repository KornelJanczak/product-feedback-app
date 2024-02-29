export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col p-5 gap-4">{children}</div>;
}

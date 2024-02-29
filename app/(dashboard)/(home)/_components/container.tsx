export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col p-4 gap-4 xl:grid xl:grid-cols-2">
      {children}
    </div>
  );
}

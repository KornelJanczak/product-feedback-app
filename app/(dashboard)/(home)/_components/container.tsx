import { Skeleton } from "@/components/ui/skeleton";
export default async function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col p-4 gap-4 xl:grid xl:grid-cols-2">
      {children}
    </div>
  );
}

export const ContainerSkeleton = ({
  skeletonCount,
}: {
  skeletonCount: number;
}) => {
  return (
    <div className="flex flex-col p-4 gap-4 xl:grid xl:grid-cols-2">
      {[...Array(skeletonCount)].map((_, index) => (
        <Skeleton key={index} className="bg-skeletonTheme h-28 w-full" />
      ))}
    </div>
  );
};

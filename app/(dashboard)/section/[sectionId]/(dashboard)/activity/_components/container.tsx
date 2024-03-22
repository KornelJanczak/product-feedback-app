import { Skeleton } from "@/components/ui/skeleton";

export default async function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-6">{children}</div>;
}

export const ContainerSkeleton = ({
  skeletonCount,
}: {
  skeletonCount: number;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(skeletonCount)].map((_, index) => (
        <div key={index} className="h-16 rounded-md">
          <Skeleton className="bg-skeletonTheme h-16 w-full" />
        </div>
      ))}
    </div>
  );
};

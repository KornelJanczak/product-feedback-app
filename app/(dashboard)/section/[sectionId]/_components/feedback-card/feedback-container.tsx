import { Skeleton } from "@/components/ui/skeleton";

export default async function FeedbackContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-6 px-1 py-5">{children}</div>;
}

export const FeedbackContainerSkeleton = ({
  skeletonCount,
}: {
  skeletonCount: number;
}) => {
  return (
    <div className="flex flex-col gap-6 px-1 py-5">
      {[...Array(skeletonCount)].map((_, index) => (
        <div key={index} className="h-48 rounded-md">
          <Skeleton className="bg-skeletonTheme h-48 w-full" />
        </div>
      ))}
    </div>
  );
};

import { Skeleton } from "@/components/ui/skeleton";

export default async function CommentContainer({
  children,
  commentsCount,
}: {
  children: React.ReactNode;
  commentsCount: number;
}) {
  return (
    <div className="my-2 mb-36 pt-2">
      <h3 className="text-secondDark text-semibold text-lg pb-1">
        {commentsCount} Comments
      </h3>
      <div className="flex flex-col gap-6 pt-0.5">{children}</div>
    </div>
  );
}

export const CommentContainerSkeleton = ({
  skeletonCount,
}: {
  skeletonCount: number;
}) => {
  return (
    <div className="my-2 mb-36 pt-2">
      <h3 className="pb-1">
        <Skeleton className="bg-skeletonTheme h-7 w-32" />
      </h3>
      <div className="flex flex-col gap-6 pt-0.5">
        {[...Array(skeletonCount)].map((_, index) => (
          <Skeleton key={index} className="bg-skeletonTheme h-32 w-full" />
        ))}
      </div>
    </div>
  );
};

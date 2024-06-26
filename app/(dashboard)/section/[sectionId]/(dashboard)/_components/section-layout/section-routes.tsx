import { Separator } from "@/components/ui/separator";
import RouteItem from "./route-item";
import { Skeleton } from "@/components/ui/skeleton";

const routes = [
  { title: "Suggestions", href: "" },
  { title: "Members", href: "members" },
  { title: "Activity", href: "activity" },
];

export default async function SectionRoutes({
  sectionId,
}: {
  sectionId: string;
}) {
  return (
    <div className="flex flex-col px-5 pt-2 bg-basicWhite rounded-md">
      <Separator />
      <div className="flex gap-3 py-3">
        {routes.map(({ title, href }) => (
          <RouteItem
            key={href}
            href={href}
            sectionId={sectionId}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}

export const SectionRoutesSkeleton = () => {
  return (
    <div className="flex flex-col px-5 pt-2">
      <Separator />
      <div className="py-3">
        <Skeleton className="w-64 bg-skeletonTheme h-7" />
      </div>
    </div>
  );
};

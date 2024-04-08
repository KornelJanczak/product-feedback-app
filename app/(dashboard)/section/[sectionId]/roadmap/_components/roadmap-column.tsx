import { ITransformedFeedbackSection } from "@/lib/product/helpers/add-user-object";
import { IRoadmap } from "./roadmap";
import RoadmapCard from "./roadmap-card";
import { Skeleton } from "@/components/ui/skeleton";

export interface IRoadmapColumn extends IRoadmap {
  suggestions: ITransformedFeedbackSection[];
  currentUserId: string;
}

export default async function RoadmapColumn({
  suggestions,
  currentUserId,
  variant,
  label,
  description,
}: IRoadmapColumn) {
  const filteredSuggestions = suggestions.filter(
    (suggestion) => suggestion.status === variant
  );

  const suggestionNumber = filteredSuggestions.length;

  return (
    <div className="flex flex-col px-5 md:px-2 ">
      <div className="flex flex-col pt-4">
        <h3 className="text-lg md:text-base text-secondDark font-semibold">{`${label} (${suggestionNumber})`}</h3>
        <p className="text-sm lg:text-base pt-0.5">{description}</p>
      </div>
      <div className="flex flex-col gap-y-6 pt-3.5">
        {suggestionNumber > 0 &&
          filteredSuggestions.map((suggestion) => (
            <RoadmapCard
              key={suggestion.id}
              currentUserId={currentUserId}
              suggestion={suggestion}
              label={label}
              variant={variant}
            />
          ))}
      </div>
    </div>
  );
}

export const RoadmapColumnSkeleton = ({
  skeletonCount,
  label,
  description,
}: {
  skeletonCount: number;
  label: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col pt-6 px-5 md:px-2 md:pt-4">
      <h3 className="text-lg md:text-base text-secondDark font-semibold">
        {label}
      </h3>
      <p className="text-sm lg:text-base pt-0.5">{description}</p>
      <div className="flex flex-col gap-y-6 pt-3.5">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <Skeleton key={index} className="bg-skeletonTheme h-52" />
        ))}
      </div>
    </div>
  );
};

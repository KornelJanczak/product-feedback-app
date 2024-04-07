import { ITransformedFeedbackSection } from "@/lib/product/helpers/add-user-object";
import { IRoadmap } from "./roadmap";
import RoadmapCard from "./roadmap-card";
import NoResult from "@/components/no-result";

export interface IRoadmapColumn extends IRoadmap {
  suggestions: ITransformedFeedbackSection[];
  currentUserId: string;
}

export default function RoadmapColumn({
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
        {suggestionNumber === 0 && (
          <NoResult
            title={`There is no feedback!`}
            description={"Add new feedbacks if you want to see them here!"}
          />
        )}
      </div>
    </div>
  );
}

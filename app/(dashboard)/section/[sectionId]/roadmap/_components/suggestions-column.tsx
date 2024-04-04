import { ITransformedFeedbackSection } from "@/lib/product/helpers/add-user-object";
import { ISuggestionRoadmap } from "./suggestions-roadmap";
import SuggestionCard from "./suggestion-card";

interface ISuggestionColumn extends ISuggestionRoadmap {
  suggestions: ITransformedFeedbackSection[];
}

export default function SuggestionColumn({
  suggestions,
  variant,
  label,
  description,
  theme,
}: ISuggestionColumn) {
  const filteredSuggestions = suggestions.filter(
    (suggestion) => suggestion.status === variant
  );

  const suggestionNumber = filteredSuggestions.length;

  return (
    <section className="flex flex-col px-5">
      <div className="flex flex-col pt-4">
        <h3 className="text-lg text-secondDark font-semibold">{`${label} (${suggestionNumber})`}</h3>
        <p className="text-sm sm:text-base pt-0.5">{description}</p>
      </div>
      <div className="flex flex-col gap-y-4 pt-3.5">
        {filteredSuggestions.map((suggestion) => (
          <SuggestionCard
            key={suggestion.id}
            suggestion={suggestion}
            label={label}
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
}

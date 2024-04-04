import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITransformedFeedbackSection } from "@/lib/product/helpers/add-user-object";
import { cn } from "@/lib/utils";

const tabsOptions = [
  {
    value: "planned",
    label: "Planned",
    className: "data-[state=active]:before:bg-orange",
  },
  {
    value: "in-progress",
    label: "In-Progress",
    className: "data-[state=active]:before:bg-primary",
  },
  {
    value: "live",
    label: "Live",
    className: "data-[state=active]:before:bg-lighterBlue",
  },
];

export default function SuggestionsRoadmap({
  suggestions,
}: {
  suggestions: ITransformedFeedbackSection[];
}) {
  const plannedSuggestions = suggestions.filter(
    (suggestion) => suggestion.status === "planned"
  );

  const inProgressSuggestions = suggestions.filter(
    (suggestion) => suggestion.status === "in-progress"
  );

  const liveSuggestions = suggestions.filter(
    (suggestion) => suggestion.status === "live"
  );

  const tabClassName =
    "relative w-1/3 flex flex-col py-2.5 data-[state=active]:before:content-[''] data-[state=active]:before:absolute data-[state=active]:before:left-0 data-[state=active]:before:right-0 data-[state=active]:before:bottom-0  data-[state=active]:before:h-1 ";

  return (
    <section>
      <Tabs defaultValue="in-progress" className="w-full sm:hidden p-0">
        <TabsList className="w-full items-center justify-around text-lightGrey font-bold p-0 border border-b-lightGrey">
          {tabsOptions.map(({ value, label, className }) => (
            <TabsTrigger
              key={value}
              value={value}
              className={cn(tabClassName, className)}
            >
              <p>{label}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
      <div className="hidden sm:grid">{/* desktop content */}</div>
    </section>
  );
}

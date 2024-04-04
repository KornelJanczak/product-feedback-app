import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITransformedFeedbackSection } from "@/lib/product/helpers/add-user-object";
import { cn } from "@/lib/utils";
import SuggestionColumn from "./suggestions-column";

type Variants = "planned" | "in-progress" | "live";

export interface ISuggestionRoadmap {
  label: string;
  description: string;
  variant: Variants;
  theme: string;
}

const roadmapOptions: ISuggestionRoadmap[] = [
  {
    label: "Planned",
    description: "Ideas prioritized for research",
    variant: "planned",
    theme: "bg-orange",
  },
  {
    label: "In-Progress",
    description: "Features currently being developed",
    variant: "in-progress",
    theme: "bg-primary",
  },
  {
    label: "Live",
    description: "Released features",
    variant: "live",
    theme: "bg-lighterBlue",
  },
];

const tabClassName =
  "relative w-1/3 flex flex-col py-2.5 data-[state=active]:before:content-[''] data-[state=active]:before:absolute data-[state=active]:before:left-0 data-[state=active]:before:right-0 data-[state=active]:before:bottom-0 data-[state=active]:before:h-1 ";

export default function SuggestionsRoadmap({
  suggestions,
}: {
  suggestions: ITransformedFeedbackSection[];
}) {
  return (
    <>
      <Tabs defaultValue="in-progress" className="w-full sm:hidden p-0">
        <TabsList className="w-full items-center justify-around text-lightGrey font-bold p-0 border border-b-lightGrey">
          {roadmapOptions.map(({ variant, label, theme }) => (
            <TabsTrigger
              key={variant}
              value={variant}
              className={cn(
                tabClassName,
                `data-[state=active]:before:${theme}`
              )}
            >
              <p>{label}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {roadmapOptions.map(({ variant, label, theme, description }) => (
          <TabsContent value={variant} key={variant}>
            <SuggestionColumn
              variant={variant}
              label={label}
              theme={theme}
              description={description}
              suggestions={suggestions}
            />
          </TabsContent>
        ))}
      </Tabs>
      <section className="hidden sm:grid">{/* desktop content */}</section>
    </>
  );
}

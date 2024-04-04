import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITransformedFeedbackSection } from "@/lib/product/helpers/add-user-object";

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

  return (
    <section>
      <Tabs defaultValue="in-progress" className="w-full sm:hidden p-0">
        <TabsList className="w-full items-center justify-around font-bold p-0">
          <TabsTrigger value="planned" className="">
            Planned
          </TabsTrigger>
          <TabsTrigger value="in-progress">In-Progress</TabsTrigger>
          <TabsTrigger value="live">Live</TabsTrigger>
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

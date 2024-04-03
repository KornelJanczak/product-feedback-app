import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITransformedFeedbackSection } from "@/lib/product/helpers/add-user-object";

export default function SuggestionsRoadmap({
  suggestions,
}: {
  suggestions: ITransformedFeedbackSection[];
}) {
  return (
    <section>
      <Tabs defaultValue="in-progress" className="w-full sm:hidden">
        <TabsList className="w-full items-center justify-around">
          <TabsTrigger value="planned">Planned</TabsTrigger>
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

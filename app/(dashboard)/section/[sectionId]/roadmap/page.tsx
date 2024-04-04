import BackButton from "@/components/back-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import getSuggestions from "@/lib/product/get-suggestions";
import FeedbackActionButton from "../_components/feedback-form/feedback-action-button";
import SuggestionsRoadmap from "./_components/suggestions-roadmap";

export default async function RoadMapPage({
  params,
}: {
  params: { sectionId: string };
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const { sectionId } = params;

  const data = await getSuggestions({
    currentUserId: currentUser.id,
    sectionId,
  });

  if (!data) throw new Error("No data found");

  const { suggestions, currentUserIsAdmin } = data;

  return (
    <>
      <div className="flex justify-between items-center px-5 py-4 bg-secondDark">
        <div className="flex flex-col gap-2">
          <BackButton />
          <h2 className="text-basicWhite font-semibold pl-0.5">Roadmap</h2>
        </div>
        <FeedbackActionButton
          currentUser={currentUser}
          currentUserIsAdmin={currentUserIsAdmin || false}
          actionType="create"
          headerTitle="Add new feedback"
          className="w-auto my-auto py-1.5"
        />
      </div>
      <SuggestionsRoadmap suggestions={suggestions} />
    </>
  );
}

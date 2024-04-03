import BackButton from "@/components/back-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import getSuggestions from "@/lib/product/get-suggestions";
import FeedbackActionButton from "../_components/feedback-form/feedback-action-button";

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
      <Tabs defaultValue="in-progress" className="w-full">
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
    </>
  );
}

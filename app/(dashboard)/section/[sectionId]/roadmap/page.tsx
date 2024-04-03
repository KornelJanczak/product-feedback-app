import BackButton from "@/components/back-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import checkMembershipInSection from "@/lib/product/check-membership-in-section";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import FeedbackActionButton from "../_components/feedback-form/feedback-action-button";

async function getSuggestion(currentUserId: string, sectionId: string) {
  if (!currentUserId || !sectionId) throw new Error("Invalid params");

  const membership = await checkMembershipInSection(sectionId, currentUserId);

  if (!membership) throw new Error("You are not a member of this section");

  let suggestions;

  try {
    suggestions = await prisma.feedbackToFeedbackSection.findMany({
      where: {
        feedbackSectionId: sectionId,
      },
    });
  } catch {
    throw new Error("Failed to get suggestions");
  }

  console.log(suggestions);
}

export default async function RoadMapPage({
  params,
}: {
  params: { sectionId: string };
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  const { sectionId } = params;

  const suggestions = await getSuggestion(currentUser.id, sectionId);

  return (
    <main>
      <div className="flex justify-between items-center px-5 py-4 bg-secondDark">
        <div className="flex flex-col gap-2">
          <BackButton />
          <h2 className="text-basicWhite font-semibold pl-0.5">Roadmap</h2>
        </div>
        <FeedbackActionButton
          currentUser={currentUser}
          currentUserIsAdmin={true}
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
      aaaaa
    </main>
  );
}

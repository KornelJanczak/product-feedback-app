import BackButton from "@/components/back-button";
import getCurrentUser from "@/lib/user/get-current-user";
import { redirect } from "next/navigation";
import getSuggestions from "@/lib/product/get-suggestions";
import FeedbackActionButton from "../_components/feedback-form/feedback-action-button";
import Roadmap from "./_components/roadmap";

export default async function RoadmapPage({
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
      <header className="flex justify-between items-center px-5 py-4 bg-secondDark">
        <div className="flex flex-col gap-2">
          <BackButton
            className="text-middleWhite"
            href={`/section/${sectionId}`}
          />
          <h2 className="text-basicWhite font-semibold pl-0.5">Roadmap</h2>
        </div>
        <FeedbackActionButton
          currentUser={currentUser}
          currentUserIsAdmin={currentUserIsAdmin || false}
          actionType="create"
          headerTitle="Add new feedback"
          className="w-auto my-auto py-1.5"
        />
      </header>
      <main className="pb-6">
        <Roadmap suggestions={suggestions} currentUserId={currentUser.id} />
      </main>
    </>
  );
}

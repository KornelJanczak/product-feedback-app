import AddUsers from "./add-users/add-users";
import SectionSettingsCard from "@/app/(dashboard)/_components/section-settings-card";
import { ActivityIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import CreateFeedbackButton from "../../_components/feedback-form/create-feedback-button";

interface IActionPanel {
  currentUser: User;
  sectionUsers: { user: IFeedbackSectionUser | null }[];
  currentUserIsAdmin: boolean;
  sectionId: string;
}

export default async function ActionPanel({
  currentUser,
  sectionId,
  currentUserIsAdmin,
  sectionUsers,
}: IActionPanel) {
  return (
    <div
      className="flex items-center justify-center px-5 py-5 gap-2 
     sm:justify-start sm:items-end sm:py-0 sm:ml-auto"
    >
      <CreateFeedbackButton
        currentUser={currentUser}
        currentUserIsAdmin={currentUserIsAdmin}
      />
      {<AddUsers currentUser={currentUser} sectionUsers={sectionUsers} />}
      <SectionSettingsCard
        currentUserId={currentUser.id}
        currentUserIsAdmin={currentUserIsAdmin}
        sectionId={sectionId}
        className="flex items-center justify-center w-1/12 sm:w-auto"
        align="end"
      />
    </div>
  );
}

export const ActionPanelSkeleton = () => {
  return (
    <div
      className="flex items-center justify-center px-5 py-5 gap-2
       sm:justify-start sm:items-end sm:py-0 sm:ml-auto"
    >
      <Skeleton className="bg-skeletonTheme px-3 h-8 rounded-md w-6/12 sm:w-36" />
      <Skeleton className="bg-skeletonTheme px-3 h-8 rounded-md w-5/12 sm:w-28" />
      <Skeleton className="bg-skeletonTheme px-3 h-8 rounded-md w-1/12 sm:w-7" />
    </div>
  );
};

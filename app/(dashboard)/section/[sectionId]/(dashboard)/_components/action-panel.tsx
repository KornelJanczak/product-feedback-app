import { PlusIcon } from "lucide-react";
import Link from "next/link";
import AddUsers from "./add-users";
import SectionSettingsCard from "@/app/(dashboard)/_components/section-settings-card";
import { ActivityIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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
  const settings = [
    {
      icon: ActivityIcon,
      href: `/section/${sectionId}/activity`,
      label: "Activity",
    },
  ];

  return (
    <div className="flex items-center justify-center px-5 py-5 gap-2 ">
      <Link
        href={"/"}
        className="flex items-center justify-center gap-0.5 bg-pink text-darkWhite px-3 py-1 rounded-md 
      hover:bg-pink hover:opacity-70 hover:transition-all hover:duration-300 w-5/12"
      >
        <PlusIcon width={18} height={18} color="#fff" />
        Add feedback
      </Link>
      <AddUsers currentUser={currentUser} sectionUsers={sectionUsers} />
      <SectionSettingsCard
        currentUserId={currentUser.id}
        currentUserIsAdmin={currentUserIsAdmin}
        sectionId={sectionId}
        settings={settings}
        className="w-1/12"
        align="end"
      />
    </div>
  );
}

export const ActionPanelSkeleton = () => {
  return (
    <div className="flex items-center justify-center px-5 py-5 gap-2">
      <Skeleton className="bg-skeletonTheme px-3  h-8 rounded-md w-5/12" />
      <Skeleton className="bg-skeletonTheme px-3  h-8 rounded-md w-5/12" />
      <Skeleton className="bg-skeletonTheme px-3  h-8 rounded-md w-1/12" />
    </div>
  );
};

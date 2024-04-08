import FormContainer from "./form-container";
import { Skeleton } from "@/components/ui/skeleton";

export interface IFeedbackAction {
  currentUser: ICurrentUser;
  currentUserIsAdmin: boolean;
  actionType: "create" | "update";
  headerTitle: string;
  className?: string;
  feedbackId?: string;
  title?: string;
  detail?: string;
  status?: string;
  category?: string;
}

export default async function FeedbackActionButton({
  currentUser,
  currentUserIsAdmin,
  className,
  feedbackId,
  headerTitle,
  actionType,
  title,
  detail,
  status,
  category,
}: IFeedbackAction) {
  return (
    <FormContainer
      currentUser={currentUser}
      currentUserIsAdmin={currentUserIsAdmin}
      actionType={actionType}
      feedbackId={feedbackId}
      headerTitle={headerTitle}
      className={className}
      title={title}
      detail={detail}
      status={status}
      category={category}
    />
  );
}

export const FeedbackActionButtonSkeleton = () => {
  return (
    <div className="rounded-md">
      <Skeleton className="w-44 h-9 bg-skeletonTheme" />
    </div>
  );
};

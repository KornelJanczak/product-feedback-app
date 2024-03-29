import FormContainer from "./form-container";

interface IFeedbackActionButton {
  currentUser: ICurrentUser;
  currentUserIsAdmin: boolean;
  feedbackId?: string;
  headerTitle: string;
  title?: string;
  detail?: string;
  status?: string;
  category?: string;
  actionType: "create" | "update";
}

export default async function FeedbackActionButton({
  currentUser,
  currentUserIsAdmin,
  feedbackId,
  headerTitle,
  actionType,
  title,
  detail,
  status,
  category,
}: IFeedbackActionButton) {
  return (
    <FormContainer
      currentUser={currentUser}
      currentUserIsAdmin={currentUserIsAdmin}
      actionType={actionType}
      feedbackId={feedbackId}
      headerTitle={headerTitle}
      title={title}
      detail={detail}
      status={status}
      category={category}
    />
  );
}

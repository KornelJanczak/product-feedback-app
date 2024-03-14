import AddFeedbackContainer from "./add-feedback-container";
import AddFeedbackDrawer from "./add-feedback-drawer";

export default function AddFeedback({
  currentUser,
}: {
  currentUser: ICurrentUser;
}) {
  return (
    <>
      <AddFeedbackDrawer>
        <AddFeedbackContainer currentUser={currentUser} />
      </AddFeedbackDrawer>
    </>
  );
}

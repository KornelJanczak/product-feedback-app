import Container from "./container";
import AddFeedbackDrawer from "./form-drawer";

export default function AddFeedback({
  currentUser,
}: {
  currentUser: ICurrentUser;
}) {
  return (
    <>
      <AddFeedbackDrawer>
        <Container currentUser={currentUser} />
      </AddFeedbackDrawer>
    </>
  );
}

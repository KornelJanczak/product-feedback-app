import Container from "./container";
import AddFeedbackDrawer from "./form-drawer";

export default function AddFeedback({
  currentUser,
  currentUserIsAdmin,
}: {
  currentUser: ICurrentUser;
  currentUserIsAdmin: boolean;
}) {
  return (
    <>
      <AddFeedbackDrawer>
        <Container
          currentUser={currentUser}
          currentUserIsAdmin={currentUserIsAdmin}
        />
      </AddFeedbackDrawer>
    </>
  );
}

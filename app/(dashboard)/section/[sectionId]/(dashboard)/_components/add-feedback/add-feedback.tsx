import Container from "./container";
import FormDialog from "./form-dialog";
import FormDrawer from "./form-drawer";

export default function AddFeedback({
  currentUser,
  currentUserIsAdmin,
}: {
  currentUser: ICurrentUser;
  currentUserIsAdmin: boolean;
}) {
  return (
    <>
      <FormDrawer>
        <Container
          currentUser={currentUser}
          currentUserIsAdmin={currentUserIsAdmin}
        />
      </FormDrawer>
      <FormDialog>
        <Container
          currentUser={currentUser}
          currentUserIsAdmin={currentUserIsAdmin}
        />
      </FormDialog>
    </>
  );
}

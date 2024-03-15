import FormContainer from "./form-container";
import FormDialog from "./form-dialog";
import FormDrawer from "./form-drawer";

export default function CreateFeedback({
  currentUser,
  currentUserIsAdmin,
}: {
  currentUser: ICurrentUser;
  currentUserIsAdmin: boolean;
}) {
  return (
    <>
      <FormDrawer>
        <FormContainer
          currentUser={currentUser}
          currentUserIsAdmin={currentUserIsAdmin}
        />
      </FormDrawer>
      <FormDialog>
        <FormContainer
          currentUser={currentUser}
          currentUserIsAdmin={currentUserIsAdmin}
        />
      </FormDialog>
    </>
  );
}

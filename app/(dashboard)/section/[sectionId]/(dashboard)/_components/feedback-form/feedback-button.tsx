import FormContainer from "./form-container";
import FormDialog from "./form-dialog";

export default function FeedbackButton({
  currentUser,
  currentUserIsAdmin,
}: {
  currentUser: ICurrentUser;
  currentUserIsAdmin: boolean;
}) {
  return (
    <FormDialog>
      <FormContainer
        currentUser={currentUser}
        currentUserIsAdmin={currentUserIsAdmin}
      />
    </FormDialog>
  );
}

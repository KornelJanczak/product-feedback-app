import FormHeader from "@/components/create-form/form-header";
import AddFeedbackForm from "./add-feedback-form";

export default function Container({
  currentUser,
}: {
  currentUser: ICurrentUser;
}) {
  return (
    <>
      <FormHeader
        headerTitle="Create new Feedback"
        className="pt-0"
        headerClassName="pt-3"
        userName={currentUser.name}
        lastName={currentUser.lastName}
        firstName={currentUser.firstName}
        userImage={currentUser.image}
      />

      <AddFeedbackForm />
    </>
  );
}

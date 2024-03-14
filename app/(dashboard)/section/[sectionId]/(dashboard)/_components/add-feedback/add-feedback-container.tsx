import FormHeader from "@/components/create-form/form-header";
import AddFeedbackForm from "./add-feedback-form";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AddFeedbackContainer({
  currentUser,
}: {
  currentUser: ICurrentUser;
}) {
  return (
    <>
      <FormHeader
        headerTitle="Create new Feedback"
        className="pt-0"
        userName={currentUser.name}
        lastName={currentUser.lastName}
        firstName={currentUser.firstName}
        userImage={currentUser.image}
      />
      <ScrollArea>
        <AddFeedbackForm />
      </ScrollArea>
    </>
  );
}

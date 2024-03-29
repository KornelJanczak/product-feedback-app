import FormHeader from "@/components/form/form-header";
import FeedbackForm from "./feedback-form";

interface IFormContainer {
  currentUser: ICurrentUser;
  currentUserIsAdmin: boolean;
  feedbackId?: string;
  title?: string;
  detail?: string;
  status?: string;
  category?: string;
  headerTitle: string;
  actionType: "create" | "update";
}

const formInformationValues: IFeedbackFormValues[] = [
  {
    name: "title",
    label: "Title",
    description: "Add a short, descriptive headline",
  },
  {
    name: "detail",
    label: "Detail",
    description:
      "Include any specific comments on what should be improved, added, etc.",
  },
];

const formTagsValues: IFeedbackFormTagsValues[] = [
  {
    name: "category",
    label: "Category",
    description: "Choose a category for your feedback",
    selectValues: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
    selectPlaceholder: "Feature",
  },
  {
    name: "status",
    label: "Status",
    description: "Choose a status for your feedback",
    selectValues: ["In Progress", "Live", "Planned"],
    selectPlaceholder: "Planned",
  },
];

export default function FormContainer({
  currentUser,
  currentUserIsAdmin,
  feedbackId,
  actionType,
  headerTitle,
  title,
  detail,
  status,
  category,
}: IFormContainer) {
  return (
    <>
      <FormHeader
        headerTitle={headerTitle}
        className="pt-0"
        headerClassName="pt-3"
        actionType={actionType}
        userName={currentUser.name}
        lastName={currentUser.lastName}
        firstName={currentUser.firstName}
        userImage={currentUser.image}
        additonalContent={
          currentUserIsAdmin ? (
            <span className="text-sm text-pink bg-[#d68ffd] px-1 font-semibold rounded mr-auto">
              Admin
            </span>
          ) : (
            <span className="text-grey text-sm">Member</span>
          )
        }
      />

      <FeedbackForm
        formInformationValues={formInformationValues}
        formTagsValues={formTagsValues}
        feedbackId={feedbackId}
        currentUserId={currentUser.id}
        actionType={actionType}
        title={title}
        detail={detail}
        status={status}
        category={category}
      />
    </>
  );
}

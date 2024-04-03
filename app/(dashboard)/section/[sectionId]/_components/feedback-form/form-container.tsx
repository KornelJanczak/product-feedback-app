"use client";
import FormHeader from "@/components/form/form-header";
import FeedbackForm from "./feedback-form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import AdminTag from "../admin-tag";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IFeedbackAction } from "./feedback-action-button";

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
  className,
  actionType,
  headerTitle,
  title,
  detail,
  status,
  category,
}: IFeedbackAction) {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const isCreateForm = actionType === "create";
  const isEditForm = actionType === "update";

  const handleOpenForm = () => {
    setOpenForm((openForm) => !openForm);
  };

  return (
    <Dialog open={openForm} onOpenChange={handleOpenForm}>
      <DialogTrigger
        className={cn(
          "flex sm:flex items-center justify-center gap-0 text-darkWhite text-nowrap px-3 py-1 rounded-md hover:opacity-70 hover:transition-all hover:duration-300",
          isCreateForm && "bg-pink hover:bg-pink w-6/12 sm:w-auto",
          isEditForm && "bg-blue hover:bg-blue",
          className
        )}
      >
        {isCreateForm && (
          <>
            <PlusIcon width={18} height={18} color="#fff" />
            New feedback
          </>
        )}
        {isEditForm && "Edit Feedback"}
      </DialogTrigger>
      <DialogContent>
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
            <>
              {currentUserIsAdmin && <AdminTag />}
              {!currentUserIsAdmin && (
                <span className="text-grey text-sm">Member</span>
              )}
            </>
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
          handleOpenForm={handleOpenForm}
        />
      </DialogContent>
    </Dialog>
  );
}

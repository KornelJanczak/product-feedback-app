"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  createFeedbackInputs,
  createFeedbackSubmitHandler,
} from "@/models/@product-actions-types";
import { createFeedbackSchema } from "@/schemas/@product-actions-schemas";
import { FormSelect } from "./form-select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { createFeedback } from "@/server-actions/product/feedback/create-feedback";
import { toast } from "sonner";
import { updateFeedback } from "@/server-actions/product/feedback/update-feedback";

interface IcreateFeedbackForm {
  formInformationValues: IFeedbackFormValues[];
  formTagsValues: IFeedbackFormTagsValues[];
  title?: string;
  detail?: string;
  status?: string;
  category?: string;
  feedbackId?: string;
  currentUserId: string;
  actionType: "create" | "update";
  handleOpenForm: () => void;
}

export default function FeedbackForm({
  formInformationValues,
  formTagsValues,
  currentUserId,
  actionType,
  feedbackId,
  title,
  detail,
  status,
  category,
  handleOpenForm,
}: IcreateFeedbackForm) {
  const toastId = "feedback-form-toast";
  const pathname = usePathname();

  const sectionId = pathname.split("/")[2];

  const isCreateForm = actionType === "create";
  const isUpdateForm = actionType === "update";

  const form = useForm<createFeedbackInputs>({
    resolver: zodResolver(createFeedbackSchema),
    defaultValues: {
      sectionId,
      userId: currentUserId,
      title: title || "",
      detail: detail || "",
      category: category || undefined,
      status: status || undefined,
    },
  });

  const { execute: executeCreateFeedback, status: createStatus } = useAction(
    createFeedback,
    {
      onSuccess() {
        toast.dismiss(toastId);
        toast.success("Feedback created successfully");
        handleOpenForm();
      },
      onError() {
        toast.dismiss(toastId);
        toast.error("Error while creating feedback");
      },
      onExecute() {
        toast.loading("Creating feedback...", { id: toastId });
      },
    }
  );

  const { execute: executeUpdateFeedback, status: updateStatus } = useAction(
    updateFeedback,
    {
      onSuccess() {
        toast.dismiss(toastId);
        toast.success("Feedback updated successfully");
        handleOpenForm();
      },
      onError() {
        toast.dismiss(toastId);
        toast.error("Error while updating feedback");
      },
      onExecute() {
        toast.loading("Updating feedback...", { id: toastId });
      },
    }
  );

  const isExecuting =
    createStatus === "executing" || updateStatus === "executing";

  const onProcess: createFeedbackSubmitHandler = (values) => {
    if (isCreateForm) {
      executeCreateFeedback(values);
    }

    if (isUpdateForm && feedbackId) {
      executeUpdateFeedback({ ...values, feedbackId: feedbackId });
    }

    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onProcess)}
        className="pt-4 flex flex-col gap-8 sm:gap-20 h-full"
      >
        <Tabs defaultValue="information">
          <TabsList className="px-0 gap-x-3 bg-basicWhite">
            <TabsTrigger
              value="information"
              className="px-0 data-[state=active]:bg-basicWhite data-[state=active]:text-pink "
            >
              Information
            </TabsTrigger>
            <TabsTrigger
              value="tags"
              className="px-0 data-[state=active]:text-pink"
            >
              Tags
            </TabsTrigger>
          </TabsList>
          <TabsContent value="information" className="h-full">
            {formInformationValues.map(
              ({ name, description, label }: IFeedbackFormValues) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem className="pt-4">
                      <FormLabel>{label}</FormLabel>
                      <FormDescription>{description}</FormDescription>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            )}
          </TabsContent>
          <TabsContent value="tags" className="h-full">
            {formTagsValues.map(
              ({
                name,
                description,
                label,
                selectValues,
                selectPlaceholder,
              }: IFeedbackFormTagsValues) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem className="pt-4">
                      <FormLabel>{label}</FormLabel>
                      <FormDescription>{description}</FormDescription>
                      <FormControl>
                        <FormSelect
                          selectValues={selectValues}
                          selectPlaceholder={selectPlaceholder}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            )}
          </TabsContent>
        </Tabs>
        <Button
          type="submit"
          disabled={isExecuting}
          className="w-full bg-pink hover:bg-pink hover:opacity-70 
          hover:transition-all hover:duration-300 mt-0"
        >
          {isCreateForm && " Add Feedback"}
          {isUpdateForm && "Edit Feedback"}
        </Button>
      </form>
    </Form>
  );
}

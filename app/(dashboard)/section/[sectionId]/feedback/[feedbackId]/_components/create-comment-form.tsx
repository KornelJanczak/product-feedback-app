"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { createCommentSchema } from "@/schemas/@product-actions-schemas";
import {
  createCommentInputs,
  createCommentSubmitHandler,
} from "@/models/@product-actions-types";
import { useAction } from "next-safe-action/hooks";
import { createComment } from "@/server-actions/product/comment/create-comment";
import ClipLoader from "react-spinners/ClipLoader";
import TextAreaCard from "./textarea-card";

const limit = 250;

export function CreateCommentForm({
  feedbackId,
  sectionId,
}: {
  feedbackId: string;
  sectionId: string;
}) {
  const form = useForm<createCommentInputs>({
    resolver: zodResolver(createCommentSchema),

    defaultValues: {
      feedbackId,
      sectionId,
      content: "",
    },
  });

  const { execute, status } = useAction(createComment, {
    onSuccess() {
      toast.success("Comment posted successfully");
    },
    onError() {
      toast.error("Failed to post comment");
    },
  });

  const isPending = status === "executing";

  const onProcess: createCommentSubmitHandler = (values) => {
    execute(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onProcess)}
        className="fixed bottom-0 w-full space-y-4 px-5 py-5 rounded-md bg-basicWhite md:container md:right-0 md:left-0 md:mx-auto"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel className="text-sm sm:text-base">
                  Add comment
                </FormLabel>
                <span className="text-grey text-sm sm:text-base">
                  {limit} Characters max
                </span>
              </div>
              <FormControl>
                <TextAreaCard
                  field={field}
                  isPending={isPending}
                  placeholder="Type your comment here"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="hidden hover:opacity-70 hover:bg-pink hover:transition-all hover:duration-300 w-30"
        >
          {!isPending && "Post Comment"}
          {isPending && <ClipLoader size={20} color="#ffffffff" />}
        </Button>
      </form>
    </Form>
  );
}

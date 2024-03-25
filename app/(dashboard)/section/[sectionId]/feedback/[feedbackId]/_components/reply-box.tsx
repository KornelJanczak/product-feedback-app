"use client";
import TextAreaCard from "./textarea-card";
import { useAction } from "next-safe-action/hooks";
import { createReply } from "@/server-actions/product/comment/create-reply";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createReplySchema } from "@/schemas/@product-actions-schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  createReplyInputs,
  createReplySubmitHandler,
} from "@/models/@product-actions-types";
import { toast } from "sonner";

export default function ReplyBox({
  commentId,
  setReplyBoxComment,
}: {
  commentId: string;
  setReplyBoxComment: () => void;
}) {
  const param = useParams();

  const form = useForm<createReplyInputs>({
    resolver: zodResolver(createReplySchema),
    defaultValues: {
      content: "",
      commentId,
      sectionId: param.sectionId as string,
      feedbackId: param.feedbackId as string,
    },
  });

  const { execute, status } = useAction(createReply, {
    onSuccess() {
      toast.success("Reply posted successfully");
      setReplyBoxComment();
    },
    onError() {
      toast.error("Failed to post reply");
    },
  });

  const isPending = status === "executing";

  const onProcess: createReplySubmitHandler = (values) => {
    execute(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onProcess)}
        className="w-full space-y-4  pt-3 rounded-md bg-basicWhite"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextAreaCard
                  field={field}
                  isPending={isPending}
                  placeholder="Type your reply here"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

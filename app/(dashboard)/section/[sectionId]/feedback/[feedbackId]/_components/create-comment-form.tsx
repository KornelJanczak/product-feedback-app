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
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { createCommentSchema } from "@/schemas/@product-actions-schemas";
import {
  createCommentInputs,
  createCommentReturn,
  createCommentSubmitHandler,
} from "@/models/@product-actions-types";
import { useAction } from "next-safe-action/hooks";
import { createComment } from "@/server-actions/product/comment/create-comment";
import ClipLoader from "react-spinners/ClipLoader";

const limit = 250;

export function CreateCommentForm({
  feedbackId,
  sectionId,
}: {
  feedbackId: string;
  sectionId: string;
}) {
  const [value, setValue] = useState("");
  const [remainingChars, setRemainingChars] = useState(limit);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= limit) {
      setValue(newValue);
      setRemainingChars(limit - newValue.length);
    }
  };

  const form = useForm<createCommentInputs>({
    resolver: zodResolver(createCommentSchema),
    defaultValues: {
      feedbackId,
      sectionId,
      content: "",
    },
  });

  const { execute, status } = useAction(createComment);

  const isPending = status === "executing";

  const onProcess: createCommentSubmitHandler = (values) => {
    execute(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onProcess)}
        className="w-full space-y-6"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add comment</FormLabel>
              <FormControl>
                <Textarea
                  // onChange={handleChange}
                  placeholder="Type your comment here"
                  className="w-full"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {!isPending && "Post Comment"}
          {isPending && <ClipLoader size={20} color="#ffffffff" />}
        </Button>
      </form>
    </Form>
  );
}

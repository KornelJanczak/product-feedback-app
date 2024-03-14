"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  addFeedbackInputs,
  addFeedbackReturn,
  addFeedbackSubmitHandler,
} from "@/models/@product-actions-types";
import { addFeedbackSchema } from "@/schemas/@product-actions-schemas";
import { FormSelect } from "./form-select";

export default function AddFeedbackForm() {
  const form = useForm<addFeedbackInputs>({
    resolver: zodResolver(addFeedbackSchema),
    defaultValues: {
      title: "",
      userId: "",
      sectionId: "",
      category: "",
      detail: "",
      status: "inProgress",
    },
  });

  const onProcess: addFeedbackSubmitHandler = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onProcess)} className="space-y-5 pt-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback Title</FormLabel>
              <FormDescription>
                Add a short, descriptive headline
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Category</FormLabel>
          <FormDescription>Choose a category for your feedback</FormDescription>
          <FormControl>
            <FormSelect />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormField
          control={form.control}
          name="detail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback Detail</FormLabel>
              <FormDescription>
                Include any specific comments on what should be improved, added,
                etc.
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-pink hover:bg-pink hover:opacity-70 
          hover:transition-all hover:duration-300 "
        >
          Add Feedback
        </Button>
      </form>
    </Form>
  );
}

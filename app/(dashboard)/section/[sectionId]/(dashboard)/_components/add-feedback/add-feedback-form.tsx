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
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <form onSubmit={form.handleSubmit(onProcess)} className="space-y-8 pt-4">
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

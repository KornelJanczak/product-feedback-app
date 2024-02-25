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
import { createFeedbackSectionSchema } from "@/schemas/@product-actions-schemas";
import {
  createFeedbackSectionInputs,
  createFeedbackSectionSubmitHandler,
} from "@/models/@product-actions-types";
import { FormCombobox } from "./form-combobox";
import useSelectFriend from "@/hooks/use-selected-friends";

const formValues = [
  {
    name: "title",
    title: "Section Title",
    description: "Add a short, descriptive headline.",
  },
  {
    name: "membersIds",
    title: "Invite your friends!",
    description: "Add a short, descriptive headline",
  },
];

export default function AddForm({ friends }: { friends: IFriend[] }) {
  const selectedFriends = useSelectFriend((state) => state.selectedFriends);

  const form = useForm<createFeedbackSectionInputs>({
    resolver: zodResolver(createFeedbackSectionSchema),
    defaultValues: {
      title: "",
      membersIds: [],
    },
  });

  // 2. Define a submit handler.
  const onProcess: createFeedbackSectionSubmitHandler = (values) => {
    // Do something with the form values.
    console.log(selectedFriends);

    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onProcess)} className="space-y-8 pt-5">
        <FormField
          control={form.control}
          name={"title"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondDark text-sm">
                Section Title
              </FormLabel>
              <FormDescription className="text-grey mt-0 pt-0">
                Add a short, descriptive headline.
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"membersIds"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondDark text-sm">
                Invite your friends!
              </FormLabel>
              <FormDescription className="text-grey mt-0 pt-0">
                Find your friends
              </FormDescription>
              <FormControl>
                <FormCombobox formField={field} form={form} friends={friends} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-3.5">
          <Button
            type="submit"
            className="w-full bg-pink hover:bg-pink hover:opacity-70 
            transition-all Hover:duration-300"
          >
            Add Section
          </Button>
          <Button
            type="submit"
            className="w-full bg-secondDark hover:bg-secondDark 
            hover:opacity-70 transition-all hover:duration-300"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}

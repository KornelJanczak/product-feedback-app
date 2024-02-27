"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import FriendsContainer from "./friends-container";
import FormButtons from "./form-buttons";
import { useAction } from "next-safe-action/hooks";
import { createFeedbackSection } from "@/server-actions/product/create-feedback-section";
import { toast } from "sonner";

export default function AddForm({ friends }: { friends: IFriend[] }) {
  const selectedFriends = useSelectFriend((state) => state.selectedFriends);

  const form = useForm<createFeedbackSectionInputs>({
    resolver: zodResolver(createFeedbackSectionSchema),
    defaultValues: {
      title: "",
      membersIds: [],
    },
  });

  const { execute, status } = useAction(createFeedbackSection, {
    onSuccess() {
      toast.success("We created your new section!");
    },
    onError(data) {
      toast.error("Creating section failed!");
    },
  });

  const onProcess: createFeedbackSectionSubmitHandler = ({ title }) => {
    const friendsIds = selectedFriends.map((friend) => friend.id);
    console.log(friendsIds);

    execute({ title, membersIds: friendsIds });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onProcess)}
        className="space-y-8 py-5 md:pt-12"
      >
        <FormField
          control={form.control}
          name={"title"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondDark text-sm sm:text-base">
                Section Title
              </FormLabel>
              <FormDescription className="text-grey mt-0 pt-0 text-sm sm:text-base">
                Add a short, descriptive headline.
              </FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel className="text-secondDark text-sm sm:text-base">
            Invite your friends!
          </FormLabel>
          <FormDescription className="text-grey mt-0 pt-0 text-sm sm:text-base">
            Find your friends
          </FormDescription>
          <FormControl>
            <>
              <FriendsContainer />
              <FormCombobox form={form} friends={friends} />
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormButtons />
      </form>
    </Form>
  );
}

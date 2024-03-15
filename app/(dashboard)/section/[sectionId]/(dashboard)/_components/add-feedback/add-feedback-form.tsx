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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface IFormValues {
  name: "title" | "detail" | "category" | "status";
  label: string;
  description: string;
}

interface IFormTagsValues extends IFormValues {
  selectValues: string[];
}

const formInformationValues: IFormValues[] = [
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

const formTagsValues: IFormTagsValues[] = [
  {
    name: "category",
    label: "Category",
    description: "Choose a category for your feedback",
    selectValues: ["All", "UI", "UX", "Enhancement", "Bug", "Feature"],
  },
  {
    name: "status",
    label: "Status",
    description: "Choose a status for your feedback",
    selectValues: ["In Progress", "Live", "Planned"],
  },
];

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

  const onProcess: addFeedbackSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onProcess)}
        className="pt-4 flex flex-col h-full"
      >
        <Tabs defaultValue="information">
          <TabsList className="px-0 gap-x-3">
            <TabsTrigger
              value="information"
              className="px-0 data-[state=active]:bg-darkWhite data-[state=active]:text-pink "
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
              ({ name, description, label }: IFormValues) => (
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
              ({ name, description, label, selectValues }: IFormTagsValues) => (
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
          className="w-full bg-pink hover:bg-pink hover:opacity-70 
          hover:transition-all hover:duration-300 mt-auto"
        >
          Add Feedback
        </Button>
      </form>
    </Form>
  );
}

{
  /* <FormItem>
            <FormLabel>Category</FormLabel>
            <FormDescription>
              Choose a category for your feedback
            </FormDescription>
            <FormControl>
              <FormSelect />
            </FormControl>
            <FormMessage />
          </FormItem> */
}

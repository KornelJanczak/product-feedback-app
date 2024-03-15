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
  addFeedbackInputs,
  addFeedbackSubmitHandler,
} from "@/models/@product-actions-types";
import { addFeedbackSchema } from "@/schemas/@product-actions-schemas";
import { FormSelect } from "./form-select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";

interface IAddFeedbackForm {
  formInformationValues: IFeedbackFormValues[];
  formTagsValues: IFeedbackFormTagsValues[];
  currentUserId: string;
}

export default function AddFeedbackForm({
  formInformationValues,
  formTagsValues,
  currentUserId,
}: IAddFeedbackForm) {
  const pathname = usePathname();
  const sectionId = pathname.split("/")[2];

  const form = useForm<addFeedbackInputs>({
    resolver: zodResolver(addFeedbackSchema),
    defaultValues: {
      sectionId,
      userId: currentUserId,
      title: "",
      detail: "",
      category: undefined,
      status: undefined,
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
          className="w-full bg-pink hover:bg-pink hover:opacity-70 
          hover:transition-all hover:duration-300 mt-auto"
        >
          Add Feedback
        </Button>
      </form>
    </Form>
  );
}

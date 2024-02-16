"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { updateAccount, updateProfile } from "./settings-accordion";

export function SettingsDialog({
  open,
  onOpen,
  data,
  form,
  processForm,
}: {
  data: settings;
  open: boolean;
  form: UseFormReturn<updateAccount>;
  processForm: SubmitHandler<updateAccount>;
  onOpen: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <DialogContent className="max-w-80 sm:max-w-md rounded">
        <DialogHeader>
          <DialogTitle className="text-secondDark">Edit profile</DialogTitle>
          <DialogDescription className="text-grey">
            Make changes to your profile here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(form);
            }}
          >
            <div className="grid gap-4 py-4">
              {data.map((item, i) => {
                return (
                  <FormField
                    control={form.control}
                    key={i}
                    name={item.name}
                    render={({ field }) => (
                      <FormItem className="pt-2 md:pt-3">
                        <FormLabel className="md:text-base">
                          {item.type}
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type={item.name !== "email" ? "text" : "email"}
                            placeholder={item.type}
                            defaultValue={item.data as string}
                            className="md:text-base"
                          />
                        </FormControl>
                        <FormMessage className="md:text-base" />
                      </FormItem>
                    )}
                  />
                );
              })}
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-pink hover:opacity-70
            hover:bg-pink hover:transition duration-300"
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

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
import {
  updateProfileReturn,
  updateProfileSubmitHandler,
  updateUserReturn,
  updateUserSubmitHandler,
} from "@/models/@user-actions-types";

type CombinedFormReturn = updateUserReturn & updateProfileReturn;
type CombinedFormSumbit = updateUserSubmitHandler & updateProfileSubmitHandler;

export function SettingsDialog({
  open,
  onOpen,
  data,
  form,
  processForm,
  dialogTitle,
  dialogDescription,
}: {
  data: AccountInformation[] | ProfileInformation[];
  open: boolean;
  form: CombinedFormReturn;
  processForm: CombinedFormSumbit;
  dialogTitle: string;
  dialogDescription: string;
  onOpen: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <DialogContent className="max-w-80 sm:max-w-md md:max-w-lg rounded">
        <DialogHeader>
          <DialogTitle className="text-secondDark">{dialogTitle}</DialogTitle>
          <DialogDescription className="text-grey">
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(processForm)}>
            <div className="grid gap-2 py-2">
              {data.map((item, i) => {
                return (
                  <FormField
                    control={form.control}
                    key={i}
                    name={item.name as settingsAccount & settingsProfile}
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
                            defaultValue={item.data ? item.data : ""}
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
            <DialogFooter className="pt-4">
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

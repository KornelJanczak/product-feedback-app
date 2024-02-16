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
import { Label } from "@/components/ui/label";
import { editUser, editUserInfoSchema } from "@/server-actions/user/edit-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

type Inputs = z.infer<typeof editUserInfoSchema>;

export function SettingsDialog({
  open,
  onOpen,
  data,
  actionType,
}: {
  data: settings;
  open: boolean;
  actionType: "profile" | "account";
  onOpen: () => void;
}) {
  const defaultValues = data.reduce((result, item) => {
    result[item.name] = item.data;
    return result;
  }, {} as Record<string, string | null | undefined>);

  const form = useForm<Inputs>({
    resolver: zodResolver(editUserInfoSchema),
    defaultValues,
  });

  const { execute } = useAction(editUser, {});

  const processForm: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    // execute(data);
  };

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
          <form onSubmit={form.handleSubmit(processForm)}>
            {/* <div className="grid gap-4 py-4"> */}
            {data.map((item, i) => (
              <FormField
                control={form.control}
                name={item.name}
                key={i}
                render={({ field }) => (
                  <FormItem className="pt-2 md:pt-3">
                    <FormLabel className="md:text-base">{item.type}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={item.type}
                        defaultValue={item.data as string}
                        {...field}
                        className="md:text-base"
                        type={item.name !== "email" ? "text" : "email"}
                        // required
                      />
                    </FormControl>
                    <FormMessage className="md:text-base" />
                  </FormItem>
                )}
              />
            ))}
            {/* </div> */}
            {/* <DialogFooter> */}
            <Button
              type="submit"
              className="bg-pink hover:opacity-70
            hover:bg-pink hover:transition duration-300"
            >
              Save changes
            </Button>
            {/* </DialogFooter> */}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// <div key={i} className="grid grid-cols-4 items-center gap-4 ">
//   <Label htmlFor={item.type} className="">
//     {item.type}
//   </Label>
//   <Input
//     id={item.type}
//     defaultValue={item.data as string}
//     className="col-span-3"
//   />
// </div>

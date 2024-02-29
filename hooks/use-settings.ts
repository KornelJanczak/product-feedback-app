"use client";
import {
  CombinedFormInputs,
  CombinedFormSumbit,
} from "@/models/@user-actions-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";

const createDefaultValues = (
  array: ProfileInformation[] | AccountInformation[]
) => {
  return array.reduce((result: any, item) => {
    result[item.name] = item.data;
    return result;
  }, {});
};

export const useUserSettings = (
  action: any,
  schema: any,
  settingsObj: AccountInformation[] | ProfileInformation[],
  type: "profile" | "account"
) => {
  const toastId = "loadingToast";
  const [open, setOpen] = useState<boolean>(false);

  const { execute } = useAction(action, {
    onSuccess() {
      toast.dismiss(toastId);
      toast.success(`Your ${type} updated!`);
    },
    onError() {
      toast.dismiss(toastId);
      toast.error("Something went wrong!");
    },
    onExecute() {
      toast.loading("Loading...", { id: toastId });
    },
  });

  const defaultValues = createDefaultValues(settingsObj);

  const form = useForm<CombinedFormInputs>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const processForm: CombinedFormSumbit = async (data) => {
    execute(data);
  };

  return { processForm, form, open, setOpen, execute };
};

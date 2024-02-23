"use client";
import {
  CombinedFormInputs,
  CombinedFormSumbit,
} from "@/models/@user-actions-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
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

  const { execute, status } = useAction(action, {
    onSuccess(data: { error: string }) {
      toast.dismiss(toastId);
      if (data.error) {
        toast.error(data.error, { duration: 3000 });
      } else {
        toast.success(`Your ${type} updated!`, { duration: 3000 });
      }
    },
    onError() {
      toast.error("Something went wrong!");
    },
  });

  useEffect(() => {
    if (status === "executing") {
      toast.loading("Loading...", { id: toastId });
    }
  }, [status]);

  const defaultValues = createDefaultValues(settingsObj);

  const form = useForm<CombinedFormInputs>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const processForm: CombinedFormSumbit = async (data) => {
    console.log(data);
    execute(data);
  };

  return { processForm, form, open, setOpen, execute };
};

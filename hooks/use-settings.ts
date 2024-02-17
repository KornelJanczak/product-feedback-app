"use client";
import { updateUser } from "@/server-actions/user/update-user";
import {
  CombinedFormInputs,
  CombinedFormReturn,
  CombinedFormSumbit,
  updateUserInputs,
  updateUserSubmitHandler,
} from "@/models/@user-actions-types";
import { updateUserSchema } from "@/schemas/@user-actions-schemas";
import { updateProfile } from "@/server-actions/user/update-profile";
import { updateProfileInputs } from "@/models/@user-actions-types";
import { updateProfileSchema } from "@/schemas/@user-actions-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import * as z from "zod";

const createDefaultValues = (array: settings) => {
  return array.reduce((result: any, item) => {
    result[item.name] = item.data;
    return result;
  }, {});
};

export const useUserSettings = (
  action: any,
  schema: any,
  settingsObj: settings,
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

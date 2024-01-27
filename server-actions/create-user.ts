"use server";
import { registerFormSchema } from "@/app/models/@register-schema";


export default async function createUser(formData: FormData) {
  console.log(formData);

  const validateFields = registerFormSchema.safeParse(formData);

  if (!validateFields.success)
    return { error: validateFields.error.flatten().fieldErrors };

  return {};
}

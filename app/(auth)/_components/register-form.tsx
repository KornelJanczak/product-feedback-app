"use client";
import { createSafeUser } from "@/server-actions/user/create-user";
import { registerFormSchema } from "@/schemas/@auth-actions-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import SubmitBtn from "./submit-btn";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAction } from "next-safe-action/hooks";
import { registerInputs } from "@/models/@auth-actions-types";

// Zrefaktoryzować przy użyciu mapy
export default function RegisterForm() {
  const router = useRouter();

  const form = useForm<registerInputs>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const { execute, status } = useAction(createSafeUser, {
    onSuccess() {
      toast.success("Your account has been registered!");
      router.push("/login");
    },
    onError({ serverError }) {
      toast.error(serverError);
    },
    onExecute() {
      form.reset();
    },
  });

  const processForm: SubmitHandler<registerInputs> = async (data) => {
    execute(data);
  };

  return (
    <section className="container h-screen flex items-center justify-center pb-24 ">
      <Form {...form}>
        <form
          className="max-w-md w-full"
          onSubmit={form.handleSubmit(processForm)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl pb-2 text-secondDark">Register</h3>
            <span
              className="text-lg text-secondDark cursor-pointer underline hover:text-pink hover:transition duration-300"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="pt-2 md:pt-3">
                <FormLabel className="md:text-base">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className="md:text-base"
                    type="text"
                    required
                  />
                </FormControl>
                <FormMessage className="md:text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="pt-2 md:pt-3">
                <FormLabel className="md:text-base">First name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First name"
                    {...field}
                    className="md:text-base"
                    type="text"
                    required
                  />
                </FormControl>
                <FormMessage className="md:text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="pt-2 md:pt-3">
                <FormLabel className="md:text-base">Last name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last name"
                    {...field}
                    className="md:text-base"
                    type="text"
                    required
                  />
                </FormControl>
                <FormMessage className="md:text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="pt-2 md:pt-3">
                <FormLabel className="md:text-base">Email address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    {...field}
                    className="md:text-base"
                    type="email"
                    required
                  />
                </FormControl>
                <FormMessage className="md:text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="pt-2 md:pt-3">
                <FormLabel className="md:text-base">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className="md:text-base"
                    type="password"
                    required
                  />
                </FormControl>
                <FormMessage className="md:text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repeatPassword"
            render={({ field }) => (
              <FormItem className="pt-2 md:pt-3">
                <FormLabel className="md:text-base">Repeat password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Repeat password"
                    {...field}
                    className="md:text-base"
                    type="password"
                    required
                  />
                </FormControl>
                <FormMessage className="md:text-base" />
              </FormItem>
            )}
          />
          <SubmitBtn pending={status === "executing"}>Register</SubmitBtn>
        </form>
      </Form>
    </section>
  );
}

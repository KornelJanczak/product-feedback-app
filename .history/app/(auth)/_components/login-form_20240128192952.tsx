"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { useRouter } from "next/navigation";
import SubmitBtn from "./submit-btn";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { loginFormSchema } from "@/models/@auth-schema";

export default function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState<boolean>(false);

  type Inputs = z.infer<typeof loginFormSchema>;

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setPending(true);
    try {
      await signIn("credentials", data);
      toast.success("You are logged!");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setPending(false);
    }
  };

  return (
    <section className="container h-screen flex items-center justify-center ">
      <Form {...form}>
        <form
          className="max-w-md w-full"
          onSubmit={form.handleSubmit(processForm)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl pb-2">Login</h3>
            <span
              className="text-md cursor-pointer underline hover:text-pink hover:transition duration-300"
              onClick={() => router.push("/register")}
            >
              Register
            </span>
          </div>
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
          <SubmitBtn pending={pending}>Login</SubmitBtn>
        </form>
      </Form>
    </section>
  );
}

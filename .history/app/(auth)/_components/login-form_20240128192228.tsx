"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

export default function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState<boolean>(false);

  const loginFormSchema = z.object({
    email: z.string().email({ message: "Email must contain @ symbol." }),
    password: z
      .string()
      .min(5, { message: "Password must contain at lesat 5 symbol" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one digit." })
      .regex(/[@#$%^&+=!]/, {
        message: "Password must contain at least one special character.",
      }),
  });

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const processForm = async (data) => {
    await signIn("credentials", data);
  };

  return (
    <section className="container h-screen flex items-center justify-center ">
      <Form {...form}>
        <form
          className="max-w-md w-full"
          onSubmit={form.handleSubmit((data) => {
            signIn("credentials", data);
          })}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl pb-2">Login</h3>
            <span
              className="text-lg cursor-pointer underline hover:text-pink hover:transition duration-300"
              onClick={() => router.push("/register")}
            >
              Register
            </span>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="pt-2 lg:pt-3">
                <FormLabel className="lg:text-base">Email address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    {...field}
                    className="lg:text-base"
                    type="email"
                    required
                  />
                </FormControl>
                <FormMessage className="lg:text-base" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="pt-2 lg:pt-3">
                <FormLabel className="lg:text-base">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    className="lg:text-base"
                    type="password"
                    required
                  />
                </FormControl>
                <FormMessage className="lg:text-base" />
              </FormItem>
            )}
          />
          <SubmitBtn>Login</SubmitBtn>
        </form>
      </Form>
    </section>
  );
}

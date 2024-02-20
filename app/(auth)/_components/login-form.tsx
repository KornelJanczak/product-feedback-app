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
import { loginFormSchema } from "@/schemas/@auth-actions-schemas";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/public/icons/github";

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

    signIn("credentials", { ...data, redirect: false, callbackUrl: "/" }).then(
      (callback) => {
        setPending(false);
        if (callback?.ok) {
          router.push("/");
          toast.success("You are logged!");
        }

        if (callback?.error) {
          toast.error("Something went wrong");
        }
      }
    );
  };

  return (
    <section className="container flex justify-center">
      <div className="max-w-md w-full h-screen flex flex-col items-center justify-center pb-60">
        <div className=" w-full flex justify-between items-center pb-2">
          <h3 className="font-bold text-xl pb-2 text-secondDark">Login</h3>
          <span
            className="text-lg cursor-pointer underline text-secondDark hover:text-pink hover:transition duration-300"
            onClick={() => router.push("/register")}
          >
            Register
          </span>
        </div>
        <Button
          className="w-full flex gap-1 items-center justify-center"
          onClick={() => signIn("github", { redirect: false })}
        >
          <GithubIcon />
          Continue with GitHub
        </Button>
        <div className="w-full flex items-center gap-4 pt-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className=" text-grey after:">OR</div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <Form {...form}>
          <form className="w-full" onSubmit={form.handleSubmit(processForm)}>
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
      </div>
    </section>
  );
}

"use client";
import createUser from "@/server-actions/create-user";
import { registerFormSchema } from "@/models/@register-schema";
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
import * as z from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

type Inputs = z.infer<typeof registerFormSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const [pending, setPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    resetOptions: {
      keepTouched: true,
    },

    
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });


  const processForm: SubmitHandler<Inputs> = async (data) => {
    setPending(true);
    try {
      const user = await createUser(data);
      if (!user) toast.error("Something went wrong");
      toast.success("Your account has been registered!");
      router.push("/login");
    } catch {
      toast.error("Something went wrong");
    } finally {
      form.reset();
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
            <h3 className="font-bold text-xl pb-2">Register</h3>
            <span
              className="text-lg cursor-pointer underline hover:transition duration-300"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="pt-2 lg:pt-3">
                <FormLabel className="lg:text-base">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Username"
                    {...field}
                    className="lg:text-base"
                    type="text"
                    required
                  />
                </FormControl>
                <FormMessage className="lg:text-base" />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="repeatPassword"
            render={({ field }) => (
              <FormItem className="pt-2 lg:pt-3">
                <FormLabel className="lg:text-base">Repeat password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Repeat password"
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
          <SubmitBtn pending={pending}>Register</SubmitBtn>
        </form>
      </Form>
    </section>
  );
}

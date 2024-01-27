"use client";
import createUser from "@/server-actions/create-user";
import { registerFormSchema } from "@/app/models/@register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
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

export default function LoginForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <section className="container h-screen flex items-center justify-center ">
      <Form {...form}>
        <form className="max-w-md w-full">
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
                  />
                </FormControl>
                <FormMessage className="lg:text-base" />
              </FormItem>
            )}
          />
          <Button
            className="mt-5 w-full bg-pink hover:opacity-70 hover:bg-pink hover:transition duration-300 lg:mt-7"
            type="submit"
          >
            Register
          </Button>
        </form>
      </Form>
    </section>
  );
}

"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Button, buttonVariants } from "../../ui/button";
import { Input } from "../../ui/input";
import { IconChevronRight, IconEmail } from "../../icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useForgotPasswordForm } from "./useForgotPasswordForm.component";

export const ForgotPasswordForm = () => {
  const { form, onSubmit } = useForgotPasswordForm();

  return (
    <>
      {/* form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-6 md:mt-8 space-y-3.5 md:space-y-5"
        >
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2 md:gap-2.5 px-2.5 md:px-5 rounded-md md:rounded-10 border border-neutral-900/20">
                  <FormLabel>
                    <IconEmail />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Email"
                      {...field}
                      className="h-auto px-0 py-3 md:py-3.5 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-sm leading-5.5"
                    />
                  </FormControl>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* submit */}
          <Button
            type="submit"
            className="w-full md:h-[52px] !mt-5 rounded-md md:rounded-10 text-sm md:text-base leading-5.5 md:leading-6"
          >
            Submit
          </Button>
        </form>
      </Form>

      {/* sign in link */}
      <p className="mt-5 text-center font-medium text-sm leading-4.5">
        <Link
          href={"/signup"}
          className={cn(buttonVariants({ variant: "link" }), "px-0 py-0")}
        >
          <IconChevronRight className="w-2.5 rotate-180 mr-3.5 !fill-primary text-danger" />

          <span>Back to Sign In</span>
        </Link>
      </p>
    </>
  );
};

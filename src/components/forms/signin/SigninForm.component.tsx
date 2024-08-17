"use client";

import { SocialSigninActions } from "../SocialSigninActions.component";
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
import { IconEmail, IconEye, IconEyeClose, IconLock } from "../../icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSigninForm } from "./useSigninForm.component";
import { Checkbox } from "@/components/ui/checkbox";

export const SigninForm = () => {
  const { form, showPassword, toggleShowPassword, onSubmit } = useSigninForm();

  return (
    <>
      {/* socials */}
      <SocialSigninActions />

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

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2 md:gap-2.5 px-2.5 md:px-5 rounded-md md:rounded-10 border border-neutral-900/20">
                  <FormLabel>
                    <IconLock />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      // type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      {...field}
                      className="h-auto px-0 py-3 md:py-3.5 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-sm leading-5.5"
                    />
                  </FormControl>

                  {/* <span role="button" onClick={toggleShowPassword}>
                    {!showPassword ? <IconEye /> : <IconEyeClose />}
                  </span> */}
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* remember & forgot */}
          <div className="flex justify-between flex-wrap gap-2 font-medium text-sm leading-5.5 text-neutral-900">
            <FormField
              control={form.control}
              name="remember_me"
              render={({ field }) => (
                <FormItem className="flex-1 flex items-center gap-2.5">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="!m-0 cursor-pointer">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />

            <Link
              href={"/forgot-password"}
              className={cn("hover:text-primary")}
            >
              Forgot Password?
            </Link>
          </div>

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
      <p className="mt-5 text-center font-medium text-sm leading-4.5 text-neutral-900">
        <span className="">You haven't any account?</span>{" "}
        <Link
          href={"/signup"}
          className={cn(buttonVariants({ variant: "link" }), "px-0 py-0")}
        >
          Sign Up
        </Link>
      </p>
    </>
  );
};

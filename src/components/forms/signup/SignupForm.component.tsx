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
import {
  IconCalendar,
  IconEmail,
  IconEye,
  IconEyeClose,
  IconGender,
  IconLock,
  IconUser,
} from "../../icons";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { useSignupForm } from "./useSignupForm.component";

export const SignupForm = () => {
  const {
    genders,
    form,
    selectedGender,
    showPassword,
    toggleShowPassword,
    onSubmit,
  } = useSignupForm();

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
                <div className="flex items-center gap-2 md:gap-2.5 px-2.5 md:px-5 rounded-md md:rounded-[10px] border border-neutral-900/20">
                  <FormLabel>
                    <IconEmail />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Email"
                      {...field}
                      className="h-auto px-0 py-3 md:py-3.5 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-sm leading-[22px]"
                    />
                  </FormControl>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-2 md:gap-2.5 px-2.5 md:px-5 rounded-md md:rounded-[10px] border border-neutral-900/20">
                  <FormLabel>
                    <IconUser />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      {...field}
                      className="h-auto px-0 py-3 md:py-3.5 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-sm leading-[22px]"
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
                <div className="flex items-center gap-2 md:gap-2.5 px-2.5 md:px-5 rounded-md md:rounded-[10px] border border-neutral-900/20">
                  <FormLabel>
                    <IconLock />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create Password"
                      {...field}
                      className="h-auto px-0 py-3 md:py-3.5 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-medium text-sm leading-[22px]"
                    />
                  </FormControl>

                  <span role="button" onClick={toggleShowPassword}>
                    {!showPassword ? <IconEye /> : <IconEyeClose />}
                  </span>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* dob & gender */}
          <div className="flex flex-col md:flex-row gap-3.5 md:gap-5">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex-1 flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          className={cn(
                            "flex items-center justify-start gap-2 px-2.5 md:px-5 py-3 md:py-3.5 h-auto rounded-md border border-neutral-900/20 bg-transparent hover:bg-transparent font-medium text-sm leading-[22px]"
                            // !field.value && "text-muted-foreground"
                          )}
                        >
                          {/* icon */}
                          <IconCalendar />

                          {/* value or placeholder */}
                          <span
                            className={cn(
                              !field.value
                                ? "text-neutral-900/60"
                                : "text-neutral-900"
                            )}
                          >
                            {field.value
                              ? format(field.value, "PPP")
                              : "Pick a date"}
                          </span>
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <div className="flex-1 flex items-center gap-5 px-2.5 md:px-5 py-3 md:py-3.5 rounded-md border border-neutral-900/20">
                    <FormLabel>
                      <IconGender />
                    </FormLabel>

                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center gap-5"
                      >
                        {genders.map((gender) => (
                          <FormItem
                            key={gender.value}
                            className="flex items-center space-x-3 !m-0"
                          >
                            <FormControl>
                              <RadioGroupItem
                                value={gender.value}
                                className={cn(
                                  gender.value == selectedGender
                                    ? "border-primary text-primary"
                                    : ""
                                )}
                              />
                            </FormControl>
                            <FormLabel
                              className={cn(
                                "font-medium text-sm md:text-base leading-[22px] md:leading-6 !m-0 !ml-2 md:!ml-3.5 cursor-pointer",
                                gender.value == selectedGender
                                  ? "text-neutral-900"
                                  : "text-neutral-900/60"
                              )}
                            >
                              {gender.title}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* submit */}
          <Button
            type="submit"
            className="w-full md:h-[52px] !mt-5 rounded-md md:rounded-[10px] text-sm md:text-base leading-[22px] md:leading-6"
          >
            Submit
          </Button>
        </form>
      </Form>

      {/* sign in link */}
      <p className="mt-5 text-center font-medium text-sm leading-[18px] text-neutral-900">
        <span className="">Already have an account?</span>{" "}
        <Link
          href={"/signin"}
          className={cn(buttonVariants({ variant: "link" }), "px-0 py-0")}
        >
          Sign In
        </Link>
      </p>
    </>
  );
};

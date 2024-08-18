"use client";

import Image from "next/image";
import Link from "next/link";
import { IconMessage, IconSearch } from "../icons";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const FeedHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center gap-5 md:gap-0 py-4 md:py-4.5 px-5 md:px-0 bg-white">
      {/* logo */}
      <Link href="/" className="w-60 pl-5 hidden md:flex items-center gap-2.5">
        <Image
          src="/app-logo.svg"
          alt="logo"
          width={26}
          height={26}
          className="w-4 sm:w-auto h-4 sm:h-auto"
        />

        <span className="font-bold text-xs sm:text-lg text-neutral-900 leading-4.5 sm:leading-7">
          {"Meetmax"}
        </span>
      </Link>

      {/* search */}
      <div className="order-2 md:order-1 flex-1 md:max-w-[542px] flex items-center gap-2.5 px-2.5 md:px-5 border border-neutral-900/40 rounded-10">
        <IconSearch className="w-3.5 md:w-4 h-3.5 md:h-4" />

        <Input
          placeholder="Search for something here..."
          className="h-8 md:h-10 px-0 py-0 rounded-[inherit] bg-transparent font-normal text-xs md:text-sm leading-4.5 md:leading-5.5 text-neutral-900 border-0 ring-offset-transparent placeholder:text-neutral-900/60 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
      </div>

      {/* avatar */}
      <div className="order-1 md:order-2 ml-auto md:pr-5">
        <div className="h-auto md:h-10.5 md:ml-2 flex items-center bg-white rounded-10">
          <span className="hidden md:block flex-1 px-5 font-medium leading-6 text-neutral-900">
            Saleh Ahmed
          </span>

          <Avatar className="!rounded-10 w-8 md:w-10 h-8 md:h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="!rounded-10 w-8 md:w-10 h-8 md:h-10">
              CN
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* message icon */}
      <span role="button" className="order-3 md:hidden">
        <IconMessage />
      </span>
    </header>
  );
};

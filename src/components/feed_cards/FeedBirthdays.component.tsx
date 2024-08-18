import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IconCandle, IconSubmit } from "../icons";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

export const FeedBirthdays = () => {
  return (
    <Card className="rounded-2xl flex-1">
      <CardHeader className="flex-row justify-between items-center px-4.5 py-3 border-b border-neutral-900/20">
        <CardTitle className="font-bold text-base leading-6 text-neutral-900">
          Birthdays
        </CardTitle>

        <Link
          href={"/"}
          className={buttonVariants({
            variant: "link",
            className: cn("!h-auto !p-0 !m-0"),
          })}
        >
          See All
        </Link>
      </CardHeader>

      <CardContent className="!px-4.5 !py-5">
        <div className="flex gap-5">
          <Avatar className="rounded-md">
            <AvatarImage
              src={`https://randomuser.me/api/portraits/men/10.jpg`}
            />
            <AvatarFallback className="rounded-md">ED</AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-medium leading-6 text-neutral-900">
              Edilson De Carvalho
            </h3>
            <p className="font-medium text-xs leading-4.5 text-neutral-900/60">
              Birthday today
            </p>
          </div>
        </div>

        <div className="mt-2.5 mb-4.5 flex gap-2.5">
          <Input
            placeholder="Write on his inbox"
            className="font-normal text-sm leading-5.5 text-neutral-900 placeholder:text-neutral-900/60 rounded-10 px-2.5 py-1 h-auto"
          />
          <button
            className="p-2 rounded-md bg-primary/20 grid place-items-center"
            aria-label="submit"
          >
            <IconSubmit />
          </button>
        </div>

        <div className="bg-neutral font-medium text-neutral-900 p-2.5 rounded-10">
          <div className="flex gap-5">
            <div className="w-10 h-10 rounded-md bg-warning-light-100 grid place-items-center">
              <IconCandle />
            </div>

            <div className="flex-1">
              <h3 className="leading-6">Upcoming birthdays</h3>
              <p className="text-xs leading-4.5 text-neutral-900/60">
                See 12 others have upcoming birthdays
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

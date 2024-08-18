import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IconFb, IconGlobe, IconIg, IconTwitter } from "../icons";

export const FeedYouMightLike = () => {
  return (
    <Card className="rounded-2xl flex-1">
      <CardHeader className="flex-row justify-between items-center px-4.5 py-3 border-b border-neutral-900/20">
        <CardTitle className="font-bold text-base leading-6 text-neutral-900">
          You Might Like
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
        {/* user info */}
        <div className="flex gap-5">
          <Avatar className="w-12.5 h-12.5">
            <AvatarImage
              src={`https://randomuser.me/api/portraits/men/20.jpg`}
            />
            <AvatarFallback className="w-12.5 h-12.5">RS</AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-medium leading-6 text-neutral-900">
              Radovan SkillArena
            </h3>
            <p className="font-medium text-xs leading-4.5 text-neutral-900/60 mb-7.5">
              Founder & CEO at Trophy
            </p>

            <div className="flex items-center gap-4">
              {socialsList.map((social, i) => (
                <button
                  key={social.id + i + Math.random()}
                  className="[&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:fill-neutral-900/60"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* actions */}
        <div className="flex gap-5 mt-6">
          <Button
            variant={"ghost"}
            className={cn(
              "flex-1 rounded-md font-bold text-neutral-900/60 border-neutral-900/20"
            )}
          >
            Ignore
          </Button>
          <Button variant={"default"} className={cn("flex-1 rounded-lg")}>
            Follow
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const socialsList = [
  { id: 1, icon: <IconGlobe /> },
  { id: 2, icon: <IconFb /> },
  { id: 3, icon: <IconTwitter /> },
  { id: 4, icon: <IconIg /> },
];

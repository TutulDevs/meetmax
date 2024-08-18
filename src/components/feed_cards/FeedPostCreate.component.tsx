"use client";

import { IconCameraVideo, IconPhoto, IconUser } from "../icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

export const FeedPostCreate = () => {
  return (
    <Card className="rounded-none md:rounded-20">
      <CardContent className="px-5 md:px-4.5 py-3.5 md:py-5 space-y-3 md:space-y-4.5">
        <div className="flex gap-2.5 md:gap-3.5">
          <Avatar className="w-8 md:w-10 h-8 md:h-10">
            <AvatarImage
              src={"https://randomuser.me/api/portraits/men/1.jpg"}
            />
            <AvatarFallback className="w-8 md:w-10 h-8 md:h-10">
              {"SA"}
            </AvatarFallback>
          </Avatar>

          <Input
            placeholder="What's happening"
            className="flex-1 h-8 md:h-10 px-2.5 py-2 md:py-2.5 font-normal text-xs md:text-sm leading-4.5 md:leading-5.5 bg-neutral-900/5"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-6 md:gap-7.5 text-xs md:text-sm leading-4.5 md:leading-5.5 font-medium text-neutral-900">
            {list.map((x) => (
              <button
                key={x.title_lg}
                type="button"
                className="flex items-center gap-2 md:gap-2.5"
              >
                {x.icon}

                <span className="flex-1 hidden md:block">{x.title_lg}</span>
                <span className="flex-1 md:hidden">{x.title_sm}</span>
              </button>
            ))}
          </div>

          <Button className="px-3.5 md:px-7.5 h-7.5 md:h-10 rounded-md ">
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const list = [
  { icon: <IconCameraVideo />, title_sm: "Live", title_lg: "Live Video" },
  { icon: <IconPhoto />, title_sm: "Photo", title_lg: "Photo/Video" },
  { icon: <IconUser />, title_sm: "Feeling", title_lg: "Feeling" },
];

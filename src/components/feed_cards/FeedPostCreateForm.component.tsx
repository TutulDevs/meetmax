"use client";

import { useState } from "react";
import { IconArrowLeft, IconCloseCircle } from "../icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { PostDocType } from "@/mock/post_create";

export const FeedPostCreateForm: React.FC<{ trigger: React.ReactNode }> = ({
  trigger,
}) => {
  const [showPhoto, setShowPhoto] = useState(false);
  const toggleShowPhoto = () => setShowPhoto((v) => !v);

  const defautText = showPhoto
    ? "After 7 1/2 years at Samsung Australia, I am fortunate to have been a part of an amazing company and have done some amazing things."
    : "";

  const photoContent = (cls?: string) => (
    <div className={cn("md:px-4.5 h-[168px] md:h-[476px] relative", cls)}>
      {/* remove image */}
      <button
        type="button"
        aria-label="remove image"
        className="absolute top-2.5 md:top-4.5 right-5 md:right-9 z-10"
        onClick={toggleShowPhoto}
      >
        <IconCloseCircle />
      </button>

      {/* image */}
      <Avatar className="w-full h-full !rounded-10">
        <AvatarImage
          src={`https://s3-alpha-sig.figma.com/img/1a34/13e2/2c8cbab17608d9408cf68f4a4cd95c70?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f2FDYrZDC6NtkAfD-8C4jJfd3v74PGLZvaoKl1bmMKKwSYs0Uz76fd0TJNlj-eLQSbi3SpoZsOv8o5Ii5iqT5VK5Cm0eCiy~cYDL7kGm9imrgvTMsj0lgFI9ZWopl1xvQpWYFEK9S7~EYyiSUNc~wRGNAe4Tj92TWZu7SXshP5kJgRpUMLn5dc90-b~BVRWoZzNEpXbWaUMs1RNDWP5WZkD0wXAlYHxAS2mfFcMyyLp~dHPbnDQ1Ql2aBjDCcJZa4rvLvk-P4cLJT~8AVKZBPse5qGdtmD6Bp-bEAtjoTPeJ8g1dztpqpUAyOkGZb7RZWutx8dMH-~OeP7-RnxXUHw__`}
          className="object-cover"
        />
        <AvatarFallback className="w-full h-full !rounded-10">
          SA
        </AvatarFallback>
      </Avatar>
    </div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        {/* header */}
        <div className="flex flex-row items-center gap-4.5 px-4.5 py-2.5">
          <h2 className="font-medium md:font-bold text-sm md:text-base leading-5.5 md:leading-6 text-neutral-900 mr-auto flex items-center gap-2.5">
            <DialogClose asChild>
              <button className="md:hidden">
                <IconArrowLeft />
              </button>
            </DialogClose>

            <span>Create a post</span>
          </h2>

          <div className="font-medium text-neutral-900/80 flex items-center gap-2.5 md:gap-4.5">
            <label className="text-[9px] md:text-sm leading-[14px] md:leading-5.5">
              Visible for
            </label>

            <Select defaultValue="fr">
              <SelectTrigger className="flex-1 px-2.5 py-2 text-2xs md:text-sm leading-4 md:leading-5.5 bg-neutral-900/5 text-primary [&>svg]:w-4 gap-3 rounded">
                <SelectValue placeholder="select" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="fr">{"Friends)"}</SelectItem>
                <SelectItem value="pb">{"Public)"}</SelectItem>
                <SelectItem value="om">{"Only Me)"}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogClose asChild>
            <button className="hidden md:block">
              <IconCloseCircle />
            </button>
          </DialogClose>
        </div>

        <div className="px-5 md:px-0">
          <div className="h-px bg-neutral-900/20" />
        </div>

        {/* form */}
        <div className="px-5 md:px-4.5 my-3.5 md:my-4.5 flex items-start gap-3.5">
          <Avatar className="w-8 md:w-10.5 h-8 md:h-10.5">
            <AvatarImage
              src={`https://randomuser.me/api/portraits/men/1.jpg`}
            />
            <AvatarFallback className="w-8 md:w-10.5 h-8 md:h-10.5">
              SA
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 bg-neutral-900/5 rounded-10 py-2.5 md:py-0">
            <Textarea
              placeholder="What's happening?"
              defaultValue={defautText}
              className="bg-transparent py-0 md:py-2.5"
            />

            {showPhoto && photoContent("md:hidden px-2.5")}
          </div>
        </div>

        {/* uploaded image */}
        {showPhoto && photoContent("hidden md:block")}

        {/* actions */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 md:gap-2 p-5 md:p-4.5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4.5 md:gap-7.5 text-xs md:text-sm leading-4.5 md:leading-5.5 font-medium text-neutral-900">
            {PostDocType.map((x) => (
              <button
                key={x.id}
                type="button"
                className="flex items-center gap-2 md:gap-2.5"
                onClick={toggleShowPhoto}
              >
                {x.icon}

                <span className="flex-1 ">{x.title_lg}</span>
                {/* <span className="flex-1 md:hidden">{x.title_sm}</span> */}
              </button>
            ))}
          </div>

          <Button className="px-3.5 md:px-7.5 h-7.5 md:h-10 font-medium text-sm md:text-base leading-5.5 md:leading-6 rounded-md ">
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

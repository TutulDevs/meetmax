import {
  IconComments,
  IconDots,
  IconGif,
  IconLike,
  IconLiked,
  IconPhoto,
  IconShare,
  IconSubmit,
  IconUser,
} from "../icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { UsersGroup } from "../users_group/UsersGroup.component";
import { POST } from "@/lib/types";
import { cn } from "@/lib/utils";

export const FeedItem: React.FC<{ post: POST }> = ({ post }) => {
  const images = post.contents.images;
  const imagesCount = images.length;

  return (
    <Card className="rounded-none md:rounded-20">
      <CardContent className="px-5 md:px-4.5 py-3.5 md:py-5 space-y-3 md:space-y-4.5">
        {/* user */}
        <div className="flex items-center gap-2.5 md:gap-5">
          <Avatar className="w-8 md:w-12.5 h-8 md:h-12.5">
            <AvatarImage src={post.user.img} />
            <AvatarFallback className="w-8 md:w-12.5 h-8 md:h-12.5">
              {post.user.initials}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="font-medium text-sm md:text-base leading-5.5 md:leading-6 text-neutral-900">
              {post.user.name}
            </h3>
            <p className="font-normal md:font-medium text-xs leading-4.5 text-neutral-900/60">
              {post.postTimeInfo}
            </p>
          </div>

          <button className="ml-auto px-1">
            <IconDots />
          </button>
        </div>

        {/* contents */}
        {post.contents.text ? (
          <p className="text-sm leading-5.5 text-neutral-900">
            {post.contents.text}
          </p>
        ) : null}

        {/* images */}
        {imagesCount == 1 ? (
          <Avatar className="w-full h-46 md:h-68 rounded-xl">
            <AvatarImage src={images[0]} className="object-cover" />
            <AvatarFallback className="w-full h-46 md:h-68 rounded-xl">
              SA
            </AvatarFallback>
          </Avatar>
        ) : imagesCount == 3 ? (
          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-3 h-46 md:h-68">
            {images.map((img, i) => (
              <Avatar
                key={i}
                className={cn("w-full h-full rounded-xl", {
                  ["row-span-2"]: i == 0,
                })}
              >
                <AvatarImage src={img} className="object-cover" />
                <AvatarFallback className="w-full h-full rounded-xl">
                  {"image: " + (i + 1)}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        ) : null}

        {/* stats */}
        <div className="flex items-center gap-3.5 md:gap-4.5 text-xs md:text-sm leading-4.5 md:leading-5.5 text-neutral-900/60">
          <UsersGroup
            count={post.stats.likedBy}
            className="mr-auto"
            classNameSize="w-4.5 md:w-5.5 h-4.5 md:h-5.5"
          />

          <p>{post.stats.comments} Comments</p>
          <p>{post.stats.shares} Shares</p>
        </div>

        {/* actions */}
        <div className="flex items-center justify-between gap-3.5 font-medium text-sm md:text-xs leading-5.5 md:leading-4.5 text-neutral-900 py-2.5 border-y border-neutral-900/20">
          <button
            type="button"
            className="flex items-center gap-1.5 md:gap-2.5 hover:text-primary [&>svg]:fill-neutral-900 [&>svg]:hover:fill-primary"
          >
            {post.isLiked ? <IconLiked /> : <IconLike />}
            <span>Like</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 md:gap-2.5 hover:text-primary [&>svg]:fill-neutral-900 [&>svg]:hover:fill-primary"
          >
            <IconComments />
            <span>Comments</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 md:gap-2.5 hover:text-primary [&>svg]:fill-neutral-900 [&>svg]:hover:fill-primary"
          >
            <IconShare />
            <span>Share</span>
          </button>
        </div>

        {/* form */}
        <div className="flex gap-2.5">
          <Avatar className="w-8 md:w-9.5 h-8 md:h-9.5">
            <AvatarImage
              src={"https://randomuser.me/api/portraits/men/1.jpg"}
            />
            <AvatarFallback className="w-8 md:w-9.5 h-8 md:h-9.5">
              SA
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 flex items-center gap-4 md:gap-2.5 px-2.5 rounded-md md:rounded-10 bg-neutral-100 border border-neutral-100">
            <Input
              placeholder="Write a comment..."
              className="flex-1 h-8 md:h-9 px-0 py-0 border-0 text-sm leading-4.5 font-normal text-neutral-900 ring-offset-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 rounded-none bg-transparent"
            />

            <button type="button">
              <IconGif />
            </button>

            <button type="button">
              <IconPhoto />
            </button>

            <button type="button">
              <IconUser />
            </button>
          </div>

          <button
            className="px-2.5 md:px-3 py-2 rounded-md bg-primary/20 grid place-items-center"
            aria-label="submit"
          >
            <IconSubmit />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

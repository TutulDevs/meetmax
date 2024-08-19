import { FeedBirthdays } from "@/components/feed_cards/FeedBirthdays.component";
import { FeedItem } from "@/components/feed_cards/FeedItem.component";
import { FeedPostCreate } from "@/components/feed_cards/FeedPostCreate.component";
import { FeedRecentEvents } from "@/components/feed_cards/FeedRecentEvents.component";
import { FeedYouMightLike } from "@/components/feed_cards/FeedYouMightLike.component";
import { FriendsListAll } from "@/components/friends/FriendsListAll.component";
import { FriendsRecents } from "@/components/friends/FriendsRecents.component";
import { FeedHeader } from "@/components/headers/FeedHeader.component";
import { NavigationMenus } from "@/components/navigation/NavigationMenus.component";
import { posts } from "@/mock/posts";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        {/* header */}
        <FeedHeader />

        {/* menu */}
        <NavigationMenus />

        {/* main */}
        <main className="mt-19 md:ml-60 mb-14 md:mb-0 flex flex-col md:flex-row gap-2 my-2">
          <FriendsRecents className="md:hidden px-5 py-3.5" />

          {/* feed */}
          <div className="flex-1 flex gap-7.5 md:p-7.5 rounded-t-10 bg-neutral">
            {/* main feed */}
            <div className="flex-1 space-y-2 md:space-y-7.5 mt-2 md:mt-0">
              <FeedPostCreate />

              <FeedItem post={posts[0]} />

              <FeedRecentEvents className="md:hidden !rounded-none" />

              <FeedItem post={posts[1]} />

              <FeedBirthdays className="md:hidden !rounded-none" />
            </div>

            {/* cards */}
            <div className="w-72 max-w-72 space-y-7.5 hidden xl:block">
              <FeedYouMightLike />
              <FeedRecentEvents />
              <FeedBirthdays />
            </div>
          </div>

          {/* right side */}
          <div className="hidden lg:block w-79 px-5 ">
            <FriendsListAll />
          </div>
        </main>
      </div>
    </>
  );
}

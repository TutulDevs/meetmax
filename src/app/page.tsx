import { FeedBirthdays } from "@/components/feed_cards/FeedBirthdays.component";
import { FeedRecentEvents } from "@/components/feed_cards/FeedRecentEvents.component";
import { FeedYouMightLike } from "@/components/feed_cards/FeedYouMightLike.component";
import { FriendsListAll } from "@/components/friends/FriendsListAll.component";
import { FriendsRecents } from "@/components/friends/FriendsRecents.component";
import { FeedHeader } from "@/components/headers/FeedHeader.component";
import { NavigationMenus } from "@/components/navigation/NavigationMenus.component";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        {/* header */}
        <FeedHeader />

        {/* menu */}
        <NavigationMenus />

        {/* main */}
        <main className="mt-19 md:ml-60 flex flex-col md:flex-row gap-2 my-2">
          <FriendsRecents className="md:hidden px-5 py-3.5" />

          {/* feed */}
          <div className="flex-1 flex gap-7.5 p-7.5 rounded-t-10 bg-neutral">
            {/* main feed */}
            <div className="border flex-1">main feed</div>

            {/* cards */}
            <div className="w-[288px] max-w-[288px] space-y-7.5 hidden xl:block">
              <FeedYouMightLike />
              <FeedRecentEvents />
              <FeedBirthdays />
            </div>
          </div>

          {/* right side */}
          <div className="hidden lg:block w-[310px] px-5 ">
            <FriendsListAll />
          </div>
        </main>
      </div>
    </>
  );
}

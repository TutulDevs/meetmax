import { FriendsListAll } from "@/components/friends/FriendsListAll.component";
import { FriendsRecents } from "@/components/friends/FriendsRecents.component";
import { FeedHeader } from "@/components/headers/FeedHeader.component";
import { NavigationMenus } from "@/components/navigation/NavigationMenus.component";

export default function Home() {
  return (
    <>
      {/* header */}
      <FeedHeader />

      {/* menu */}
      <NavigationMenus />

      <main className="mt-[78px] md:ml-60 flex flex-col md:flex-row gap-2 my-2">
        <FriendsRecents className="md:hidden px-5 py-3.5 bg-white" />

        {/* feed */}
        <div className="flex-1 p-[30px] rounded-10 bg-neutral-300">
          hello : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque, illo?
        </div>

        {/* right side */}
        <div className="hidden lg:block w-[310px] px-5">
          <FriendsListAll />
        </div>
      </main>
    </>
  );
}

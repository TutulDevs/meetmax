import { FeedHeader } from "@/components/headers/FeedHeader.component";
import { NavigationMenus } from "@/components/navigation/NavigationMenus.component";

export default function Home() {
  return (
    <>
      <FeedHeader />

      <main>
        {/* menu */}
        <NavigationMenus />

        {/* feed */}

        {/* friends */}
      </main>
    </>
  );
}

import { friendsListAll } from "@/mock/friends";
import { IconSearch } from "../icons";
import { Input } from "../ui/input";
import { FriendsRecents } from "./FriendsRecents.component";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const FriendsListAll = () => {
  return (
    <>
      <div className="space-y-7.5">
        {/* search */}
        <div className="flex items-center gap-2.5 px-5 border border-neutral-900/40 rounded-10">
          <IconSearch className="w-4 h-4" />

          <Input
            placeholder="Search Friends!"
            className="h-10 px-0 py-0 rounded-[inherit] bg-transparent font-normal text-sm leading-5.5 text-neutral-900 border-0 ring-offset-transparent placeholder:text-neutral-900/60 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          />
        </div>

        {/* recents */}
        <FriendsRecents />

        {/* all header */}
        <div className="flex items-center justify-between gap-2 font-bold leading-6 text-neutral-900">
          <label className="">Friends</label>

          <button>
            <svg
              width="16"
              height="4"
              viewBox="0 0 16 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                fill="white"
              />
              <path
                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                fill="#4E5D78"
              />
            </svg>
          </button>
        </div>

        {/* all list */}
        {friendsListAll.map((fr) => (
          <div key={fr.name} className="flex items-center gap-4.5">
            <Avatar>
              <AvatarImage
                src={`https://randomuser.me/api/portraits/men/${fr.img}.jpg`}
              />
              <AvatarFallback>{fr.name[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>

            <div className="flex-1 font-medium leading-6 text-neutral-900">
              {fr.name}
            </div>

            <div className="text-right ml-auto font-medium text-xs leading-4.5 text-neutral-900/60">
              {typeof fr.isActive == "string" ? (
                fr.isActive
              ) : (
                <div className="w-2 h-2 rounded-full bg-success" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

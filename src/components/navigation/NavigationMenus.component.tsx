"use client";

import Link from "next/link";
import {
  IconBell,
  IconCog,
  IconGlobe,
  IconGrid,
  IconLogout,
  IconMessage,
  IconPeople,
  IconUserOne,
} from "../icons";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { useToast } from "../ui/use-toast";

export const NavigationMenus = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();

  const btnClassNames = cn(
    "relative flex flex-col md:flex-row items-center text-center md:text-left rounded-10 px-2 md:px-5 pt-2 md:pt-3 pb-1 md:pb-3 font-medium text-2xs md:text-base leading-4 md:leading-6 text-neutral-900 md:[&>svg]:mr-5 [&>svg]:fill-neutral-900 md:hover:bg-neutral-300 duration-300"
  );

  const handleLogout = () => {
    deleteCookie("token");
    router.push("/signin");
    router.refresh();
    toast({
      title: "Logged out.",
      description: "Please sign in again.",
      variant: "success",
    });
  };

  return (
    <aside className="fixed md:top-[78px] bottom-0 md:bottom-[unset] left-0 w-full md:w-60 h-auto md:h-screen md:overflow-y-auto px-5 md:py-2.5 bg-white md:bg-transparent">
      <div className="flex flex-row md:flex-col justify-center gap-2.5">
        {menus.map((menu, i) => {
          return (
            <Link
              key={menu.title}
              href={menu.href}
              className={cn(
                btnClassNames,
                menu?.cls,
                "group",
                menu.href == pathname &&
                  "md:bg-neutral-900 md:hover:bg-neutral-900 md:text-white md:[&>svg]:fill-white"
              )}
            >
              {menu.icon}
              <span>{menu.title}</span>

              {!menu?.count ? null : (
                <span className="absolute md:static top-1  w-3.5 md:w-4 md:h-[18px] ml-3.5 rounded-full bg-danger text-white font-light text-2xs md:text-sm grid place-items-center ">
                  {menu.count}
                </span>
              )}

              <div
                className={cn(
                  "block md:hidden w-1/2 h-[3px] rounded-md bg-transparent group-hover:bg-neutral-900 group-hover:w-full duration-300",
                  menu.href == pathname && "bg-neutral-900 w-full"
                )}
              />
            </Link>
          );
        })}

        <button
          type="button"
          className={cn(btnClassNames, "hidden md:flex")}
          onClick={handleLogout}
        >
          <IconLogout />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

const menus = [
  { href: "/", title: "Feed", icon: <IconGrid /> },
  { href: "/community", title: "My community", icon: <IconPeople /> },
  {
    href: "/inbox",
    title: "Messages",
    icon: <IconMessage />,
    count: null,
    cls: "hidden md:flex",
  },
  {
    href: "/notifications",
    title: "Notification",
    icon: <IconBell />,
    count: 2,
  },
  { href: "/explore", title: "Explore", icon: <IconGlobe /> },
  {
    href: "/profile",
    title: "Profile",
    icon: <IconUserOne />,
    cls: "hidden md:flex",
  },
  { href: "/settings", title: "Settings", icon: <IconCog /> },
];

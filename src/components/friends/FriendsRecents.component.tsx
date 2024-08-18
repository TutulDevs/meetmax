import { friendsRecentsList } from "@/mock/friends";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export const FriendsRecents: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <ScrollArea className={cn("pb-2 relative", className)}>
      <div className="flex justify-center md:justify-start gap-5">
        {friendsRecentsList.map((fr) => (
          <div
            key={fr.name}
            className="flex flex-col items-center justify-center gap-4.5 md:gap-6 text-center relative group"
          >
            <Avatar className="flex-1 w-12.5 h-12.5 border-2 border-primary">
              <AvatarImage src={fr.img} />
              <AvatarFallback className="w-12.5 h-12.5">
                {fr.name[0]?.toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <span className="font-medium text-sm leading-5.5 text-neutral-900">
              {fr.name}
            </span>

            {/* add btn */}
            <button
              type="button"
              className={cn(
                "absolute top-10.5 left-1/2 -translate-x-1/2 w-4 h-4 grid place-items-center bg-white rounded-full opacity-0 group-hover:opacity-100 duration-300"
              )}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.28571 4.28571V0H5.71429V4.28571H10V5.71429H5.71429V10H4.28571V5.71429H0V4.28571H4.28571Z"
                  fill="white"
                />
                <path
                  d="M4.28571 4.28571V0H5.71429V4.28571H10V5.71429H5.71429V10H4.28571V5.71429H0V4.28571H4.28571Z"
                  fill="#4E5D78"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* next arrow */}
      <button
        type="button"
        className="absolute top-1/4 right-0 -translate-y-1/2 bg-white rounded-full w-4 h-4 hidden md:grid place-items-center"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5.00001C0 4.69319 0.248731 4.44446 0.555556 4.44446H9.44444C9.75127 4.44446 10 4.69319 10 5.00001C10 5.30684 9.75127 5.55557 9.44444 5.55557H0.555556C0.248731 5.55557 0 5.30684 0 5.00001Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 5.00001C0 4.69319 0.248731 4.44446 0.555556 4.44446H9.44444C9.75127 4.44446 10 4.69319 10 5.00001C10 5.30684 9.75127 5.55557 9.44444 5.55557H0.555556C0.248731 5.55557 0 5.30684 0 5.00001Z"
            fill="#4E5D78"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.60718 0.162718C4.82413 -0.0542395 5.17589 -0.0542395 5.39285 0.162718L9.83729 4.60716C10.0543 4.82412 10.0543 5.17588 9.83729 5.39284L5.39285 9.83728C5.17589 10.0542 4.82413 10.0542 4.60718 9.83728C4.39022 9.62033 4.39022 9.26857 4.60718 9.05161L8.65878 5L4.60718 0.948393C4.39022 0.731435 4.39022 0.379676 4.60718 0.162718Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.60718 0.162718C4.82413 -0.0542395 5.17589 -0.0542395 5.39285 0.162718L9.83729 4.60716C10.0543 4.82412 10.0543 5.17588 9.83729 5.39284L5.39285 9.83728C5.17589 10.0542 4.82413 10.0542 4.60718 9.83728C4.39022 9.62033 4.39022 9.26857 4.60718 9.05161L8.65878 5L4.60718 0.948393C4.39022 0.731435 4.39022 0.379676 4.60718 0.162718Z"
            fill="#4E5D78"
          />
        </svg>
      </button>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

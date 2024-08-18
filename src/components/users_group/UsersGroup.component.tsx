import { friendsInRecentEvents } from "@/mock/friends";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";

export const UsersGroup: React.FC<{
  count: number;
  className?: string;
  classNameSize?: string;
}> = ({ count, className, classNameSize }) => {
  return (
    <div
      className={cn("flex items-center -space-x-1 overflow-hidden", className)}
    >
      {friendsInRecentEvents.map((x) => (
        <Avatar key={x.name} className={cn("w-5.5 h-5.5", classNameSize)}>
          <AvatarImage src={x.img} />
          <AvatarFallback className={cn("w-5.5 h-5.5", classNameSize)}>
            {x.name[0]}
          </AvatarFallback>
        </Avatar>
      ))}

      <Avatar className={cn("w-5.5 h-5.5", classNameSize)}>
        <AvatarImage src={""} />
        <AvatarFallback
          className={cn(
            "w-5.5 h-5.5 bg-neutral-900 text-white font-medium text-xs leading-4.5",
            classNameSize
          )}
        >
          {`+${count}`}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

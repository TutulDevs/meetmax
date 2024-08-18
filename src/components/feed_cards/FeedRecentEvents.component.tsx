import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IconBook, IconCamera, IconDots } from "../icons";
import { friendsInRecentEvents } from "@/mock/friends";

export const FeedRecentEvents = () => {
  return (
    <Card className="rounded-2xl flex-1">
      <CardHeader className="flex-row justify-between items-center px-4.5 py-3 border-b border-neutral-900/20">
        <CardTitle className="font-bold text-base leading-6 text-neutral-900">
          Recent Events
        </CardTitle>

        <button aria-label="more options" className="">
          <IconDots />
        </button>
      </CardHeader>

      <CardContent className="!px-4.5 !py-5 space-y-4.5">
        <div className="bg-neutral font-medium text-neutral-900 p-2.5 space-y-2.5 rounded-10">
          <div className="flex gap-5">
            <div className="w-10 h-10 rounded-md bg-success-light-100 grid place-items-center">
              <IconBook />
            </div>

            <div className="flex-1">
              <h3 className="leading-6">Graduation Ceremony</h3>
              <p className="text-xs leading-4.5 text-neutral-900/60">
                The graduation ceremony is also sometimes called...
              </p>
            </div>
          </div>

          <hr className="h-px bg-neutral-900/20" />

          <div className="flex justify-between">
            <span className="text-xs leading-4.5">8 seen</span>
            <UsersGroup count={5} />
          </div>
        </div>

        <div className="bg-neutral font-medium text-neutral-900 p-2.5 space-y-2.5 rounded-10">
          <div className="flex gap-5">
            <div className="w-10 h-10 rounded-md bg-danger-light-100 grid place-items-center">
              <IconCamera />
            </div>

            <div className="flex-1">
              <h3 className="leading-6">Photography Ideas</h3>
              <p className="text-xs leading-4.5 text-neutral-900/60">
                Reflections. Reflections work because they can create...
              </p>
            </div>
          </div>

          <hr className="h-px bg-neutral-900/20" />

          <div className="flex justify-between">
            <span className="text-xs leading-4.5">11 seen</span>
            <UsersGroup count={8} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const UsersGroup: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="flex items-center -space-x-1 overflow-hidden">
      {friendsInRecentEvents.map((x) => (
        <Avatar key={x.name} className="w-5.5 h-5.5">
          <AvatarImage src={x.img} />
          <AvatarFallback className="w-5.5 h-5.5">{x.name[0]}</AvatarFallback>
        </Avatar>
      ))}

      <Avatar className="w-5.5 h-5.5">
        <AvatarImage src={""} />
        <AvatarFallback className="w-5.5 h-5.5 bg-neutral-900 text-white font-medium text-xs leading-4.5">
          {`+${count}`}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

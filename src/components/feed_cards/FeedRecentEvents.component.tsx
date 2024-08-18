import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { IconBook, IconCamera, IconDots } from "../icons";
import { UsersGroup } from "../users_group/UsersGroup.component";
import { cn } from "@/lib/utils";

export const FeedRecentEvents: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <Card className={cn("rounded-2xl flex-1", className)}>
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

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AuthHeader = () => {
  return (
    <header className="px-8 py-6 flex justify-between items-center">
      {/* logo */}
      <div className="flex items-center gap-2.5">
        <Image
          src="/logo.svg"
          alt="logo"
          width={26}
          height={26}
          className="w-4 sm:w-auto h-4 sm:h-auto"
        />

        <span className="font-bold text-xs sm:text-lg text-neutral-900 leading-[18px] sm:leading-7">
          {"Meetmax"}
        </span>
      </div>

      {/* langs */}
      <div>
        <Select defaultValue="en">
          <SelectTrigger className="px-2.5 sm:px-5 py-1 sm:py-2 shadow h-6 sm:h-[38px] font-medium text-neutral-900 text-[10px] sm:text-sm leading-4 sm:leading-[22px] [&>svg]:w-3 sm:[&>svg]:w-4 gap-2 sm:gap-5">
            <SelectValue placeholder="select" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="en">{"English (UK)"}</SelectItem>
            <SelectItem value="fr">{"French (FR)"}</SelectItem>
            <SelectItem value="es">{"Spanish (ES)"}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

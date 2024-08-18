import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-13 w-full rounded-10 border border-[#f3f3f3] bg-white px-5 py-3 font-medium leading-6 ring-offset-white placeholder:text-[#B0B7C3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

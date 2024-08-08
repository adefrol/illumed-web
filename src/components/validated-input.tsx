"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error: FieldError | undefined;
}

export const InputValidated = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, error, ...props }, ref) => {
    return (
      <div className="">
        <div
          className={cn("", {
            "border-red-400 border-2 rounded-2xl": error,
            "gradient-border": !error,
          })}
        >
          <input
            {...props}
            ref={ref}
            className={cn(
              "p-4 relative z-[1] outline-none bg-black rounded-2xl w-full h-full border-4 border-solid border-transparent",
              className
            )}
            placeholder={placeholder}
          />
        </div>
        {/* {error && <p className="text-red-500">{error.message}</p>} */}
      </div>
    );
  }
);

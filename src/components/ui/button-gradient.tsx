"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";

type ButtonType = "fill" | "outline";

interface IProps {
  children: React.ReactNode;
  type?: ButtonType;
  className?: string;
  buttonClassName?: string;
}

export const ButtonGradient: FC<IProps> = ({
  children,
  className,
  buttonClassName,
  type = "fill",
}) => {
  return (
    <div
      className={cn("cursor-pointer", className, {
        "gradient-border-white-to-main": type === "fill",
        "gradient-border-main-color": type === "outline",
      })}
    >
      <button
        className={cn("text-lg rounded-xl", buttonClassName, {
          "bg-primary text-black": type === "fill",
          "bg-black text-white": type === "outline",
        })}
      >
        {children}
      </button>
    </div>
  );
};

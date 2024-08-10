"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  title: string;
  className?: string;
}

export const Title: FC<IProps> = ({ title, className }) => {
  return (
    <div className="">
      <h2
        className={cn(
          "text-center uppercase text-[calc(32px+40*(100vw-320px)/1920)] font-medium",
          className
        )}
      >
        {title}
      </h2>
    </div>
  );
};

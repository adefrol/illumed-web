"use client";
import { cn } from "@/lib/utils";
import { Varela_Round } from "next/font/google";
import { FC } from "react";

const jost = Varela_Round({ subsets: ["latin"], weight: "400" });

interface IProps {
  fontSize?: string;
}

export const Logo: FC<IProps> = ({ fontSize }) => {
  return (
    <div className="relative h-full ">
      <div
        className="flex items-center  h-full" /* style={{ translateX, translateY, fontSize: fontSize }} */
      >
        <p
          className={cn(fontSize, jost.className, {
            "text-xl": !fontSize,
          })}
        >
          illumed<span className="text-violet-400">Web</span>
        </p>
      </div>
    </div>
  );
};

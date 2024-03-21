import { cn } from "@/lib/utils";
import { Jost } from "next/font/google";
import { FC } from "react";

const jost = Jost({ subsets: ["latin"] });

export const Logo: FC = () => {
  return (
    <div className="">
      <p className={cn("text-2xl", jost.className)}>
        illumed<span className="text-violet-400">Web</span>
      </p>
    </div>
  );
};

"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { reviews } from "@/lib/reviews";
import { FC } from "react";

export const ReviewCard: FC = () => {
  return (
    <div className="">
      <div className=" rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
      </div>
    </div>
  );
};

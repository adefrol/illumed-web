"use client";

import { navbar } from "@/constants/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";

export const Header: FC = () => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border border-white/10 mx-[65px] mt-[20px] rounded-[20px]"
      )}
    >
      <div className="px-[40px]">
        <div className="py-5 flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-[55px]">
            {navbar.map((nav) => (
              <div key={nav.id} className="">
                <Link
                  href={nav.href}
                  className="text-white/50 hover:text-white transition duration-300"
                >
                  {nav.title}
                </Link>
              </div>
            ))}
          </div>

          <Button className="text-white/80 hover:text-white hover:shadow-[0_0_10px_2px_#A78BFA] transition duration-300">
            Связаться с нами
          </Button>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

"use client";

import { FC } from "react";
import { Logo } from "./ui/logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { navbar } from "@/constants/navbar";

export const Header: FC = () => {
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 bg-[#080808]")}>
      <div className="max-w-[1200px] mx-auto ">
        <div className="py-5 flex items-center justify-between">
          <Logo />

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

          <Button className="text-white/80 hover:text-white hover:shadow-[0_0_10px_2px_#A78BFA] transition duration-300">
            Связаться с нами
          </Button>
        </div>
      </div>
      <hr />
    </div>
  );
};

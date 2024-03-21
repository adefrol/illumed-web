"use client";

import { FC } from "react";
import { Logo } from "./ui/logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navbar = [
  {
    id: 1,
    title: "Проекты",
    href: "/",
  },

  {
    id: 2,
    title: "Company",
    href: "/",
  },

  {
    id: 3,
    title: "Solutions",
    href: "/",
  },

  {
    id: 4,
    title: "Resources",
    href: "/",
  },

  {
    id: 5,
    title: "Enterprise",
    href: "/",
  },

  {
    id: 6,
    title: "Pricing",
    href: "/",
  },
];

const headerTools = [
  {
    id: 1,
    title: "Log in",
    href: "/",
  },

  {
    id: 2,
    title: "Contact Sales",
    href: "/",
  },
];

export const Header: FC = () => {
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 bg-[#080808]")}>
      <div className="max-w-[1200px] mx-auto">
        <div className="py-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Logo />

            <div className="flex items-center gap-5">
              {navbar.map((item) => (
                <div key={item.id} className="">
                  <Link href={item.href}>{item.title}</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            {headerTools.map((item) => (
              <div key={item.id} className="">
                <Link href={item.href}>{item.title}</Link>
              </div>
            ))}

            <Button className="">Get started</Button>
          </div>
        </div>
      </div>
      <hr />
      {/*<SparklesCore*/}
      {/*  background="transparent"*/}
      {/*  minSize={0.4}*/}
      {/*  maxSize={1}*/}
      {/*  particleDensity={1200}*/}
      {/*  className="w-full h-full"*/}
      {/*  particleColor="#FFFFFF"*/}
      {/*/>*/}
    </div>
  );
};

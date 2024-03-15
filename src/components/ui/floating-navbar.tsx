"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { INavbar } from "@/constants/navbar";
import { usePathname } from "next/navigation";
import { useQueryState } from "nuqs";

interface IProps {
  navItems: INavbar[];
  className?: string;
}

export const FloatingNav = ({ navItems, className }: IProps) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  const pathname = usePathname();
  const [blogParams] = useQueryState("blog");
  const screenWidth = window.innerWidth;

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (
        (screenWidth < 768 && scrollYProgress.get() < 0.12) ||
        (screenWidth > 768 && scrollYProgress.get() < 0.2)
      ) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black dark:bg-opacity-10 dark:backdrop-blur-md bg-white bg-opacity-10 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 px-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx: number) => (
          <Link
            key={navItem.id}
            href={{
              pathname: navItem.href,
              query: { blog: blogParams },
            }}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-black/50 dark:text-white/50 transition duration-300 dark:hover:text-white/50 hover:text-black dark:hover:text-white",
              {
                "text-black dark:text-white": navItem.href === pathname,
              }
            )}
          >
            <div className="relative">
              <span className="sm:block text-sm">{navItem.title}</span>
              <span
                className={cn({
                  "absolute inset-x-0 w-2/2 mx-auto -bottom-px bg-gradient-to-r from-transparent dark:via-[#b677fc] via-[#f292ff] to-transparent  h-px":
                    navItem.href === pathname,
                })}
              />
            </div>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

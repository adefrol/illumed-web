"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { IUser } from "@/interfaces/user.interface";
import { cn } from "@/lib/utils";
import { useSwitchUser } from "@/context/SwitchUserContext";

interface IProps {
  item: IUser;
  // focus: number;
  // setFocus: React.Dispatch<React.SetStateAction<number>>;
}

export const AnimatedTooltip = ({ item }: IProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const { user: currentUser, switchUser } = useSwitchUser();

  console.log(focus);

  return (
    <>
      <div
        className="-mr-4  relative group"
        key={item.name}
        onMouseEnter={() => setHoveredIndex(item.id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence mode="wait">
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-white dark:bg-black z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent dark:via-[#7266e2] via-[#f396ff] to-transparent h-px " />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent dark:via-[#7266e2] via-[#f396ff] to-transparent h-px " />
              <div className="font-bold dark:text-white text-black relative z-30 text-base">
                {item.name}
              </div>
              <div className="dark:text-white text-black text-xs">
                {item.position}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Image
          onClick={() => switchUser(item.id)}
          onMouseMove={handleMouseMove}
          height={100}
          width={100}
          src={item.img}
          alt={item.name}
          className={cn(
            "object-cover border-white cursor-pointer !m-0 !p-0 object-top rounded-full h-14 w-14 dark:border-[3px] border-[3px] group-hover:scale-105 group-hover:z-30  relative transition duration-500",
            {
              "dark:border-[#7266e2] border-[#ecc7f1]":
                currentUser?.id === item.id,
            }
          )}
        />
      </div>
    </>
  );
};

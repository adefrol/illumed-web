"use client";

import { textContent } from "@/constants/about-us";
import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AboutUsSection: FC = () => {
  const [activeTitle, setActiveTitle] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % textContent.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTitle]);

  return (
    <div className="">
      <p className="uppercase text-[52px]">наши качества</p>

      <div className="flex items-center justify-between">
        <div className="max-w-[445px] flex flex-wrap">
          {textContent.map((text, idx) => (
            <div key={text.id} className="">
              <p
                onClick={() => setActiveTitle(idx)}
                className={cn(
                  "text-[52px] uppercase tracking-tighter text-[#6F6F6F] cursor-pointer hover:text-white transition duration-300 select-none",
                  {
                    "text-white drop-shadow-[0_0_4px_#ccc]":
                      activeTitle === idx,
                  }
                )}
              >
                {text.title}.
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-[800px] text-right">
          <motion.p
            key={textContent[activeTitle].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            exit={{ opacity: 0 }}
            className={cn(
              "text-[36px] bg-gradient-to-r from-[#fff] to-[#3C3C3C] bg-clip-text text-transparent font-extralight"
            )}
          >
            {textContent[activeTitle].text}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

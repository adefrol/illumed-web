"use client";

import { textContent } from "@/constants/about-us";
import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Title } from "@/components/title";

export const AboutUsSection: FC = () => {
  const [activeTitle, setActiveTitle] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % textContent.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTitle]);

  return (
    <div className="h-[75vh] flex flex-col justify-center">
      <Title title="наши качества" />

      <div className="flex lg:flex-row flex-col lg:my-10 items-center lg:justify-between justify-center">
        <div className="lg:max-w-[445px] w-full lg:text-left text-center">
          {textContent.map((text, idx) => (
            <span
              key={text.id}
              onClick={() => setActiveTitle(idx)}
              className={cn(
                "text-[calc(18px+24*(100vw-320px)/1920)] uppercase font-medium tracking-tighter text-[#6F6F6F] cursor-pointer hover:text-white transition duration-300 select-none",
                {
                  "text-white drop-shadow-[0_0_4px_#ccc]": activeTitle === idx,
                }
              )}
            >
              {text.title}.{" "}
            </span>
          ))}
        </div>

        <div className="lg:max-w-[800px] lg:text-right lg:my-0 my-10 text-justify">
          <motion.p
            key={textContent[activeTitle].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            exit={{ opacity: 0 }}
            className={cn(
              "text-[calc(18px+8*(100vw-320px)/1920)] bg-gradient-to-r from-[#fff] to-[#7d7d7d] bg-clip-text text-transparent font-extralight"
            )}
          >
            {textContent[activeTitle].text}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

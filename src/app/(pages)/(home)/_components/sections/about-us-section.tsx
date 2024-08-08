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
        <div id="about" className="h-[75vh] flex flex-col justify-center">
            <p className="uppercase max-2xl:text-[42px] text-[36px] font-medium">наши качества</p>
            <div className="flex items-center justify-between">
                <div className="max-w-[445px] w-full">
                    {textContent.map((text, idx) => (
                        <span
                            key={text.id}
                            onClick={() => setActiveTitle(idx)}
                            className={cn(
                                "max-2xl:text-[42px] text-[36px] uppercase font-medium tracking-tighter text-[#6F6F6F] cursor-pointer hover:text-white transition duration-300 select-none",
                                {
                                    "text-white drop-shadow-[0_0_4px_#ccc]":
                                        activeTitle === idx,
                                }
                            )}
                        >
                            {text.title}.{" "}
                        </span>
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
                            "text-[26px] bg-gradient-to-r from-[#fff] to-[#7d7d7d] bg-clip-text text-transparent font-extralight"
                        )}
                    >
                        {textContent[activeTitle].text}
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

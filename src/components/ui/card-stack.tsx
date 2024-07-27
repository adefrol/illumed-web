"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IProjects } from "@/constants/projects";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IProps {
  items: IProjects[];
  activeIndex: number;
  widths: number[];
}

export const CardStack: FC<IProps> = ({ items, activeIndex, widths }) => {
  const CARD_OFFSET = 10;
  const SCALE_FACTOR = 0.06;
  const [cards, setCards] = useState<IProjects[]>(items);

  useEffect(() => {
    const updatedWidths = [...widths];
    updatedWidths[activeIndex] = updatedWidths[activeIndex] + 10;

    if (updatedWidths[activeIndex] === 250) {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        newCards.push(newCards.shift()!);
        return newCards;
      });
    }
  }, [activeIndex, widths]);

  return (
    <div className="relative h-[700px] w-[700px] md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className={cn(
              "absolute bg-transparent h-[400px] w-[700px] p-4 flex flex-col justify-between"
            )}
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <Image
              src={card.img}
              alt={card.name}
              width={1000}
              height={1000}
              className="w-[700px] min-h-[400px] rounded-3xl hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

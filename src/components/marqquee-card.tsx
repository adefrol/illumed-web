"use client";

import { ITechnology } from "@/interfaces/technology.interface";
import { FC } from "react";
import Marquee from "react-fast-marquee";

interface IProps {
  technologies: ITechnology[];
}

const MarqueeItem: FC<{ name: string }> = ({ name }) => {
  return (
    <p className="text-6xl font-bold text-gray-700 uppercase px-20 pt-20">
      {name}
    </p>
  );
};

export const MarqqueeCard: FC<IProps> = ({ technologies }) => {
  return (
    <div className="">
      <Marquee speed={140} autoFill className="no-scroll">
        {technologies.map((technology) => (
          <MarqueeItem key={technology.id} name={technology.name} />
        ))}
      </Marquee>
    </div>
  );
};

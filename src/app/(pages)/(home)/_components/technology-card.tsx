"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ITechnology } from "@/interfaces/technology.interface";
import Image from "next/image";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface IProps {
  technologies: ITechnology[];
}

export const TechnologyCard: FC<IProps> = ({ technologies }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      autoplay={true}
      loop={true}
      parallax
      centeredSlidesBounds
    >
      {technologies.map((technology) => (
        <SwiperSlide key={technology.id}>
          <div className="">
            <Image
              src={technology.img}
              alt={technology.name}
              width={50}
              height={50}
              className="w-fit h-fit mx-auto object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

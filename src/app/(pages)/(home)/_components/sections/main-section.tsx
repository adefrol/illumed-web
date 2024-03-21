"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { ArrowDown, Link } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

export const MainSection: FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-start justify-center">
        <p className="max-w-[1000px] font-normal text-center text-[4vw] uppercase leading-tight filter drop-shadow-md text-white">
          <span className="text-violet-400">Студия разработки</span> сайтов и
          мобильных приложений
        </p>
      </div>

      {/* <ContactUs /> */}
    </div>
  );
};

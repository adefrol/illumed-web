"use client";
import { ButtonGradient } from "@/components/ui/button-gradient";
import Link from "next/link";
import { FC } from "react";

export const MainSection: FC = () => {
  return (
    <div className="max-w-[1200px] h-[65vh] mx-auto flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="font-medium max-2xl:text-6xl text-5xl text-primary text-center">
          СТУДИЯ РАЗРАБОТКИ
        </p>
        <p className="font-medium max-2xl:text-6xl text-5xl text-center">
          САЙТОВ И МОБИЛЬНЫХ ПРИЛОЖЕНИЙ
        </p>
      </div>
      <div className="flex gap-5 items-center justify-center py-10">
        <ButtonGradient
          buttonClassName="p-3 px-16"
          className="hover:shadow-[#2b2639] shadow-xl rounded-2xl transition duration-300 ease-in-out"
        >
          <Link href={"#projects"}>Проекты</Link>
        </ButtonGradient>

        <ButtonGradient
          buttonClassName="p-3 px-16"
          className="hover:shadow-[#2b2639] shadow-xl rounded-2xl transition duration-300 ease-in-out"
          buttonType="outline"
        >
          Связаться с нами
        </ButtonGradient>
      </div>
    </div>
  );
};

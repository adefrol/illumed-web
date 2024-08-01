"use client";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { FC } from "react";

export const MainSection: FC = () => {
  return (
    <div className="max-w-[1200px] h-[65vh] mx-auto flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="font-medium text-6xl text-primary " >СТУДИЯ РАЗРАБОТКИ</p>
        <p className="font-medium text-6xl">САЙТОВ И МОБИЛЬНЫХ ПРИЛОЖЕНИЙ</p>
      </div>
      <div className="flex gap-5 items-center justify-center py-10">
        <ButtonGradient buttonClassName="p-3 px-16">Проекты</ButtonGradient>

        <ButtonGradient
          buttonClassName="p-3 px-16"
          className="hover:shadow-[#2b2639] shadow-xl rounded-2xl transition duration-300 ease-in-out"
          type="outline"
        >
          Связаться с нами
        </ButtonGradient>
      </div>
    </div>
  );
};

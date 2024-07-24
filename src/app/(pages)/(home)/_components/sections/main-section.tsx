"use client";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { FC } from "react";

export const MainSection: FC = () => {
  return (
    <div className="max-w-[1200px] h-svh mx-auto py-40">
      <div className="flex flex-col items-center justify-center">
        <p className="font-medium text-6xl text-primary">СТУДИЯ РАЗРАБОТКИ</p>
        <p className="font-medium text-6xl">САЙТОВ И МОБИЛЬНЫХ ПРИЛОЖЕНИЙ</p>
      </div>
      <div className="flex gap-5 items-center justify-center py-10">
        <ButtonGradient className="p-3 px-16">Проекты</ButtonGradient>

        <ButtonGradient className="p-3 px-16" type="outline">
          Связаться с нами
        </ButtonGradient>
      </div>
    </div>
  );
};

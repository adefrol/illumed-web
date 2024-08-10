"use client";
import { ButtonGradient } from "@/components/ui/button-gradient";
import Link from "next/link";
import { FC } from "react";

export const MainSection: FC = () => {
  return (
    <div className="h-[65vh] flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="font-medium text-[calc(24px+36*(100vw-320px)/1920)] text-primary text-center">
          СТУДИЯ РАЗРАБОТКИ
        </p>
        <p className="font-medium text-[calc(24px+36*(100vw-320px)/1920)] text-center">
          САЙТОВ И МОБИЛЬНЫХ ПРИЛОЖЕНИЙ
        </p>
      </div>
      <div className="flex gap-5 items-center justify-center py-10">
        <ButtonGradient
          tag="link"
          href="#projects"
          buttonClassName="py-3 lg:px-16 px-4 text-[calc(12px+8*(100vw-320px)/1920)]"
          className="hover:shadow-[#2b2639] shadow-xl rounded-2xl transition duration-300 ease-in-out"
        >
          Проекты
        </ButtonGradient>

        <ButtonGradient
          tag="link"
          href="#contacts"
          buttonClassName="py-3 lg:px-16 px-4 text-[calc(12px+8*(100vw-320px)/1920)]"
          className="hover:shadow-[#2b2639] shadow-xl rounded-2xl transition duration-300 ease-in-out"
          buttonType="outline"
        >
          Связаться с нами
        </ButtonGradient>
      </div>
    </div>
  );
};

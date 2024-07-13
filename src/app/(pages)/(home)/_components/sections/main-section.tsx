"use client";
import { FC } from "react";

export const HeaderSection: FC = () => {
    return (
        <div className="max-w-[1200px] mx-auto py-40">
            <div className="flex flex-col items-center justify-center">
                <p className="text-6xl text-primary">СТУДИЯ РАЗРАБОТКИ</p>
                <p className="text-6xl">САЙТОВ И МОБИЛЬНЫХ ПРИЛОЖЕНИЙ</p>
            </div>
            <div className="flex gap-5 items-center justify-center py-10">
                <div className="gradient-border-white-to-main">
                    <button className="p-3 px-16 rounded-xl bg-primary text-black">
                        Проекты
                    </button>
                </div>
                <div className="gradient-border-main-color">
                    <button className="p-3 px-16 rounded-xl bg-black">
                        Связаться с нами
                    </button>
                </div>
            </div>
        </div>
    );
};

import { PencilRuler } from 'lucide-react'
import React, { FC } from "react";

export const ServiceSection: FC = () => {
    return (
        <div className="max-w-[1500px] mx-auto py-40">
            <div className="text-center flex flex-col gap-5">
                <h2 className="text-center text-7xl font-medium">УСЛУГИ</h2>
                <p className="font-extralight text-3xl w-2/3 mx-auto">
                    Студия illumedWeb полностью реализует современные проекты,
                    используя спектр нескольких необходимых услуг
                </p>
            </div>
            <div className="grid place-items-center grid-cols-3 py-10">
                <div className="gradient-border-service-card group rounded-3xl group-hover:gradient-border-service-card-active w-[90%] transition-all">
                    <div className="w-full h-96 rounded-[30px] bg-gradient-to-br from-black/50 to-gray-50/10 group-hover:from-primary/40 group-hover:to-primary/10 transition-all">
                        <div className="p-6 flex flex-col gap-5">
                            <div className='w-[55px] h-[55px] flex justify-center items-center bg-[#232323]/80 rounded-xl '>
                                <PencilRuler size={35} strokeWidth={1}/>
                            </div>
                            <p className='text-3xl font-medium'><span className='text-primary'>Разработка</span> плана и дизайна</p>
                            <p className='font-extralight text-lg'>Полное информационное заполнение и структурирование сайта/приложения. Разработка современного и эстетичного дизайна... </p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border-service-card rounded-3xl w-[90%]">
                    <div className="w-full h-96 rounded-[30px] bg-gradient-to-br from-black/50 to-gray-50/10"></div>
                </div>
                <div className="gradient-border-service-card rounded-3xl w-[90%]">
                    <div className="w-full h-96 rounded-[30px] bg-gradient-to-br from-black/50 to-gray-50/10"></div>
                </div>
            </div>
        </div>
    );
};

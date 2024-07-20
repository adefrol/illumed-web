import React, { FC } from "react";

export const ProjectSection: FC = () => {
    return (
        <div className="max-w-[1500px] mx-auto py-40">
            <div className="text-center flex justify-between">
                <h2 className="text-center text-7xl font-medium">ПРОЕКТЫ</h2>
                <p className="font-extralight text-3xl text-right w-1/2">
                    Предлагаем вам ознакомиться с готовыми проектами наших
                    клиентов
                </p>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-10">
                    <div className="gradient-border-main-to-dark">
                        <div className="w-[500px] h-[75px] bg-gradient-to-tr from-primary/80 to-primary/40 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

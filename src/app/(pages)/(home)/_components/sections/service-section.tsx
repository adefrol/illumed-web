import { ServiceCardBg } from "@/components/services/service-card-bg";
import { serviceList } from "@/constants/service-list";
import { cn } from "@/lib/utils";
import { ArrowUpRight, icons } from "lucide-react";
import { Varela_Round } from 'next/font/google'
import { FC } from "react";

const jost = Varela_Round({ subsets: ["latin"], weight: '400' });


export const ServiceSection: FC = () => {
    return (
        <div className="max-w-[1500px] mx-auto h-[50vh] flex flex-col justify-center">
            <div className="text-center flex flex-col gap-5">
                <h2 className="text-7xl font-medium">УСЛУГИ</h2>
                <p className="font-extralight text-3xl w-2/3 mx-auto">
                    Студия{" "}
                    <span className={jost.className}>
                        illumed<span className="text-violet-400">Web</span>
                    </span>{" "}
                    полностью реализует современные проекты, используя спектр
                    нескольких необходимых услуг
                </p>
            </div>

            <div className="grid place-items-center grid-cols-3 py-10">
                {serviceList.map((service, idx) => {
                    const Icon = icons[service.icon];

                    return (
                        <ServiceCardBg key={service.id}>
                            <div className="p-6 flex flex-col gap-5">
                                <div className="w-[55px] h-[55px] flex justify-center items-center bg-[#232323]/80 rounded-xl">
                                    <Icon size={35} />
                                </div>
                                <p className={cn("text-3xl font-medium")}>
                                    <span className="text-primary">
                                        {service.titlePink}
                                    </span>{" "}
                                    {service.title}
                                </p>
                                <p className={cn("font-extralight text-lg")}>
                                    {service.description}
                                </p>

                                <div
                                    className={cn("z-20", {
                                        "mt-7": idx === 2,
                                    })}
                                >
                                    <div className="group/btn cursor-pointer max-w-fit float-right flex gap-1 items-center transition duration-300">
                                        <p className="font-extralight text-white/50 group-hover/btn:text-white transition duration-300">
                                            Подробнее
                                        </p>
                                        <ArrowUpRight
                                            size={20}
                                            className="text-white/50 group-hover/btn:-translate-y-1 group-hover/btn:text-white transition duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </ServiceCardBg>
                    );
                })}
            </div>
        </div>
    );
};

"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  service: {
    name: string;
    price: string;
    description: string;
  };

  className: string;
}

const PriceCard: FC<IProps> = ({ service, className }) => {
  return (
    <div className={cn("px-10 py-40 cursor-pointer", className)}>
      <div className="flex flex-col gap-10">
        <p className="text-6xl font-bold">illumed</p>
        <p className="text-3xl font-bold">{service.name}</p>
        <p className="text-3xl font-bold">
          от{" "}
          {parseFloat(service.price).toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}
        </p>
      </div>
    </div>
  );
};

export const PriceSection: FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <p className="text-[4vw] uppercase text-white text-center font-bold">
        цены и услуги
      </p>
      <div className="grid grid-cols-4 gap-10 mt-10">
        <PriceCard
          service={{ name: "Лендинг", price: "20000", description: "" }}
          className="border border-[#89b5f6] rounded-lg
            hover:shadow-[#89b5f6] shadow-2xl transition duration-700 ease-in-out
            hover:bg-[#89b5f6] hover:text-black"
        />
        <PriceCard
          service={{ name: "Лендинг", price: "20000", description: "" }}
          className="border border-[#a489f6] rounded-lg
            hover:shadow-[#a489f6] shadow-2xl transition duration-700 ease-in-out
            hover:bg-[#a489f6] hover:text-black"
        />
        <PriceCard
          service={{ name: "Лендинг", price: "20000", description: "" }}
          className="border border-[#f689f1] rounded-lg
            hover:shadow-[#f689f1] shadow-2xl transition duration-700 ease-in-out
            hover:bg-[#f689f1] hover:text-black"
        />
        <PriceCard
          service={{ name: "Лендинг", price: "20000", description: "" }}
          className="border border-[#ff9cc2] rounded-lg
            hover:shadow-[#ff9cc2] shadow-2xl transition duration-700 ease-in-out
            hover:bg-[#ff9cc2] hover:text-black"
        />
      </div>
    </div>
  );
};

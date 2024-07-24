"use client";

import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

export const ServiceCardBg: FC<IProps> = ({ children }) => {
  return (
    <div className="gradient-border-service-card group/bgCard rounded-3xl w-[90%]">
      <div
        className="w-full h-96 rounded-[30px] bg-gradient-to-tr from-black/50 to-gray-50/10 
      "
      >
        {children}
      </div>
    </div>
  );
};

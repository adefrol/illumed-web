"use client";

import { FC, useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const ProjectsCardBg: FC<IProps> = ({ children, style }) => {
  return (
    <div className="gradient-border-project-card group/bgCard rounded-[16px] relative overflow-hidden">
      <div
        style={style}
        className="bg-gradient-to-r from-[#a287f4] to-transparent h-[66px] absolute rounded-r-[20px] rounded-l-lg -z-10 max-w-[100%]"
      />
      <div className="w-[550px] rounded-lg bg-gradient-to-r from-black/50 to-gray-50/10 py-5 px-10">
        {children}
      </div>
    </div>
  );
};

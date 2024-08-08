"use client";

import { cn } from "@/lib/utils";
import { FC, forwardRef } from "react";
import Link from "next/link";

type ButtonType = "fill" | "outline";
type Tag = "button" | "link";

interface IProps {
  children: React.ReactNode;
  buttonType?: ButtonType;
  className?: string;
  buttonClassName?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  tag?: Tag;
  href?: string;
}

export const ButtonGradient = forwardRef<HTMLButtonElement, IProps>(
  (
    {
      children,
      className,
      buttonClassName,
      buttonType = "fill",
      tag = "button",
      href,
      ...props
    },
    ref
  ) => {
    const Component = tag === "link" ? Link : "button";

    return (
      <Component
        {...props}
        href={href ?? '#'}
        ref={ref as React.Ref<HTMLButtonElement> | any}
        className={cn("cursor-pointer", className, {
          "gradient-border-white-to-main": buttonType === "fill",
          "gradient-border-main-color": buttonType === "outline",
        })}
      >
        <div
          className={cn("text-lg rounded-xl z-10", buttonClassName, {
            "bg-primary text-black": buttonType === "fill",
            "bg-black text-white": buttonType === "outline",
          })}
        >
          {children}
        </div>
      </Component>
    );
  }
);

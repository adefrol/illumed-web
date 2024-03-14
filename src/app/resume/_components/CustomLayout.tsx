"use client";

import { PageTitle } from "@/components/PageTitle";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const sidebar = [
  {
    id: 1,
    title: "Опыт",
  },

  {
    id: 2,
    title: "Образование",
  },

  {
    id: 3,
    title: "Технологии",
  },

  {
    id: 4,
    title: "Контакты",
  },
];

interface IProps {
  children: React.ReactNode;
  focus: number | string;
  setFocus: any;
}

const CustomLayout = ({ children, focus, setFocus }: IProps) => {
  return (
    <div className="">
      <PageTitle title="Резюме" />

      <div className="lg:flex items-start lg:gap-[140px] mt-[50px]">
        <div
          className={cn("flex flex-col gap-[10px] animate-slide-in max-[639px]:hidden", {
            "max-[639px]:w-[400px]": focus === "1",
          })}
        >
          {sidebar.map((item) => (
            <li
              key={item.id}
              className={cn(
                "uppercase font-bold max-[639px]:text-[12px] text-black/20 dark:text-white/20 cursor-pointer ",
                {
                  "text-black dark:text-white transition duration-300":
                    focus === item.id.toString(),
                }
              )}
              onClick={() => setFocus(item.id)}
            >
              {item.title}
            </li>
          ))}
        </div>

        <ScrollArea className="w-96 whitespace-nowrap max-[639px]:visible lg:hidden animate-slide-in">
          <div className="flex items-center w-max space-x-8 max-[639px]:mb-4">
            {sidebar.map((item) => (
              <li
                key={item.id}
                className={cn(
                  "uppercase font-bold max-[639px]:text-[16px] text-black/20 dark:text-white/20 cursor-pointer",
                  {
                    "text-black dark:text-white transition duration-300":
                      focus === item.id.toString(),
                  }
                )}
                onClick={() => setFocus(item.id)}
              >
                {item.title}
              </li>
            ))}
          </div>
          <ScrollBar orientation="horizontal" style={{ opacity: 0 }} />
        </ScrollArea>

        <div className="max-[639px]:mt-[20px] max-[639px]:flex max-[639px]:justify-center animate-slide-in">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomLayout;

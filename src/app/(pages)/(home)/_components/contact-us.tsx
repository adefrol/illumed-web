"use client";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { FC } from "react";
import { FormContactUs } from "./form/form-contact-us";
import { SocialIcon } from "./social-icon";

export const ContactUs: FC = () => {
  return (
    <div className="flex items-center gap-[20px] max-[639px]:flex-col mt-[20px]">
      <Drawer>
        <DrawerTrigger asChild>
          <div className="hover:shadow-[#023233] shadow-2xl transition duration-300 ease-in-out">
            <Button
              className="px-20 py-9 inline-flex h-12 animate-shimmer items-center justify-center rounded-md 
        border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] 
        font-medium text-slate-400 focus:outline-none focus:ring-slate-400 
         transition-colors hover:text-slate-200 hover:shadow-slate-400"
              size={"lg"}
            >
              Связаться с нами
            </Button>
          </div>
        </DrawerTrigger>

        <DrawerContent className="py-[40px] bg-cover bg-[url('/bgmain.png')] dark:bg-[url('')]">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="mt-[10px]">
              <DrawerTitle className="text-center text-3xl">
                Связаться с нами
              </DrawerTitle>

              <DrawerDescription className="text-center font-semibold">
                Выберите один из способов связи
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4 pb-0 space-y-4">
              <FormContactUs />

              <div className="flex justify-center items-center gap-2">
                <div className="w-full h-[0.5px] bg-black/50 dark:bg-white/50" />
                <p className="uppercase text-center text-black/50 dark:text-white/50">
                  или
                </p>
                <div className="w-full h-[0.5px] bg-black/50 dark:bg-white/50" />
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center gap-5">
                  <SocialIcon icon={"/tg.svg"} />
                  <SocialIcon icon={"/vk.svg"} />
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

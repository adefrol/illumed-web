"use client";

import { MoveUpRight } from "lucide-react";
import { FC } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { SocialIcon } from "./SocialIcon";
import { FormComponent } from "./form/FormComponent";

export const Contacts: FC = () => {
  return (
    <div className="flex items-center gap-[20px] max-[639px]:flex-col mt-[20px]">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            className="rounded-full flex gap-[10px] items-center"
            size={"lg"}
          >
            Связаться с нами <MoveUpRight size={15} />
          </Button>
        </DrawerTrigger>

        <DrawerContent
          //   style={{ backgroundImage: `url(${IMAGE_URL.bg})` }}
          className="py-[40px] bg-cover bg-[url('/bgmain.png')] dark:bg-[url('/bgmain-dark.png')]"
        >
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
              <FormComponent />

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

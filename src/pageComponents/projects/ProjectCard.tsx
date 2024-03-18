"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IProject } from "@/interfaces/project.interface";
import Image from "next/image";
import { FC, useState } from "react";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

interface IProps {
  projects: IProject[];
}

export const ProjectCard: FC<IProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-3 max-[1650px]:grid-cols-2 lg:gap-[60px]  max-[639px]:flex max-[639px]:flex-col max-[639px]:gap-[40px] animate-slide-in">
      {projects.map((project) => (
        <Dialog>
          <CardContainer key={project.id} className="inter-var ">
            <CardBody
              className="bg-opacity-5 backdrop-blur-md relative group/card  dark:hover:shadow-2xl
                  dark:hover:shadow-emerald-500/[0.1] dark:backdrop-blur-md dark:bg-opacity-5 dark:border-white/[0.2] border-black/[0.1]
                  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.dateTime}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project?.img![0].img}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={"p"}
                  className="px-4 py-2 rounded-xl select-none text-xs font-normal dark:text-white"
                >
                  Подробнее →
                </CardItem>
                <DialogTrigger asChild>
                  <CardItem
                    translateZ={20}
                    as={Button}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Открыть
                  </CardItem>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[900px] max-[639px]:w-[500px]">
                  <ScrollArea className="max-[639px]:h-screen">
                    <div className="h-[800px]">
                      <LayoutGrid cards={project.img!} />
                    </div>
                    <DialogFooter className="max-[639px]:visible lg:hidden">
                      <DialogClose>
                        <Button className="w-fit">Закрыть</Button>
                      </DialogClose>
                    </DialogFooter>
                  </ScrollArea>
                </DialogContent>
              </div>
            </CardBody>
          </CardContainer>
        </Dialog>
      ))}
    </div>
  );
};

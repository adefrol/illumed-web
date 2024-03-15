import { PageTitle } from "@/components/PageTitle";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navbar } from "@/constants/navbar";
import { projects } from "@/lib/projects";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <PageTitle title="Проекты" />

      <div className="mt-[50px]">
        <FloatingNav navItems={navbar} />
        <div className="">
          {projects.length ? (
            <div className="grid grid-cols-2 lg:gap-[60px] max-[639px]:flex max-[639px]:flex-col max-[639px]:gap-[40px] animate-slide-in">
              {projects.map((project) => (
                <CardContainer className="inter-var ">
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
                        src={project.img}
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
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Подробнее →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        as={Link}
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        href={`/projects/${project.id}`}
                      >
                        Подробнее
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p
                className="text-3xl bg-gradient-to-r from-violet-500 via-pink-500 to-fuchsia-500 inline-block 
              bg-clip-text text-transparent font-bold"
              >
                Данная страница пока находится в разработке
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;

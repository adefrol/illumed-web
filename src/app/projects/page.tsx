import { PageTitle } from "@/components/PageTitle";
import { projects } from "@/lib/projects";
import { MoveUpRight } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <PageTitle title="Проекты" />

      <div className="mt-[50px]">
        <div className="">
          {projects.length ? (
            <div className="grid grid-cols-3 lg:gap-[60px] max-[639px]:flex max-[639px]:flex-col max-[639px]:gap-[40px]">
              {projects.map((project) => (
                <Link
                  href={`/projects/${project.id}`}
                  key={project.id}
                  className="flex flex-col gap-[5px] max-[639px]:gap-0"
                >
                  <img
                    src={project.img}
                    className="w-[350px] h-[200px] max-[639px]:h-full max-[639px]:w-full"
                  />

                  <p className="text-black/50 font-semibold">
                    {project.dateTime}
                  </p>

                  <p className="font-bold text-[25px] flex items-center gap-1">
                    {project.title}
                    <MoveUpRight size={20} />
                  </p>
                </Link>
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

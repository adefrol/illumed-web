import { PageTitle } from "@/components/PageTitle";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navbar } from "@/constants/navbar";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/pageComponents/projects/ProjectCard";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <PageTitle title="Проекты" />

      <div className="mt-[50px]">
        <FloatingNav navItems={navbar} />
        <div className="">
          {projects.length ? (
            <ProjectCard projects={projects} />
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

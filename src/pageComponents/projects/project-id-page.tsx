"use client";

import { PageTitle } from "@/components/PageTitle";
import { projects } from "@/lib/projects";
import { useParams } from "next/navigation";
import { FC } from "react";

export const ProjectIdPage: FC = () => {
  const projectIdParam = useParams();
  const projectById = projects.find(
    (project) => project.id === Number(projectIdParam.projectId)
  );

  return (
    <div className="">
      <PageTitle title={projectById?.title!} />
    </div>
  );
};

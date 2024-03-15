import { PageTitle } from "@/components/PageTitle";
import { projects } from "@/lib/projects";
import { NextPage } from "next";
import { Suspense } from "react";

interface IProps {
  params: {
    projectId: string;
  };
}

const Page: NextPage<IProps> = ({ params }) => {
  const projectById = projects.find(
    (project) => project.id.toString() === params.projectId
  );

  return (
    <Suspense fallback={<>Loading...</>}>
      <PageTitle title={params.projectId ? `Проект ${params.projectId}` : ""} />

      <div className="mt-[50px]">
        <img src={projectById?.img} alt="" />
      </div>
    </Suspense>
  );
};

export default Page;

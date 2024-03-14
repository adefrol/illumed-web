import { PageTitle } from "@/components/PageTitle";
import { projects } from "@/lib/projects";
import { NextPage } from "next";

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
    <div className="">
      <PageTitle title={params.projectId ? `Проект ${params.projectId}` : ""} />

      <div className="mt-[50px]">
        <img src={projectById?.img} alt="" />
      </div>
    </div>
  );
};

export default Page;

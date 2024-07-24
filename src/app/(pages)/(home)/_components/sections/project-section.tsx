"use client";

import { ProjectsCardBg } from "@/components/projects/project-card-bg";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { CardStack } from "@/components/ui/card-stack";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { icons } from "lucide-react";
import { FC, useEffect, useState } from "react";

export const ProjectSection: FC = () => {
  const timer = 100;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [widths, setWidths] = useState<number[]>(
    Array(projects.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedWidths = [...widths];
      updatedWidths[activeIndex] = updatedWidths[activeIndex] + 10;
      setWidths(updatedWidths);

      if (updatedWidths[activeIndex] === 250) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
        setWidths(Array(projects.length).fill(0));
      }
    }, timer);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, widths]);

  return (
    <div className="max-w-[1500px] mx-auto py-40">
      <div className="text-center flex justify-between">
        <h2 className="text-center text-7xl font-medium">ПРОЕКТЫ</h2>
        <p className="font-extralight text-3xl text-right w-1/2">
          Предлагаем вам ознакомиться с готовыми проектами наших клиентов
        </p>
      </div>

      <div className="flex gap-[450px] mt-[170px]">
        <div className="flex flex-col items-center gap-10">
          {projects.map((project, index) => {
            const Icon = icons[project.icon];

            return (
              <div key={project.id} className="">
                <ProjectsCardBg
                  style={{
                    width: `${widths[index]}%`,
                    transition: "width 1.5s ease",
                    borderTopRightRadius: index === 0 ? "20px" : "20px",
                    borderBottomRightRadius: index === 0 ? "20px" : "20px",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn("border border-white p-2 rounded-sm", {
                        "project-border-animation": activeIndex === index,
                      })}
                    >
                      <Icon name={project.icon} />
                    </div>
                    <p className="text-lg">{project.name}</p>
                  </div>
                </ProjectsCardBg>
              </div>
            );
          })}

          <ButtonGradient type="outline" className="px-7 py-4">
            Посмотреть все
          </ButtonGradient>
        </div>

        <div className="shadow-[170px_0px_180px_90px_#594e78] rounded-3xl">
          <CardStack items={projects} />
        </div>
      </div>
    </div>
  );
};

"use client";

import { ProjectsCardBg } from "@/components/projects/project-card-bg";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { CardStack } from "@/components/ui/card-stack";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { icons } from "lucide-react";
import { FC, useEffect, useState } from "react";

export const ProjectSection: FC = () => {
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
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, widths]);

  return (
    <div id="projects" className="h-[105vh] flex flex-col justify-center">
      <div className="text-center flex justify-between">
        <h2 className="text-center max-2xl:text-7xl text-5xl font-medium">ПРОЕКТЫ</h2>
        <p className="font-extralight text-3xl text-right w-1/2">
          Предлагаем вам ознакомиться с готовыми проектами наших клиентов
        </p>
      </div>

      <div className="flex max-2xl:gap-[250px] gap-[125px] mt-[130px]">
        <div className="flex flex-col items-center gap-10">
          {projects.map((project, idx) => {
            const Icon = icons[project.icon];

            return (
              <div key={project.id} className="cursor-pointer">
                <ProjectsCardBg
                  style={{
                    width: `${widths[idx]}%`,
                    transition: "width 1.5s ease",
                    borderTopRightRadius: idx === 0 ? "20px" : "20px",
                    borderBottomRightRadius: idx === 0 ? "20px" : "20px",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn("", {
                        "project-border-icon-animation": activeIndex === idx,
                      })}
                    >
                      <Icon name={project.icon} />
                    </div>
                    <p className="text-xl font-medium">{project.name}</p>
                  </div>
                </ProjectsCardBg>
              </div>
            );
          })}

          {/* <ButtonGradient type="outline" buttonClassName="px-7 py-4">
            Посмотреть все
          </ButtonGradient> */}
        </div>

        <div className="">
          <CardStack
            activeIndex={activeIndex}
            widths={widths}
            items={projects}
          />
        </div>
      </div>
    </div>
  );
};

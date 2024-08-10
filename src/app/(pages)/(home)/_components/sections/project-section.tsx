"use client";

import { ProjectsCardBg } from "@/components/projects/project-card-bg";
import { Title } from "@/components/title";
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
    <div className="lg:h-[105vh] flex flex-col justify-center">
      <div className="text-center flex lg:flex-row flex-col lg:justify-between justify-center">
        <Title title="проекты" />
        <p className="font-extralight text-[calc(16px+8*(100vw-320px)/1920)] lg:text-right text-center lg:w-1/2">
          Предлагаем вам ознакомиться с готовыми проектами наших клиентов
        </p>
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col 2xl:gap-[250px] lg:gap-[125px] lg:mt-[130px] mt-20 lg:justify-normal justify-center">
        <div className="flex flex-col items-center justify-center gap-10">
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

        <div className="mt-32 md:mt-0 relative">
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

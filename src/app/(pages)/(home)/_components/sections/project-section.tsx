'use client';

import { Title } from '@/components/title';
import { CardStack } from '@/components/ui/card-stack';
import { projects } from '@/constants/projects';
import { cn } from '@/lib/utils';
import { Folder } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
    }, 300);

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

      <div className="flex flex-col items-center w-full">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 items-center justify-around mt-20 w-full">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={cn('overflow-hidden transition duration-300', {
                'scale-105': activeIndex === idx,
              })}
            >
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    'border border-black bg-gradient-to-t from-black via-black to-black p-2 rounded-lg transition-all duration-1000',
                    {
                      'border-primary bg-gradient-to-t from-primary via-black to-black':
                        activeIndex === idx,
                    }
                  )}
                >
                  <Folder
                    className={cn('text-[#A7A7A7] transition duration-300', {
                      'text-white drop-shadow-[0_0_4px_#ccc]':
                        activeIndex === idx,
                    })}
                  />
                </div>
                <p
                  className={cn('text-[#A7A7A7] transition duration-300', {
                    'text-white drop-shadow-[0_0_4px_#ccc]':
                      activeIndex === idx,
                  })}
                >
                  {project.name}
                </p>
              </div>

              <motion.div
                className={cn(
                  'bg-white h-1 rounded-full mt-2 drop-shadow-[0_0_4px_#ccc]'
                )}
                initial={{ width: 0 }}
                animate={{ width: widths[idx] }}
                transition={{ duration: 0.5 }}
                key={idx}
              />
            </div>
          ))}
        </div>
        <div className="lg:my-32 md:my-20 my-20 relative lg:-left-32 max-sm:left-5">
          <CardStack
            activeIndex={activeIndex}
            widths={widths}
            items={projects}
          />
        </div>

        <motion.div
          key={projects[activeIndex].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:mt-80 md:mt-32 sm:mt-0 -mt-40"
        >
          <p className="text-[#a7a7a7] text-[32px]">
            {projects[activeIndex].description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

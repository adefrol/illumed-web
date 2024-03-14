import { IUser } from "@/interfaces/user.interface";
import { FC } from "react";

export const Development: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className="">
      {user.resume.map((item) => (
        <div className="grid lg:grid-cols-4 lg:gap-[60px] grid-cols-2 gap-[40px]">
          <div className="space-y-[20px]">
            {item.development
              .filter((dev) => dev.title === "Язык")
              .map((dev) => (
                <div key={dev.id} className="flex flex-col">
                  <p className="text-black/50 dark:text-white/50 font-semibold">{dev.title}</p>

                  <p className="font-bold">{dev.body}</p>
                </div>
              ))}
          </div>

          <div className="space-y-[20px]">
            {item.development
              .filter((dev) => dev.title === "Библиотека")
              .map((dev) => (
                <div key={dev.id} className="flex flex-col">
                  <p className="text-black/50 dark:text-white/50 font-semibold">{dev.title}</p>

                  <p className="font-bold">{dev.body}</p>
                </div>
              ))}
          </div>

          <div className="space-y-[20px]">
            {item.development
              .filter((dev) => dev.title === "Фреймворк")
              .map((dev) => (
                <div key={dev.id} className="flex flex-col">
                  <p className="text-black/50 dark:text-white/50 font-semibold">{dev.title}</p>

                  <p className="font-bold">{dev.body}</p>
                </div>
              ))}
          </div>

          <div className="space-y-[20px]">
            {item.development
              .filter((dev) => dev.title === "Экосистема")
              .map((dev) => (
                <div key={dev.id} className="flex flex-col">
                  <p className="text-black/50 dark:text-white/50 font-semibold">{dev.title}</p>

                  <p className="font-bold">{dev.body}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

import { IUser } from "@/interfaces/user.interface";
import { FC } from "react";

export const Education: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className="">
      {user?.resume.map((item) => (
        <div className="" key={item.id}>
          {item.education.map((edu) => (
            <div className="space-y-[5px]" key={edu.id}>
              <p className="text-black/50 dark:text-white/50 font-semibold">
                {edu.dateTime}
              </p>

              <p className="font-bold">
                {edu.educationType}:{" "}
                <span className="font-normal">{edu.educationPlace}</span>
              </p>

              <p className="font-bold">
                Специальность:{" "}
                <span className="font-normal">{edu.profession}</span>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

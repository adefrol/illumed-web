import { IUser } from "@/interfaces/user.interface";
import { FC } from "react";

export const References: FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className="">
      {user.resume.map((item) =>
        item.references.map((reference) => (
          <div key={reference.id} className="">
            <p className="text-black/50 font-semibold">{reference.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

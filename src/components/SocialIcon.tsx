import { cn } from "@/lib/utils";
import { LockKeyholeIcon } from "lucide-react";
import { FC } from "react";
import { toast } from "sonner";

interface IProps {
  icon: string;
  locked?: boolean;
}

export const SocialIcon: FC<IProps> = ({ icon, locked = true }) => {
  return (
    <>
      {locked ? (
        <div
          onClick={() =>
            toast.error("Недоступно", {
              description:
                "Мы приносим свои извинения, но данная функция временно недоступна",
              duration: 3000,
            })
          }
          className="cursor-pointer relative"
        >
          <img
            src={icon}
            className={cn("w-[40px]", {
              "filter brightness-50": locked,
            })}
            alt=""
          />
          <LockKeyholeIcon className="text-white/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      ) : (
        <a href="https://t.me/sorazj" target="_blank">
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src={icon}
              className={cn("w-[40px]", {
                "filter brightness-50": locked,
              })}
              alt=""
            />
          </div>
        </a>
      )}
    </>
  );
};

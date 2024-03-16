import { ArrowDown } from "lucide-react";
import { FC } from "react";

export const ArrowDownAnimated: FC = () => {
    return (
      <div className="flex justify-center mt-10">
        <ArrowDown className="opacity-30 animate-bounce" />
      </div>
    );
}
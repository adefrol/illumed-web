import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { InputMask } from "@react-input/mask";

interface IProps {
  register: UseFormRegisterReturn<"phoneNumber" | "email" | "message">;
  errors: FieldError["message"];
  placeholder: string;
  phone?: boolean;
}

export const InputValidated: FC<IProps> = ({
  register,
  errors,
  placeholder,
}) => {
  return (
    <div className="">
      <Input
        {...register}
        className={cn(
          "focus-visible:shadow-[#7266e26a] transition duration-300",
          {
            "focus-visible:shadow-red-500": errors,
          }
        )}
        placeholder={placeholder}
      />
      {errors && <p className="text-red-500">{errors}</p>}
    </div>
  );
};

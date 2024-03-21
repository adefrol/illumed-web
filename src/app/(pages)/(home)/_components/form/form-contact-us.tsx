"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { InputValidated } from "./input-validated";
import { InputMask } from "@react-input/mask";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const FormContactUs: FC = () => {
  const phoneRegex = new RegExp(
    /^[+]?[(]?[0-9]{1,4}[)]?[-\s]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
  );

  const schema = z.object({
    phoneNumber: z
      .string()
      .regex(phoneRegex, { message: "Некорректный номер" }),
    email: z.string().email({ message: "Некорректная почта" }),
    message: z.string(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          reset({ phoneNumber: "", email: "", message: "" });
          toast.success("Сообщение отправлено", {
            description: new Date().toLocaleString(),
          });
        })}
      >
        <div className="space-y-[20px]">
          <div className="">
            <InputMask
              component={Input}
              mask="+7 (___) ___-__-__"
              replacement={{ _: /\d/ }}
              showMask
              placeholder="Номер телефона"
              {...register("phoneNumber")}
              className={cn(
                "focus-visible:shadow-[#023233] transition duration-300",
                {
                  "focus-visible:shadow-red-500": errors.phoneNumber,
                },
              )}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="">
            <InputValidated
              placeholder="Электронная почта"
              register={register("email")}
              errors={errors.email?.message}
            />
          </div>

          <Textarea
            {...register("message")}
            placeholder="Сообщение"
            className={cn(
              "focus-visible:shadow-[#023233] focus-visible:shadow-lg transition duration-300",
            )}
          />

          <Button
            className="w-full"
            size={"lg"}
            type="submit"
            variant="outline"
          >
            Отправить
          </Button>
        </div>
      </form>
    </div>
  );
};

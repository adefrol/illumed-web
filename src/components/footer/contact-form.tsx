"use client";

import { cn } from "@/lib/utils";
import { formSchema } from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleHelp, Loader2 } from "lucide-react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { ButtonGradient } from "../ui/button-gradient";
import { Checkbox } from "../ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { InputValidated } from "../validated-input";
import { useMutation } from "@tanstack/react-query";
import { EmailAction } from "@/actions/email-action";

export const ContactForm: FC = () => {
  // const [windowWidth, setWindowWidth] = useState<number | null>(null);

  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  // }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: EmailAction.sendEmail,
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await mutateAsync({ email: data.email });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-span-2 text-center">
      <div className="py-10">
        <h2 className="text-3xl">Остались вопросы?</h2>
      </div>

      <div className="relative">
        <InputValidated
          {...register("email")}
          placeholder="Электронный адрес"
          error={errors.email}
        />

        <div
          className={cn(
            "opacity-0 absolute top-1/2 -translate-y-1/2 right-5 transition duration-300",
            {
              "opacity-100 z-20": errors.email,
            }
          )}
        >
          <TooltipProvider>
            <Tooltip open={errors.email && errors.email.message !== undefined}>
              <TooltipTrigger className="cursor-default">
                <CircleHelp className="text-red-400" />
              </TooltipTrigger>
              <TooltipContent>{errors.email?.message}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="py-5">
        <div className="flex gap-5 items-center">
          <Controller
            control={control}
            name="checkbox"
            render={({ field }) => (
              <Checkbox
                className={cn("w-5 h-5", {
                  "border-red-400": errors.checkbox,
                })}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />
          <p className="text-sm w-[70%] text-left">
            Я согласен с{" "}
            <Link
              href={"/"}
              className="text-primary hover:drop-shadow-[0_0_0.3px_#ccc] transition duration-300 underline"
            >
              политикой пользования
            </Link>{" "}
            и{" "}
            <Link
              href={"/"}
              className="text-primary hover:drop-shadow-[0_0_0.3px_#ccc] transition duration-300 underline"
            >
              конфиденциальности
            </Link>
          </p>
        </div>
      </div>
      <ButtonGradient
        buttonType="outline"
        buttonClassName="py-3 px-16"
        className="hover:shadow-[#2b2639] shadow-xl rounded-2xl transition duration-300 ease-in-out"
        type="submit"
      >
        {isPending ? <Loader2 className="animate-spin" /> : "Отправить"}
      </ButtonGradient>
    </form>
  );
};

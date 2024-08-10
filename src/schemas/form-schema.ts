import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Некорректная почта"),
  checkbox: z.boolean({
    message:
      'Необходимо согласие с политикой конфиденциальности',
  }),
});

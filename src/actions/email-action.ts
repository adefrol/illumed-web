import { axiosInstance } from "@/config/axios-config";

export const EmailAction = {
  sendEmail: async ({ email }: { email: string }) => {
    const response = await axiosInstance.post("/contact", {
      email,
    });

    return response.data;
  },
};

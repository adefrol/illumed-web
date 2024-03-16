import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Главная",
  description: "Главная",
  openGraph: {
    type: "website",
    title: "illumedWeb",
    description:
      "Команда экспертов в разработке сайтов и мобильных приложений.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className}`}>
        <Providers>
          <div className="bg-[url('/bgmain.png')] dark:bg-[url('/bgmain-dark.jpg')] bg-cover bg-center h-full w-full fixed block left-0 bottom-0 -z-10 scale-105 animate-bg-infinite"></div>
          <div className="py-[40px] transition-all  min-h-screen ">
            <div className="max-w-[1600px] max-[1600px]:max-w-[1100px] mx-auto">
              <Header />
              <div className="mt-[80px] max-[639px]:mx-[20px] ">{children}</div>
            </div>
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}

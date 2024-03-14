import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Главная",
  description: "Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <div className="py-[40px] bg-[url('/bgmain.png')] bg-cover min-h-screen dark:bg-[url('/bgmain-dark.jpg')]">
            <div className="max-w-[1100px] mx-auto">
              <Header />
              <div className="mt-[80px] max-[639px]:mx-[20px]">{children}</div>
            </div>
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}

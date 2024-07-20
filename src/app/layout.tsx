import type { Metadata } from "next";
import { Golos_Text, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
    subsets: ["cyrillic"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "illumedWEB",
    description: "illumedWEB",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("bg-[#080808]", inter.className)}>
                <Providers>
                    <div className="">{children}</div>
                </Providers>
                <Toaster />
            </body>
        </html>
    );
}

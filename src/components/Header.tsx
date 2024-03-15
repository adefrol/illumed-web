"use client";

import { navbar } from "@/constants/navbar";
import { useSwitchUser } from "@/context/SwitchUserContext";
import { users } from "@/lib/users";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Varela_Round } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQueryState } from "nuqs";
import { FC, useEffect, useState } from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const varela = Varela_Round({ weight: "400", subsets: ["latin"] });

export const Header: FC = () => {
  const pathname = usePathname();
  const { switchUser } = useSwitchUser();
  const [logo, setLogo] = useState<boolean>(true);
  const { setTheme } = useTheme();
  const [userParams] = useQueryState("user");
  const [blogParams] = useQueryState("blog");

  useEffect(() => {
    switchUser(Number(userParams));
    if (pathname === "/resume") {
      setLogo(false);
    }

    return () => setLogo(true);
  }, [pathname]);

  return (
    <div className="flex items-center mt-[30px] justify-between max-[639px]:flex-col max-[639px]:gap-[30px]">
      <div className="flex items-center h-[75px] w-[170px] max-[639px]:gap-[50px]">
        {logo ? (
          <div className="">
            <p className={`text-3xl select-none ${varela.className}`}>
              illumed<span className="text-[#7266e2]">Web</span>
            </p>
          </div>
        ) : (
          <>
            {users.map((user) => (
              <>
                <AnimatedTooltip key={user.id} item={user} />
              </>
            ))}
          </>
        )}
      </div>

      <div
        className="bg-white dark:bg-black py-[10px] px-[20px] rounded-full flex gap-[40px] items-center 
      shadow-[#7266e26a] max-[639px]:shadow-[#efdae6] shadow-xl dark:shadow-[#7266e233] max-[639px]:dark:shadow-[#efdae633]
      dark:backdrop-blur-md dark:bg-opacity-25 backdrop-blur-md bg-opacity-10 border border-black/[0.1] dark:border-white/[0.2]"
      >
        {navbar.map((navItem) => (
          <div key={navItem.id} className="cursor-pointer">
            <Link
              href={{
                pathname: navItem.href,
                query: {
                  user: userParams,
                  blog: blogParams,
                },
              }}
              className={cn("font-semibold text-black/30 dark:text-white/30", {
                "text-black dark:text-white transition duration-300":
                  pathname === navItem.href,
              })}
            >
              {navItem.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="max-[639px]:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="bg-white bg-opacity-15 backdrop-blur-md hover:bg-opacity-30 transition duration-300 hover:bg-white 
            dark:bg-black dark:bg-opacity-15 dark:backdrop-blur-md rounded-full p-2 dark:hover:bg-opacity-30
            focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            asChild
          >
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem]  w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-white backdrop-blur-md bg-opacity-15"
            align="end"
          >
            <DropdownMenuItem className="" onClick={() => setTheme("light")}>
              Светлая
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Темная
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

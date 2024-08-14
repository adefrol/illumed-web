'use client';

import { navbar } from '@/constants/navbar';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Button } from './ui/button';
import { Logo } from './ui/logo';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="">
      <div
        className={cn(
          'lg:block hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border border-white/10 mx-[65px] mt-[20px] rounded-[20px]'
        )}
      >
        <div className="px-[40px]">
          <div className="py-5 flex items-center justify-between">
            <Logo />

            <div className="flex items-center gap-[55px]">
              {navbar.map((nav) => (
                <div
                  key={nav.id}
                  className=""
                >
                  <a
                    href={nav.href}
                    className="text-white/50 hover:text-white hover:drop-shadow-[0_0_4px_#ccc] transition duration-300"
                  >
                    {nav.title}
                  </a>
                </div>
              ))}
            </div>

            <Button className="text-white/80 hover:text-white hover:shadow-[0_0_10px_2px_#A78BFA] transition duration-300">
              <Link href={'#contacts'}>Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* fixed w-[80%] mx-10 py-5 z-50 backdrop-blur-md bg-black/60 border border-white/10 rounded-[20px] */}
      <div
        className="flex lg:hidden items-center justify-between
      fixed w-full px-5 h-20 left-0 top-0 z-50 backdrop-blur-md bg-black/60 border border-white/10 rounded-b-[20px]
      shadow-[0_0_20px_0.3px_#A78BFA]"
      >
        <Logo fontSize="text-3xl" />
        <Sheet
          open={open}
          onOpenChange={setOpen}
        >
          <SheetTrigger>
            <Menu
              color="white"
              size={40}
              className=""
            />
          </SheetTrigger>

          <SheetContent onCloseAutoFocus={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-10 mt-10">
              {navbar.map((nav) => (
                <div
                  key={nav.id}
                  className=""
                >
                  <a
                    href={nav.href}
                    onClick={() => setOpen(false)}
                    className="text-white text-3xl"
                  >
                    {nav.title}
                  </a>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

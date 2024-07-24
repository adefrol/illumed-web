import React from "react";
import { ContactForm } from "./contact-form";
import { Logo } from "../ui/logo";
import { footerList } from "@/constants/footer-list";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-5 ">
        {footerList.map((list) => (
          <div key={list.id} className="">
            <div className="py-10 p-20 pl-0">
              <h2 className="text-3xl">{list.title}</h2>
            </div>
            <div className="flex flex-col gap-3">
              {list.links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-2xl text-isecondary font-medium hover:text-white transition duration-300"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <ContactForm />
      </div>
      <div className="grid grid-cols-5 py-10">
        <div className="text-4xl">
          <Logo />
        </div>
        <div className="text-3xl">
          <p className="underline">+7 (999) 999-99-99</p>
        </div>
        <div className="text-3xl">
          <p className="underline">illumed@illumed.ru</p>
        </div>
      </div>
    </footer>
  );
};

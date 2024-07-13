import React from "react";
import { ContactForm } from "./contact-form";
import { Logo } from "../ui/logo";

export const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-5 ">
                <div className="">
                    <div className="py-10 p-20 pl-0">
                        <h2 className="text-3xl">Проекты</h2>
                    </div>
                    <div className="flex flex-col gap-3 text-2xl text-isecondary font-medium">
                        <a href="">Web-приложения</a>
                        <a href="">Моб. приложения</a>
                    </div>
                </div>
                <div className="">
                    <div className="py-10 p-20 pl-0">
                        <h2 className="text-3xl">Услуги</h2>
                    </div>
                    <div className="flex flex-col gap-3 text-2xl text-isecondary font-medium">
                        <a href="">Дизайн</a>
                        <a href="">Разработка</a>
                        <a href="">Продвижение</a>
                    </div>
                </div>
                <div className="">
                    <div className="py-10 p-20 pl-0">
                        <h2 className="text-3xl">О нас</h2>
                    </div>
                    <div className="flex flex-col gap-3 text-2xl text-isecondary font-medium">
                        <a href="">Кто мы?</a>
                        <a href="">Почему мы?</a>
                    </div>
                </div>
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

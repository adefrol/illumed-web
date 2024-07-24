"use client";

import React, { useState } from "react";
import { Checked, Unchecked } from "./checkbox";
import { Button } from "./button";
import Link from "next/link";

export const ContactForm = () => {
    const [check, setCheck] = useState<boolean>(false);

    return (
        <div className="col-span-2 text-center">
            <div className="py-10">
                <h2 className="text-3xl">Остались вопросы?</h2>
            </div>
            <div className="gradient-border">
                <input
                    type="text"
                    className="p-4 relative z-[1] outline-none bg-black rounded-2xl w-full h-full border-4 border-solid border-transparent"
                    placeholder="E-mail"
                />
            </div>
            <div className="py-5 flex justify-center items-center">
                {check ? (
                    <Checked size={50} onClick={() => setCheck(false)} />
                ) : (
                    <Unchecked size={50} onClick={() => setCheck(true)} />
                )}
                <p className='text-xl w-[70%]'>
                    Я согласен с{" "}
                    <Link href={'/'} className="text-primary underline">
                        политикой пользования
                    </Link>{" "}
                    и{" "}
                    <Link href={'/'} className="text-primary underline">
                        конфиденциальности
                    </Link>
                </p>
            </div>
            <Button />
        </div>
    );
};

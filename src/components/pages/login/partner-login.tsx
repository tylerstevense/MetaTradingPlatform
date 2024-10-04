"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";


const PartnerLogin = () => {

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData);
    };

    return (
        <div>
            <section className="section container flex flex-col-reverse items-center lg:flex-row justify-center gap-[60px]">
                <form onSubmit={handleOnSubmit} className="left md:w-[560px] h-[auto] flex flex-col gap-[15px] rounded-[10px] border border-gray-500 p-[30px]">
                    <h2>Login</h2>
                    <p>Please Fill out the following fields to login:</p>
                    <div className="flex flex-col gap-[30px]">
                        <div className="input-style">
                            <label htmlFor="username">Username(Email)</label>
                            <input type="email" />
                        </div>
                        <div className="input-style">
                            <label htmlFor="username">Password</label>
                            <input type="password" />
                        </div>
                    </div>
                    <p className="flex justify-end  text-secondary">
                        <Link href="/forget-password">Forgot your password?</Link>
                    </p>
                    <Button type="submit" className="w-full" variant="secondary">Login</Button>
                    <p className="text-center"> <span className="text-gray">Not a Partner?</span> &nbsp; <span className="text-secondary underline hover:underline-offset-4"> <Link href="/partners">Become an IB</Link> </span></p>
                </form>
                <div className="right">
                    <Image
                        src="/images/pages/partners/partners-login.png"
                        alt="why-choose-doyos"
                        width={1000}
                        height={1000}
                        className="max-w-[350px] lg:max-w-[560px]  md:ml-0 h-auto"
                    />
                </div>
            </section>

        </div>
    )
}

export default PartnerLogin;
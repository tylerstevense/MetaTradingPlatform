"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import CountryCombobox from "@/components/ui/country-combobox";
import { FormEvent } from "react";
import Link from 'next/link';

const CallBackRequest = () => {
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData);
    };
    const handleOnChange = (e: any) => {
        console.log(e.target.value);
    }
    return (
        <div>

            {/* register form area */}
            <section className='section flex flex-col lg:flex-row items-center justify-center gap-[20px]'>

                <Image className="lg:max-w-[730px]" src="/images/pages/supports/call-back-request.png" width={10000} height={10000} alt='form image' />

                <div className="form">
                    {/* register form */}

                    <div className="pt-[45px] pb-1 container  md:w-[790px] bg-white  rounded-[10px]">

                        <div className="text-center pb-[10px]">
                            <h2>Welcome to the <span className='h2-span text-secondary'>Doyos</span> Call-Back Service. </h2>
                            <p className="pt-[20px]">Please complete the form below and make sure that all the details mentioned are accurate before submitting, so that we can contact you and meet your needs. Our superior customer service quality sets our company apart from the competition.</p>
                        </div>

                        <h2 className='py-[20px] text-center'>Call Back Request </h2>
                        <form onSubmit={handleOnSubmit} className="h-[auto] flex flex-col gap-[25px] rounded-[10px]  p-[30px]">

                            <input className="border rounded-[10px] p-[15px]" name="first-name" type="text" placeholder="First Name" />
                            <input className="border rounded-[10px] p-[15px]" name="last-name" type="text" placeholder="Last Name" />
                            <div className="border rounded-[10px] p-[8px]">
                                <CountryCombobox onChange={handleOnChange} />
                            </div>

                            <input className="border rounded-[10px] p-[15px]" name="phone-no" type="tel" placeholder="Phone Number (+01...)" />

                            <input className="border rounded-[10px] p-[15px]" name="email" type="email" placeholder="Email" />
                            <input className="border rounded-[10px] p-[15px]" name="company-name" type="text" placeholder="Company Name (if applicable)" />


                            <div>

                                <input className="border w-full rounded-[10px] p-[15px]" id="call-time" type="time" name="call-time" placeholder='Time to Call' />
                                <p className='text-[#9DAAA7]'>
                                    Set Time To Call
                                </p>
                            </div>


                            <select name="platform" id="" className="border rounded-[10px] p-[15px] appearance-none">
                                <option value="" disabled selected>Select Department</option>
                                <option value="mt5">MetaTrader 5 (MT5)</option>
                                <option value="mt5 android">MT5 Android</option>
                                <option value="mt5 ios">MT5 Mac/IOS</option>
                                {/* dynamic options should be here */}
                            </select>


                            <Button type="submit" className="w-full h-[45px] pb-2 " variant="secondary">Submit</Button>

                        </form>
                    </div>

                </div>
            </section>

            <div className="container  mb-[80px] bg-secondary h-[290px] rounded-[24px] flex flex-col md:flex-row items-center justify-around">
                <h2 className='text-white'>Want to skip ahead?</h2>
                {/* redirect to open demo account */}
                <Link href="/try-free-demo">
                    <Button className='bg-white text-16px md:text-[24px] text-primary max-w-[200px] md:min-w-[300px] h-40px md:h-[70px] hover:bg-primary hover:text-white'>Open an Account</Button>
                </Link>

            </div>
        </div>
    );
};

export default CallBackRequest;
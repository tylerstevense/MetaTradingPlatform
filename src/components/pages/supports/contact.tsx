"use client"
import CurrencyConvertor from '@/components/molecules/currency-converter';
import HeroSection from '@/components/molecules/hero-section';
import PipCalculator from '@/components/molecules/pip-calculator';
import SectionHead from '@/components/molecules/section-head';
import { Button } from '@/components/ui/button';
import CountryCombobox from '@/components/ui/country-combobox';
import React, { ReactNode } from 'react';
import { FormEvent } from "react";

const Contact = () => {
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData);
    };

    return (
        <div>
            <HeroSection
                backgroundUrl="/images/pages/supports/ContactBanner.png"
                heading={<>Contact</>}
            />
            <section className='section container'>
                <h2 className='text-center section'>Contact Information</h2>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px]'>
                    {contactInfo.map((item) => (
                        <div key={item.id} className='border rounded-lg p-5 min-w-[300px] h-[110px]'>
                            <p>{item.title}</p>
                            {item.info}
                        </div>
                    ))}
                </div>
            </section>


            {/* user info submission form */}
            <form className="section" onSubmit={handleOnSubmit}>

                <div className="text-center">
                    <h2> Send Us a Message </h2>
                    <p className="py-[30px]"> Please complete the form below to submit your query, and our customer support experts will assist you shortly.</p>
                </div>

                <div className="flex flex-wrap items-start justify-center gap-0 md:gap-[50px]">

                    <div className="left-input-area pt-[40px] flex flex-col gap-[20px] w-[400px] max-w-[400px]">

                        <div className="input-style">
                            <label>First Name</label>
                            <input type="text" placeholder='Your First Name' />
                        </div>
                        <div className="input-style">
                            <label>Phone</label>
                            <input type="number" placeholder='+880...' />
                        </div>
                        <div className="input-style">
                            <label>Phone</label>
                            <input type="email" placeholder='Your Email' />
                        </div>
                    </div>

                    <div className="right-input-area pt-[40px] flex flex-col gap-[20px] w-[400px] max-w-[400px]">
                        <div className="input-style">
                            <label>Last Name</label>
                            <input type="text" placeholder='Your First Name' />
                        </div>
                        <div className="input-style">
                            <label>Select Country</label>
                            <div className="border rounded-[8px]">
                                <CountryCombobox onChange={(e: any) => console.log(e.target.value)} />
                            </div>
                        </div>
                        <div className="input-style">
                            <label>Doyos Account Number</label>
                            <input type="email" placeholder='Your Email' />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-[10px] mt-[10px]">
                    <input type="checkbox" name="is-areed" id="" />
                    <p>Please note that by submitting this form you accept the terms and conditions</p>
                </div>

                <Button type="submit" className="w-1/5 mt-[20px] flex mx-auto"> Submit </Button>

            </form>

        </div>
    );
};

export default Contact;

const contactInfo = [
    {
        id: 1,
        title: "Call Us 24/7",
        info: [<p key={1} className='font-bold'>+971551153124</p>]
    },
    {
        id: 2,
        title: "Mail Us",
        info: [<p key={3} className='font-bold'>contact@doyos.com</p>],
    },
    {
        id: 3,
        title: "Abuse Department",
        info: [<p key={1} className='font-bold'>abuse@doyos.com</p>]
    },
    {
        id: 4,
        title: "Report to us",
        info: [<p key={3} className='font-bold'>complaiance@doyos.com</p>]
    },
    {
        id: 5,
        title: "Sells office, UAE",
        info: [<p key={1} className='font-bold'>Office No:802, Centurion Star Tower</p>, <p className='font-bold' key={5}>A1, Port Saeed Road, Dubai, UAE</p>]
    },
    {
        id: 6,
        title: "Registered Address",
        info: [<p key={3} className='font-bold'>14 Poudriere Street Port Louis</p>, <p className='font-bold' key={4}>MAURITIUS</p>],
    },
    // Add more contact information items as needed
];
"use client"
import { Button } from '@/components/ui/button';
import CountryCombobox from '@/components/ui/country-combobox';
import Link from 'next/link';
import React, { FormEvent } from 'react';

const LiveAccountAegister = () => {
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
            {/* register form */}
            <div className="section  bg-[url('/images/register-bg.png')] bg-cover bg-bottom pt-[310px] pb-[140px]">
                <div className="pt-[45px] pb-1 container  md:w-[790px] bg-white rounded-[20px] border">

                    <form onSubmit={handleOnSubmit} className="  h-[auto] flex flex-col gap-[25px] rounded-[10px]  p-[30px]">

                        <div className="text-center">
                            <h2>Live Account Registration</h2>
                            <p>Trade with a trusted global broker, licensed and regulated since 2011.</p>

                            <p className=" font-bold pt-[25px]">Individual Account</p>
                        </div>


                        <input className="border-b p-[15px]" name="first-name" type="text" placeholder="First Name" />
                        <input className="border-b p-[15px]" name="last-name" type="text" placeholder="Last Name" />
                        <input className="border-b p-[15px]" name="email" type="email" placeholder="Email" />


                        {/* <select name="country" id="" className="border-b p-[15px]">
                            <option style={{ color: 'red !important' }} className="input-style" value="" disabled>Select Country</option>
                            <option value="usa">United States</option>
                            <option value="uk">United kingdom</option>
                            <option value="bd">Bangladesh</option>

                        </select> */}


                        <div>

                            <div className="border-b">
                                <CountryCombobox onChange={handleOnChange} />
                            </div>
                            <p className='text-[11px] pt-[5px] px-[15px]'>Based on your selected country, please note that your trading account will be under Doyos Global Limited a company registered in Mauritius</p>
                        </div>

                        <div>
                            <input className="border-b p-[15px] w-full" name="phone-no" type="tel" placeholder="Phone Number (+01...)" />

                            <p className='text-[13px] pt-[5px] px-[15px]'>
                                by submitting you are confirming that you have read, understood and agree to our <Link href="#"> <span className='text-secondary text-[13px]'>terms and conditions</span> </Link>
                            </p></div>

                        <div className='flex flex-col gap-[8px] text-[13.5px]'>
                            <p className='text-[#9DAAA7]'>
                                We care about your privacy. We do not sell or share your information with anyone else.
                            </p>
                            <p className='text-[#9DAAA7]'>
                                I acknowledge your warning that Doyos and Contract for Differences may not be appropriate products for me, but I
                                still wish to proceed with my application. I confirm that I understand the risks associated with Doyos trading
                            </p>
                            <p className='text-[#9DAAA7]'>
                                I confirm that the provided information is true and correct.
                            </p>
                        </div>


                        <Button type="submit" className="w-full h-[45px] " variant="secondary">Submit</Button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default LiveAccountAegister;
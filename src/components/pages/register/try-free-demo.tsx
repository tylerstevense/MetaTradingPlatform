"use client"
import { Button } from "@/components/ui/button";
import CountryCombobox from "@/components/ui/country-combobox";
import { FormEvent } from "react";

const TryFreeDemo = () => {
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData);
    };
    const handleOnChange = (e: any) => {
        console.log(e.target.value);
    }
    return (
        <>
            {/* register form */}
            <div className="section bg-[url('/images/open-demo-bg.png')] bg-cover bg-bottom pt-[30px] pb-[140px]">
                <div className="pt-[45px] pb-1 container  md:w-[790px] bg-white border rounded-[10px]">

                    <div className="text-center pb-[10px]">
                        <h2>Open Demo Account For Free</h2>
                    </div>
                    <form onSubmit={handleOnSubmit} className="h-[auto] flex flex-col gap-[25px] rounded-[10px]  p-[30px]">

                        <input className="border rounded-[10px] p-[15px]" name="first-name" type="text" placeholder="First Name" />
                        <input className="border rounded-[10px] p-[15px]" name="last-name" type="text" placeholder="Last Name" />
                        <div className="border rounded-[10px] p-[8px]">
                            <CountryCombobox onChange={handleOnChange} />
                        </div>

                        <input className="border rounded-[10px] p-[15px]" name="phone-no" type="tel" placeholder="Phone Number (+01...)" />

                        <input className="border rounded-[10px] p-[15px]" name="email" type="email" placeholder="Email" />
                        <input className="border rounded-[10px] p-[15px]" name="company-name" type="text" placeholder="Company Name (if applicable)" />


                        <select name="platform" id="" className="border rounded-[10px] p-[15px] appearance-none">
                            <option value="" disabled selected>Select Platform</option>
                            <option value="mt5">MetaTrader 5 (MT5)</option>
                            <option value="mt5 android">MT5 Android</option>
                            <option value="mt5 ios">MT5 Mac/IOS</option>
                            {/* dynamic options should be here */}
                        </select>

                        <select name="account-type" id="" className="border rounded-[10px] p-[15px] appearance-none">
                            <option value="" disabled selected>Select Account Type</option>
                            <option value="regular">Regular Account</option>
                            <option value="prop-funding">Prop Funding</option>
                            <option value="demo">Demo Account</option>
                            {/* dynamic options should be here */}
                        </select>

                        <select name="deposit" id="" className="border rounded-[10px] p-[15px] appearance-none">
                            <option value="" disabled selected>Deposit Amount</option>
                            <option value="500">500$</option>
                            <option value="1000">1000$</option>
                            <option value="1500">1500$</option>
                            {/* dynamic options should be here */}
                        </select>
                        <select name="currency" id="" className="border rounded-[10px] p-[15px] appearance-none">

                            <option value="" disabled selected>Set Base Currency</option>
                            <option value="bdt">BDT</option>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                            <option value="jpy">JPY</option>
                            <option value="aud">AUD</option>
                            {/* dynamic options should be here */}
                        </select>

                        <Button type="submit" className="w-full h-[45px] pb-2 " variant="secondary">Submit</Button>

                    </form>
                </div>
            </div>
        </>
    )
}
export default TryFreeDemo;
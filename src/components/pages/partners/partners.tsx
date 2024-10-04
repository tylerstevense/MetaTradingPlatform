"use client";
import MostPopularCard from "@/components/molecules/most-popular-card";
import HowItWorks from "../how-it-works-section";
import FeatureCard from "@/components/molecules/feature-card";
import LucrativeCommisionIcon from "@/components/icons/introducing-broker-section/lucrative-commision";
import AutomatedStatIcon from "@/components/icons/introducing-broker-section/automated-statistics";
import RegularPaymentIcon from "@/components/icons/introducing-broker-section/regular-payment-instant-withdrawals";
import MarketingToolsIcon from "@/components/icons/introducing-broker-section/marketing-tools";
import LocalizedServicesIcon from "@/components/icons/introducing-broker-section/localized-services";
import MultilingualSupportIcon from "@/components/icons/introducing-broker-section/multilingual-support";
import RegulatedIcon from "@/components/icons/clients-and-referrals-section/regulated-trading-environment";
import InstrumentsIcon from "@/components/icons/clients-and-referrals-section/instruments";
import LeverageIcon from "@/components/icons/clients-and-referrals-section/leverage";
import DeepIcon from "@/components/icons/clients-and-referrals-section/deep-liquidity";
import Mt4Mt5Icon from "@/components/icons/clients-and-referrals-section/mt4-mt5-platform";
import UltraFastIcon from "@/components/icons/clients-and-referrals-section/ultra-fast-execution";
import ExecutiveToolsIcon from "@/components/icons/clients-and-referrals-section/executive-tools";
import AwardIcon from "@/components/icons/clients-and-referrals-section/award-wining-market-research";
import FreeVpsIcon from "@/components/icons/clients-and-referrals-section/free-vps";
import { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import CountryCombobox from "@/components/ui/country-combobox";


const Partners = () => {
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData);
    };
    const handleOnChange = (e: any) => {
        console.log(e.target.value);
    }
    return (
        <main>
            <MostPopularCard
                image="/images/pages/partners/partners-hero-img.png"
                heading={
                    <>

                        Become a &nbsp;
                        <span className="h2-span text-secondary">Doyos</span>
                        &nbsp;IB
                    </>
                }
                paragraphs={[
                    <>
                        Earn up to $8 per lot with every active trader you introduce.&nbsp;
                    </>,

                ]}
                imageLeft={false}
                buttonList={[
                    { id: 1, text: "Start Now", link: "/try-free-demo", variant: "secondary" },

                ]}
            />


            <div className="section get-gradient">
                <h2 className="text-center">Why Become an Doyos Introducing Broker</h2>
                <div className="section container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-[50px] justify-center">

                    {CardData.map((item) => {
                        return (
                            <div className="h-[390px] max-w-[380px] rounded-[40px] bg-white flex items-center " key={item.id}>
                                <FeatureCard details={{ ...item, steps: false }} />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Second Icon Section */}
            <div className="section">
                <h2 className="text-center">What Your Clients & Referrals Get</h2>
                <div className="section container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-[50px] justify-center">

                    {CardData2.map((item) => {
                        return (

                            <FeatureCard key={item.id} details={{ ...item, steps: false, hasBorder: false }} />

                        );
                    })}
                </div>
            </div>
            {/* Master IB Section */}
            <div className="container">
                <MostPopularCard
                    image="/images/pages/partners/master.png"
                    heading={
                        <>
                            Master IBs&nbsp;
                        </>
                    }
                    paragraphs={[
                        <>
                            Got a network of Introducing Brokers you want to bring to Doyos?&nbsp;
                        </>,
                        <>
                            Become a Master IB and earn generous commissions on a multi-tiered basis.
                        </>,
                        <>
                            Our partner portal automatically calculates your commissions and profits based
                            on the trading volume of the clients of each IB you introduce, earning you
                            exponential lifetime returns.
                        </>,
                        <>
                            Get in touch to find out more.
                        </>
                    ]}
                    imageLeft={true}
                    buttonList={[
                        { id: 1, text: "Become an IB", link: "/partner-login", variant: "default" },

                    ]}
                />
            </div>

            {/* register form */}
            <div className="section bg-[url('/images/market-and-platform-bg.png')] bg-cover bg-bottom pt-[30px] pb-[140px]">
                <div className="pt-[45px] pb-1 container  md:w-[790px] rounded-[15px] border">
                    <div className="border-[5px] border-secondary"></div>

                    <form onSubmit={handleOnSubmit} className=" bg-white h-[auto] flex flex-col gap-[25px] rounded-[10px]  p-[30px]">

                        <div className="text-center">
                            <h2>Become a Doyos Partner Today</h2>
                            <p>Are you ready to take your business to the next level ?</p>
                        </div>


                        <input className="border-b p-[15px]" name="first-name" type="text" placeholder="First Name" />
                        <input className="border-b p-[15px]" name="last-name" type="text" placeholder="Last Name" />
                        <input className="border-b p-[15px]" name="email" type="email" placeholder="Email" />
                        <input className="border-b p-[15px]" name="company-name" type="text" placeholder="Company Name (if applicable)" />
                        <input className="border-b p-[15px]" name="website" type="url" placeholder="Website (if applicable)" />

                        {/* <select name="country" id="" className="border-b p-[15px]">
                            <option style={{ color: 'red !important' }} className="input-style" value="" disabled>Select Country</option>
                            <option value="usa">United States</option>
                            <option value="uk">United kingdom</option>
                            <option value="bd">Bangladesh</option>

                        </select> */}


                        <div className="border-b">
                            <CountryCombobox onChange={handleOnChange} />
                        </div>

                        <input className="border-b p-[15px]" name="phone-no" type="tel" placeholder="Phone Number (+01...)" />

                        <input className="border-b p-[15px]" name="doyos-no" type="tel" placeholder="Doyos Account Number (if applicable)" />
                        <input className="border-b p-[15px]" name="worked-with" type="text" placeholder="Brokers worked with" />


                        <Button type="submit" className="w-full h-[45px] " variant="secondary">Submit</Button>

                    </form>
                </div>
            </div>
            {/* how it works section */}
            <div className="pb-[50px]">
                <HowItWorks />
            </div>
        </main>
    )
}
export default Partners;
const CardData = [
    {
        id: 1,
        title: "Lucrative Commission Structures",
        text: "Grow your business exponentially with high commission rates, as well as flexible hybrid rebate and rev share schemes.",
        icon: <LucrativeCommisionIcon className="" />,
    },
    {
        id: 2,
        title: "Automated Statistics",
        text: "Get real-time trading stats & performance metrics to monitor your growth trajectory.",
        icon: <AutomatedStatIcon className="" />,
    },
    {
        id: 3,
        title: "Regular Payments & Instant Withdrawals",
        text: "Get automated payments on a regular basis & access your earnings anywhere, anytime, and through a wide variety of payment options. ",
        icon: <RegularPaymentIcon />,
    },
    {
        id: 4,
        title: "Comprehensive Marketing Tools",
        text: "Make use of ample marketing materials & quality investment research to increase trader activity.",
        icon: <MarketingToolsIcon />,
    },
    {
        id: 5,
        title: "Localized Services",
        text: "Receive local office and event support from a dedicated Orbex team member, specialized in helping you market your business.",
        icon: <LocalizedServicesIcon className="" />,
    },
    {
        id: 6,
        title: "Multilingual Support",
        text: "Schedule one-on-one sessions with your dedicated account manager to optimize your business strategy or contact our team 24/5 for general tech support.",
        icon: <MultilingualSupportIcon />,
    },
];

const CardData2 = [
    {
        id: 1,
        title: "Regulated Trading Environment",

        icon: <RegulatedIcon className="" />,
    },
    {
        id: 2,
        title: "400+ Instruments",

        icon: <InstrumentsIcon className="" />,
    },
    {
        id: 3,
        title: "Leverage up to 1:5000",
        icon: <LeverageIcon className="" />,
    },
    {
        id: 4,
        title: "Deep Liquidity",
        icon: <DeepIcon className="" />,
    },
    {
        id: 5,
        title: "Desktop & Mobile MT4 and MT5 Platforms",
        icon: <Mt4Mt5Icon className="" />,
    },
    {
        id: 6,
        title: "Ultra-Fast Execution",
        icon: <UltraFastIcon className="" />,
    },
    {
        id: 7,
        title: "Exclusive Trading Tools",
        icon: <ExecutiveToolsIcon className="" />,
    },
    {
        id: 8,
        title: "Award-Winning Market Research",
        icon: <AwardIcon className="" />,
    },
    {
        id: 9,
        title: "Free VPS",
        icon: <FreeVpsIcon className="" />,
    },
];


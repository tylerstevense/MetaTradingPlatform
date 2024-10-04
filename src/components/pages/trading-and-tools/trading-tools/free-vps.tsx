"use client"
import CloudShield from "@/components/assets/trading-tools/cloud-shield";
import FastClock from "@/components/assets/trading-tools/fast-clock";
import Rockets from "@/components/assets/trading-tools/rockets";
import Trophies from "@/components/assets/trading-tools/trophies";
import HeroSection from "@/components/molecules/hero-section";
import MostPopularCard from "@/components/molecules/most-popular-card";
import SectionHead from "@/components/molecules/section-head";
import WhyTraderChooseCarousel from "@/components/molecules/why-trader-choose-carousel";
import Image from "next/image";
import HowToGetStarted from "../../how-to-get-started-section";
import InterestedAndChoosePlatform from "../../interested-and-choose-platform-section";
import CountryCombobox from "@/components/ui/country-combobox";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

const FreeVps = () => {
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData);
    };
    return (
        <>

            <HeroSection
                backgroundUrl="/images/pages/trading-and-tools/FreeVpsBanner.png"
                heading={<>
                    Free VPS
                </>} />

            <div className="pt-[80px]">
                <SectionHead
                    details={{
                        H2: (
                            <>
                                Free VPS
                            </>
                        ),
                        p: [
                            <>Doyos offers trading via free VPS on all account types to provide a more stable and secure trading experience.
                            </>,
                        ],

                        buttons: [

                            { id: 1, text: "Start Trading", link: "/", variant: "secondary" },
                        ]

                    }}
                />
            </div>

            <MostPopularCard
                image="/images/pages/trading-and-tools/what-is-vps.png"
                imageLeft={true}
                heading={
                    <>
                        What is
                        &nbsp;
                        <span className="h2-span text-secondary">VPS</span>
                        &nbsp;?
                    </>
                }
                paragraphs={[
                    <>
                        A VPS, or Virtual Private Server, is a virtual computer housed under a parent server.&nbsp;
                    </>,
                    <>It serves as a fully functional computer that is linked to your trading account 24/5, regardless of whether your personal device is on or connected to the internet.
                    </>,
                    <>
                        This means that, in the face of unpredictable threats like computer viruses or internet connection disruptions, the integrity of your trading strategy is not compromised, and your trades can continue to run smoothly with no interruptions.
                    </>,

                ]}

                buttonList={[
                    { id: 1, text: "Apply For VPS", link: "/", variant: "default" },

                ]}
            />

            {/* why traders choose doyos carousol Starts */}
            <div className="section container">
                <h2>
                    Benefits of Free VPS

                </h2>
                <div className="flex flex-col lg:flex-row items-center justify-start min-[1390px]:justify-between gap-10 pt-[90px]">
                    <div className="w-full hidden min-[1390px]:flex">
                        <Image
                            src="/images/pages/trading-and-tools/stock-carousel.png"
                            alt="why-choose-doyos"
                            width={1000}
                            height={1000}
                            className="max-w-[550px] mr-auto ml-auto md:ml-0 h-auto"
                        />
                    </div>
                    <div className="w-full min-[1390px]:max-w-[700px]">
                        <WhyTraderChooseCarousel cards={cards} />
                    </div>
                </div>
            </div>


            {/* user info submission form */}
            <form className="section" onSubmit={handleOnSubmit}>

                <div className="text-center">
                    <h2> Ready to experience the <span className="h2-span text-secondary">benefits</span> of VPS Trading? </h2>
                    <p className="py-[30px]"> To begin your investment journey in the Forex markets, follow these simple steps</p>
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

            <HowToGetStarted />
            <InterestedAndChoosePlatform />
        </>
    )
}

export default FreeVps;


const cards = [
    {
        id: 1,
        image: <FastClock className="" />,
        title: "Ultra-Fast Execution",
        text: "Experience an NDD trading environment that employs the latest technology to execute trading orders in just 0.03 seconds (average order execution speed).",
    },
    {
        id: 2,
        image: <Rockets className="" />,
        title: "Competitive Trading Conditions",
        text: "Trade with tight spreads starting from 0.0 pips on the internationally acclaimed MetaTrader 4 & 5 platforms.",
    },
    {
        id: 3,
        image: <CloudShield className="" />,
        title: "Top Tier Security",
        text: "Trade responsibly with negative balance protection, highly secure data encryption, and free VPS, and rest assured that client funds remain segregated from proprietary company funds.",
    },
    {
        id: 4,
        image: <Trophies className="" />,
        title: "Award-Winning Research",
        text: "Benefit from daily actionable analytics and market research from the renowned in-house Doyos investment research team; as seen on Bloomberg, CNBC and Refinitiv Eikon.",
    },
    {
        id: 5,
        image: <FastClock className="" />,
        title: "Ultra-Fast Execution",
        text: "Experience an NDD trading environment that employs the latest technology to execute trading orders in just 0.03 seconds (average order execution speed).",
    },
    {
        id: 6,
        image: <Rockets className="" />,
        title: "Competitive Trading Conditions",
        text: "Trade with tight spreads starting from 0.0 pips on the internationally acclaimed MetaTrader 4 & 5 platforms.",
    },
    {
        id: 7,
        image: <CloudShield className="" />,
        title: "Top Tier Security",
        text: "Trade responsibly with negative balance protection, highly secure data encryption, and free VPS, and rest assured that client funds remain segregated from proprietary company funds.",
    },
    {
        id: 8,
        image: <Trophies className="" />,
        title: "Award-Winning Research",
        text: "Benefit from daily actionable analytics and market research from the renowned in-house Doyos investment research team; as seen on Bloomberg, CNBC and Refinitiv Eikon.",
    },
];


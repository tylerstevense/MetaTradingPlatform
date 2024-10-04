import HeroSection from '@/components/molecules/hero-section';
import WhyTraderChooseCarousel from '@/components/molecules/why-trader-choose-carousel';
import Image from 'next/image';
import React from 'react';
import { PricingFeaturesData } from "@/lib/data";
import HowToGetStarted from '../how-to-get-started-section';
import Trophies from '@/components/assets/trading-tools/trophies';
import CloudShield from '@/components/assets/trading-tools/cloud-shield';
import Rockets from '@/components/assets/trading-tools/rockets';
import FastClock from '@/components/assets/trading-tools/fast-clock';
import InterestedAndChoosePlatform from '../interested-and-choose-platform-section';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import SectionHead from '@/components/molecules/section-head';
import clsx from 'clsx';

const Types = () => {
    return (
        <div>
            <HeroSection
                backgroundUrl="/images/pages/accounts/RegularAccountBanner.png"
                heading={<>Account Types</>}
            />

            {/* todo */}
            <section className="container section">

                <div className="flex flex-wrap items-center justify-center gap-[40px]">
                    {PricingFeaturesData.map((pack) => {
                        const { id, accountType, features } = pack;
                        return (
                            <div
                                key={id}
                                className="min-w-[300px] w-[360px] flex flex-col items-center justify-center border rounded-[20px]"
                            >
                                <div
                                    className={clsx(
                                        "w-full relative px-[20px] h-[190px] rounded-t-[20px] flex flex-col items-center justify-center",
                                        { "bg-[#C1282D]": id === 2, "bg-[#C1282D10]": id !== 2 }
                                    )}
                                >
                                    <Image
                                        src={id === 2 ? "/map.png" : "/map1.png"}
                                        alt="map"
                                        fill
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                            //   zIndex: "-1",
                                        }}
                                    />
                                    <div className="relative flex flex-col items-center justify-center space-y-2">
                                        {id === 2 ? (
                                            <p className="text-white">Most Popular</p>
                                        ) : null}
                                        <p
                                            className={clsx({
                                                "text-white text-[16px] md:text-[20px]": id === 2,
                                            })}
                                        >
                                            Account
                                        </p>
                                        <h4
                                            className={clsx("text-[32px] md:text-[40px] font-bold", {
                                                "text-white": id === 2,
                                                "text-gray-600": id !== 2,
                                            })}
                                        >
                                            {accountType}
                                        </h4>
                                        {pack.accountSubType ? (
                                            <p>({pack.accountSubType})</p>
                                        ) : null}
                                    </div>
                                </div>
                                <ul
                                    className={clsx("flex flex-col gap-[10px]", {
                                        "pt-[64px]": id === 2,
                                        "pt-[24px]": id !== 2,
                                    })}
                                >
                                    {features.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center gap-[4px]">
                                                <CheckCircle
                                                    className={clsx({
                                                        "stroke-white fill-secondary w-5 h-5": index < 10,
                                                        "stroke-secondary fill-white w-[18px] h-4":
                                                            index >= 10,
                                                    })}
                                                />
                                                {item}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="w-full p-[32px]">
                                    <Button
                                        variant={id === 2 ? "secondary" : "outline"}
                                        className="w-full"
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>


            {/* todo */}
            <SectionHead
                details={{
                    H2: (
                        <>
                            Which Account Table is &nbsp;
                            <span className="text-secondary">Right</span>&nbsp; for You?
                        </>
                    ),
                    p: [
                        <>
                            MT5 provides all the necessary tools for successful trading includingimproved speed, functionality, and algorithmic efficiency.
                        </>,

                    ],
                }}

            />
            {/* Forex Graph Section -image */}
            <div className="container flex justify-center">
                <Image
                    className="w-full"
                    src="/images/pages/trading-and-tools/account-type-table.png"
                    alt="wallet"
                    width={10000}
                    height={10000}
                />
            </div>

            {/* why traders choose doyos carousol Starts */}
            <div className="section container">
                <h2>
                    Why traders choose&nbsp;
                    <span className="h2-span text-secondary">DOYOS</span>&nbsp;?
                </h2>
                <div className="flex flex-col lg:flex-row items-center justify-start min-[1390px]:justify-between gap-10 pt-[90px]">
                    <div className="w-full hidden min-[1390px]:flex">
                        <Image
                            src="/images/pages/trading-and-tools/why-trade-forex.png "
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

            {/* How to Get Started Section */}
            <HowToGetStarted />
            {/* Interested Markets and Choose Platform */}
            <InterestedAndChoosePlatform />


        </div>
    );
};

export default Types;



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

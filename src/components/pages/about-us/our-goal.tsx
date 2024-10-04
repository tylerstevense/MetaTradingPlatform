/* eslint-disable @next/next/no-img-element */
import FastClock from "@/components/assets/trading-tools/fast-clock";
import Rockets from "@/components/assets/trading-tools/rockets";

import MostPopularCard from "@/components/molecules/most-popular-card";
import WhyTraderChooseCarousel from "@/components/molecules/why-trader-choose-carousel";
import HowToGetStarted from "@/components/pages/how-to-get-started-section";
import Image from "next/image";
import InterestedAndChoosePlatform from "@/components/pages/interested-and-choose-platform-section";
import CloudShield from "@/components/assets/trading-tools/cloud-shield";
import Trophies from "@/components/assets/trading-tools/trophies";
import HeroSection from "@/components/molecules/hero-section";
import Mt5WindowsIcon from "@/components/icons/mt5-windows-icon";
import Mt5AppleIcon from "@/components/icons/mt5-apple-icon";
import Mt5AndroidIcon from "@/components/icons/mt5-android-icon";
import Mt5MultiTerminalIcon from "@/components/icons/mt5-multi-terminal";
import FeatureCard from "@/components/molecules/feature-card";
import SectionHead from "@/components/molecules/section-head";

const OurGoal = () => {
    return (
        <div>
            <HeroSection
                backgroundUrl="/images/pages/about-us/OurGoalBanner.png"
                heading={<>Our Goal</>}
            />


            <MostPopularCard
                image="/images/pages/about-us/about-doyos.png"
                heading={
                    <>

                        About Doyos

                    </>
                }
                paragraphs={[
                    <>
                        We provide one of the safest online trading platforms to our clients and partners. We believe in developing a sustainable workforce through our years-long experience, in-depth knowledge of the financial market and the association of our trusted partners. We have set an example of responsible trading that has made us a reliable platform for services like currency trading, equity indices, energies, precious metals and CFDs.&nbsp;
                    </>,
                    <>
                        We follow a simple and client-friendly operational philosophy that does not only satisfy our clients and partners but also helps us to earn their loyalty. We use latest technologies along our in-depth knowledge of trading to serve our clients with the accordance of their needs. We do not follow or practice customs that can harm our client&apos;s expectations from us.</>
                ]}
                imageLeft={true}
                buttonList={[
                    { id: 1, text: "Open Demo Account", link: "/try-free-demo", variant: "default" },
                    { id: 2, text: "Open Real Account", link: "/register", variant: "secondary" },
                ]}
            />

            <MostPopularCard
                image="/images/pages/about-us/our-mission.png"
                heading={
                    <>
                        Our Mission
                    </>
                }
                paragraphs={[
                    <>
                        To educate, support and empower traders to make informed investment decisions
                    </>,
                    <>
                        Doyos aims to consolidate its reputation as a trusted global brand that leverages the latest in financial technology to provide a seamless, secure and transparent trading experience.
                    </>,
                ]}
                imageLeft={false}


            />
            <MostPopularCard
                image="/images/pages/about-us/our-vision.png"
                heading={
                    <>
                        Our Vision
                    </>
                }
                paragraphs={[
                    <>
                        In a fast-paced industry with endless variables, Doyos strives to establish its ethics, services, and technological advancements as an unwavering constant.
                    </>,
                    <>
                        By ensuring that the education, growth, and profitability of our clients remains our main focus, we aim to create a thriving community of informed and responsible traders with whom our partnership withstands the test of time.
                    </>,
                    <>
                        Our dedication to exemplary customer service and high-quality investment research hopes to elevate the standard of what it means to be a financial services provider, strengthening our position as a market leader in client satisfaction.
                    </>
                ]}
                imageLeft={true}


            />

            {/* why traders choose doyos carousol Starts */}
            <div className="section container">
                <h2>
                    Why traders choose&nbsp;
                    <span className="h2-span text-secondary">DOYOS</span>&nbsp;?
                </h2>
                <div className="flex flex-col lg:flex-row items-center justify-start min-[1390px]:justify-between gap-10 pt-[90px]">
                    <div className="w-full hidden min-[1390px]:flex">
                        <img
                            src="/images/pages/trading-and-tools/popular-indices.png "
                            alt="why-traders-choose-doyos"
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


            <section className="min-w-[1728p] bg-[url('/images/pages/about-us/choose-platform-bg.png')] flex justify-center items-center bg-contain bg-no-repeat">
                <div className="section container get-gradient rounded-2xl">
                    <SectionHead
                        details={{
                            H2: <>Choose Your Platform</>,
                            p: [
                                <>
                                    Trade the world&apos;s most advanced platforms, anywhere, any
                                    time and on any device, without compromising on speed,
                                    precision, or execution.
                                </>,
                            ],
                        }}
                    />
                    <div className="flex flex-wrap items-center justify-center gap-[50px]">
                        {PlatformData.map((item) => {
                            return <FeatureCard key={item.id} details={item} />;
                        })}
                    </div>
                </div>

            </section>


        </div>
    )
};

export default OurGoal;

const PlatformData = [
    {
        id: 1,
        title: "Doyos MT5 Windows",
        icon: <Mt5WindowsIcon className="" />,
    },
    {
        id: 2,
        title: "Doyos MT5 Apple",
        icon: <Mt5AppleIcon className="" />,
    },
    {
        id: 3,
        title: "Doyos MT5 Andoid",
        icon: <Mt5AndroidIcon className="" />,
    },
    {
        id: 4,
        title: "Doyos MT5 Multi-terminal",
        icon: <Mt5MultiTerminalIcon className="" />,
    },
];


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

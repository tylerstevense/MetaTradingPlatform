/* eslint-disable @next/next/no-img-element */
import AppleStore from "@/components/assets/online stores/apple-store";
import GooglePlayStore from "@/components/assets/online stores/google-playstore";
import MicrosoftStore from "@/components/assets/online stores/microsoft-store";
import WebTerminal from "@/components/assets/online stores/web-terminal";
import CloudShield from "@/components/assets/trading-tools/cloud-shield";
import FastClock from "@/components/assets/trading-tools/fast-clock";
import Rockets from "@/components/assets/trading-tools/rockets";
import Trophies from "@/components/assets/trading-tools/trophies";
import HeroSection from "@/components/molecules/hero-section";
import MostPopularCard from "@/components/molecules/most-popular-card";
import OnlineStoresCard from "@/components/molecules/online-stores-card";
import WhyTraderChooseCarousel from "@/components/molecules/why-trader-choose-carousel";
import HowToGetStarted from "@/components/pages/how-to-get-started-section";
import InterestedAndChoosePlatform from "@/components/pages/interested-and-choose-platform-section";
import clsx from "clsx";
import Image from "next/image";

const Mt5MacIOS = () => {
    return (

        <div>
            <HeroSection
                backgroundUrl="/images/pages/trading-and-tools/Mt5-mac-ios-Banner.png"
                heading={<>MT5 Mac/ios</>}
            />

            <MostPopularCard
                image="/images/pages/trading-and-tools/download-mt5-mac-ios.png"
                imageLeft={true}
                heading={
                    <>
                        Download Our <span className="h2-span text-secondary">MT5</span> Platform
                        for mac / ios
                    </>
                }
                paragraphs={[
                    <>
                        Trade on the world&apos;s most powerful platform!
                    </>,
                    <>
                        Trade CFDs on your favourite trading instruments using the MetaTrader 5. A powerful platform for currency pairs and other financial instruments CFD trading, the MetaTrader 5 is free to download on DOYOS

                    </>
                ]}
                buttonList={[
                    { id: 1, text: "Download MetaTrader 5 Platform", link: "/", variant: "secondary" },
                ]}
            />

            <section className="section container grid  grid-cols-1 md:grid-cols-2 items-center max-w-[1350px]">
                {
                    storesData.map((item) => (
                        <OnlineStoresCard key={item.id} data={item}
                        />
                    ))}

            </section>

            <HowToGetStarted
                buttonList={[
                    { id: 1, text: "Open Demo Account", link: "/tree-free-demo", variant: "default" },
                    { id: 2, text: "Open Real Account", link: "/register", variant: "secondary" },
                ]} />


            {/* why traders choose doyos carousol Starts */}
            <div className="section container">
                <h2>
                    Why traders choose&nbsp;
                    <span className="h2-span text-secondary">DOYOS</span>&nbsp;?
                </h2>
                <div className="flex flex-col lg:flex-row items-center justify-start min-[1390px]:justify-between gap-10 pt-[90px]">
                    <div className="w-full hidden min-[1390px]:flex">
                        <img
                            src="/images/pages/trading-and-tools/why-trade-forex.png"
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

            {/* Interested Markets and Choose Platform */}
            <InterestedAndChoosePlatform />

        </div>


    )
}
export default Mt5MacIOS;

const storesData = [
    {
        id: 1,
        icon: <GooglePlayStore className="" />,
        title: "Download MetaTrader 5 for Android",
        subtitle: "",

    },
    {
        id: 2,
        icon: <MicrosoftStore className="" />,
        title: "Download MetaTrader 5 for Windows",
        subtitle: "",

    },
    {
        id: 3,
        icon: <AppleStore className="" />,
        title: "Download MetaTrader 5 for iOS",
        subtitle: " ",

    },
    {
        id: 4,
        icon: <AppleStore className="" />,
        title: "Download MetaTrader 5 for MacOs",
        subtitle: " ",

    },
    {
        id: 5,
        icon: <WebTerminal className="" />,
        title: "DOYOS MT5 Web Terminal",
        subtitle: " Browser based. No Download Needed. (Latest Version)",
    },
    {
        id: 6,
        icon: <WebTerminal className="" />,
        title: "DOYOS MT5 Web Terminal",
        subtitle: "Browser based. No Download Needed. (Old Version) ",

    }

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

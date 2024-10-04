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

const SwapFreeAcccount = () => {
    return (
        <>

            <HeroSection
                backgroundUrl="/images/pages/trading-and-tools/SwapFreeBanner.png"
                heading={<>
                    Swap Free Account
                </>} />

            <div className="pt-[80px]">
                <SectionHead
                    details={{
                        H2: (
                            <>
                                Swap-Free Accounts
                            </>
                        ),
                        p: [
                            <>
                                Our values are important to us.Trade without compromising yours.
                            </>,
                        ],

                        buttons: [

                            { id: 1, text: "Start Trading", link: "/", variant: "secondary" },
                        ]

                    }}
                />
            </div>

            <MostPopularCard
                image="/images/pages/trading-and-tools/swap-free-account.png"
                imageLeft={true}
                heading={
                    <>
                        What are
                        &nbsp;
                        <span className="h2-span text-secondary">Swap-Free Accounts</span>
                        &nbsp;?
                    </>
                }
                paragraphs={[
                    <>
                        Swap-free accounts are modified accounts in which rollover fees are waived to comply with Islamic religious beliefs.&nbsp;
                    </>,
                    <>
                        Swap-free account holders can hold their positions for an unlimited amount of time, without incurring any swap charges.
                    </>,
                    <>
                        The Muslim religion states that business transactions involving interest payments of any kind are forbidden. Therefore, clients providing sufficient proof of religion will be granted a Swap-Free Doyos Account*, where no swap or roll-over interest is charged or incurred on positions held overnight.
                    </>,
                    <>Swaps are rollover fees that a trader pays to a broker to keep a position open overnight. When trading CFDs, swaps can be thought of as a type of interest charge allowing traders to keep a certain contract open for longer.</>
                ]}

                buttonList={[
                    { id: 1, text: "Open Demo Account", link: "/try-free-demo", variant: "default" },
                    { id: 2, text: "Open Real Account", link: "/register", variant: "secondary" },
                ]}
            />

            {/* why traders choose doyos carousol Starts */}
            <div className="section container">
                <h2>
                    Why traders choose&nbsp;
                    <span className="h2-span text-secondary">DOYOS</span>&nbsp;?
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

            <HowToGetStarted />
            <InterestedAndChoosePlatform />
        </>
    )
}

export default SwapFreeAcccount;


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


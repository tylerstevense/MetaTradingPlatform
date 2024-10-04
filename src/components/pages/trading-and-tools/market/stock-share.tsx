import CloudShield from "@/components/assets/trading-tools/cloud-shield";
import FastClock from "@/components/assets/trading-tools/fast-clock";
import Rockets from "@/components/assets/trading-tools/rockets";
import Trophies from "@/components/assets/trading-tools/trophies";
import MostPopularCard from "@/components/molecules/most-popular-card";
import WhyTraderChooseCarousel from "@/components/molecules/why-trader-choose-carousel";
import HowToGetStarted from "@/components/pages/how-to-get-started-section";
import InterestedAndChoosePlatform from "@/components/pages/interested-and-choose-platform-section";
import Image from "next/image";

const StockShare = () => {
    return (
        <div>
            {/* Banner Section */}
            <section className="bg-[url('/images/pages/trading-and-tools/ShareStockBanner.png')] bg-cover bg-center section">
                <div className="container flex items-center h-full">
                    <h1 className="text-white">Share/Stock Trading</h1>
                </div>
            </section>

            {/* Most Popular Card 1 */}
            <MostPopularCard
                image="/images/pages/trading-and-tools/share-stock.png"
                heading={
                    <>
                        Trade The Most Popular&nbsp;
                        <span className="h2-span text-secondary">Forex Trading Pairs</span>
                        &nbsp; with Low Spreads
                    </>
                }
                paragraphs={[
                    <>
                        Trade Stock with a globally recognized broker. Buy and sell CFDs through our bespoke MetaTrader 5 trading platform, and benefit from the award-winning multilingual customer support available 24/7. &nbsp;
                    </>,
                    <>
                        Some believe you must choose between an online broker and a wealth management firm. At DOYOS, you don&apos;t need to compromise. Whether you invest on your own, with an advisor, or a little of both — we can support you.
                    </>

                ]}
                imageLeft={false}
                buttonList={[
                    { id: 1, text: "Open Demo Account", link: "/try-free-demo", variant: "default" },
                    { id: 2, text: "Open Real Account", link: "/register", variant: "secondary" },
                ]}
            />

            {/* Most Popular Card 2 */}
            <MostPopularCard
                image="/images/pages/trading-and-tools/crypto-with-doyos.png"
                heading={
                    <>
                        Why trade&nbsp;
                        <span className="h2-span text-secondary">Share/Stock with DOYOS</span>
                        &nbsp;?
                    </>
                }
                paragraphs={[
                    <>
                        Trade CFDs on over 50+ major, cross, and exotic currency pairs, and benefit from the tightest spreads in the industry.
                    </>
                ]}
                imageLeft={true}
                checkItems={[
                    "Direct Market Access (DMA)",
                    "Small amount of Spread",
                    "Leverage up to 1:500",
                    "Access to 50+ Pairs",
                    "Multilingual support",
                    "Corporate Broker"
                ]}
            />

            {/* Stock Share Table -image */}
            <div className="section container flex justify-center">
                <Image className="md:w-full hidden md:block  " src="/images/pages/trading-and-tools/share-stock-graph.png" alt="Forex Graph" width={10000} height={10000} />
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

            {/* How to Get Started Section */}
            <HowToGetStarted />
            {/* Interested Markets and Choose Platform */}
            <InterestedAndChoosePlatform />

        </div>
    );
};
export default StockShare;


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


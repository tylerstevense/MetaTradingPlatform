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

const MarketIndices = () => {
  return (
    <div>
      <HeroSection
        backgroundUrl="/images/pages/trading-and-tools/IndicesBanner.png"
        heading={<>Indices</>}
      />


      <MostPopularCard
        image="/images/pages/trading-and-tools/trade-indices-online.png"
        heading={
          <>

            Trade &nbsp;
            <span className="h2-span text-secondary">Indices</span>
            &nbsp;Online.
          </>
        }
        paragraphs={[
          <>
            Trade 30+ leading indices as CFDs with zero commission and ultra competitive spreads through a trusted global broker. Buy and sell CFDs through our bespoke MetaTrader 5 trading platform, and benefit from the award-winning multilingual customer support available 24/7.&nbsp;
          </>,
          <>
            Some believe you must choose between an online broker and a wealth management firm. At DOYOS, you don&nbsp;t need to compromise. Whether you invest on your own, with an advisor, or a little of both — we can support you.
          </>,
        ]}
        imageLeft={false}
        buttonList={[
          { id: 1, text: "Open Demo Account", link: "/try-free-demo", variant: "default" },
          { id: 2, text: "Open Real Account", link: "/register", variant: "secondary" },
        ]}
      />

      <MostPopularCard
        image="/images/pages/trading-and-tools/why-trade-indices.png"
        heading={
          <>
            Why trade&nbsp;
            <span className="h2-span text-secondary">Indices with DOYOS</span>
            &nbsp;?
          </>
        }
        paragraphs={[
          <>
            Trade CFDs on over 50+ major, cross, and exotic currency pairs, and benefit from the tightest spreads in the industry.
          </>,
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

      {/* Indices Table Section -image */}
      <div className="section container flex justify-center">
        <Image className="w-full " src="/images/pages/trading-and-tools/indices-table.png" alt="indices table" width={10000} height={10000} />
      </div>

      {/* why traders choose doyos carousol Starts */}
      <div className="section container">
        <h2>
          Why traders choose&nbsp;
          <span className="h2-span text-secondary">DOYOS</span>&nbsp;?
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-start min-[1390px]:justify-between gap-10 pt-[90px]">
          <div className="w-full hidden min-[1390px]:flex">
            {/* issue */}
            <img
              src="/images/pages/trading-and-tools/why-trade-forex.png"
              alt="why-traders-choose-doyos"
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
  )
};

export default MarketIndices;


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

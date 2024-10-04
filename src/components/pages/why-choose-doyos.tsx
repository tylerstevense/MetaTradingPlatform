import Image from "next/image";
import WhyTraderChooseCarousel from "../molecules/why-trader-choose-carousel";
import FastClock from "../assets/trading-tools/fast-clock";
import Rockets from "../assets/trading-tools/rockets";
import CloudShield from "../assets/trading-tools/cloud-shield";
import Trophies from "../assets/trading-tools/trophies";

const WhyChooseDoyos = () => {
  return (
    <div className="section container">
      <h2>
        Why traders choose&nbsp;
        <span className="h2-span text-secondary">DOYOS</span>&nbsp;?
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-start min-[1390px]:justify-between gap-10 pt-[90px]">
        <div className="w-full hidden min-[1390px]:flex">
          <Image
            src="/images/pages/trading-and-tools/why-trade-doyos.png"
            alt="why-choose-doyos"
            width={1000}
            height={1000}
            className="max-w-[540px] mr-auto ml-auto md:ml-0 h-auto"
          />
        </div>
        <div className="w-full min-[1390px]:max-w-[700px]">
          <WhyTraderChooseCarousel cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDoyos;

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

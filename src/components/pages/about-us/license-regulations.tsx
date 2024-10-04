/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import LicenseCarousel from "./license-carousel";
import { useElementSize } from "usehooks-ts";
import HowItWorks from "../how-it-works-section";
import MostPopularCard from "@/components/molecules/most-popular-card";
import WhyTraderChooseCarousel from "@/components/molecules/why-trader-choose-carousel";
import HowToGetStarted from "../how-to-get-started-section";
import InterestedAndChoosePlatform from "../interested-and-choose-platform-section";
import Trophies from "@/components/assets/trading-tools/trophies";
import CloudShield from "@/components/assets/trading-tools/cloud-shield";
import Rockets from "@/components/assets/trading-tools/rockets";
import FastClock from "@/components/assets/trading-tools/fast-clock";

const LicenseRegulation = () => {
  const [squareRef, { width }] = useElementSize();
  return (
    <div>

      {/* hero section */}
      <MostPopularCard
        image="/images/pages/regulations/hero-img.png"
        heading={
          <>

            <span className="h2-span text-secondary">Regulations</span>

          </>
        }
        paragraphs={[
          <>
            Licensed by FSC Mauritius and by the Seychelles FSA Authority, Doyos is a multi-regulated broker with over 10 years of industry-leading service in the financial markets, operating through a number of international offices across the globe
          </>,
        ]}
        imageLeft={false}

        buttonList={[
          { id: 1, text: "Start Now", link: "/try-free-demo", variant: "secondary" },

        ]}
      />

      {/* card section */}
      <section className="bg-[url('/images/pages/regulations/bg.png')] bg-cover bg-center min-h-[820px] flex items-center justify-center py-10">

        <div className="text-white container pb-[35px]">

          <p className="text-white text-center text-[24px]" >
            Since its inception, Doyos has committed to providing access to first-in-class trading and investing solutions through a transparent and multi-regulated environment. Adhering to the highest regulatory standards, Doyos implements a policy of full transparency to ensure traders receive a safe and secure trading experience. Committed to providing an exceptional trading experience backed by expert education, world-leading tools and platforms, and dedicated support, Doyos offers instant access to a wide range of CFD markets including forex, stocks, cryptocurrencies, indices, futures, and commodities.
          </p>

          <div className="flex flex-wrap justify-center items-center py-[50px]  gap-[35px] md:gap-[70px] ">

            <div className="flex items-center flex-col" >
              <Image className="max-w-[250px]" src="/images/pages/regulations/reliable.png" width={1000} height={100} alt="reliable" />
              <h2 className="text-white pt-2">Reliable</h2>
            </div>
            <div className="flex items-center flex-col" >
              <Image className="max-w-[250px]" src="/images/pages/regulations/regulated.png" width={1000} height={100} alt="reliable" />
              <h2 className="text-white">Regulated</h2>
            </div>
            <div className="flex items-center flex-col" >
              <Image className="max-w-[250px]" src="/images/pages/regulations/renowned.png" width={1000} height={100} alt="renowned" />
              <h2 className="text-white">Renowned</h2>
            </div>
          </div>

        </div>

      </section>
      <section className="container section grid grid-cols-1 sm:grid-cols-6 gap-10">
        <div className="flex items-center col-span-4" ref={squareRef}>
          <LicenseCarousel width={width} />
        </div>
        <div className="flex flex-col justify-center gap-10 col-span-2">
          <Image
            src="/images/pages/about-us/licese-regulations/license-sheet.png"
            alt=""
            width={10000}
            height={10000}
            className="max-w-full h-auto mr-auto"
          />
          <div className="flex flex-wrap items-center justify-center gap-[20px]">
            <Button>Open Demo Account</Button>
            <Button variant="secondary">Open Real Acccount</Button>
          </div>
        </div>
      </section>

      {/* how it works section */}
      <div className="section">
        <HowItWorks />
      </div>



      {/* why traders choose doyos carousol Starts */}
      <div className="section container">
        <h2>
          Why traders choose&nbsp;
          <span className="h2-span text-secondary">DOYOS</span>&nbsp;?
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-start min-[1390px]:justify-between gap-10 pt-[90px]">
          <div className="w-full hidden min-[1390px]:flex">
            <img
              src="/images/pages/trading-and-tools/indices-carousel-image.webp "
              alt="why-choose-doyos"

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

export default LicenseRegulation;

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

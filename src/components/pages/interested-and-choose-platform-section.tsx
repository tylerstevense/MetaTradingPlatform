import React from "react";
import ForexIcon from "../icons/forex-icon";
import CommoditiesIcon from "../icons/commodities-icon";
import StocksIcon from "../icons/stocks-icon";
import IndicesIcon from "../icons/indices-icon";
import Mt5WindowsIcon from "../icons/mt5-windows-icon";
import Mt5AppleIcon from "../icons/mt5-apple-icon";
import Mt5AndroidIcon from "../icons/mt5-android-icon";
import Mt5MultiTerminalIcon from "../icons/mt5-multi-terminal";
import FeatureCard from "../molecules/feature-card";
import SectionHead from "../molecules/section-head";

const InterestedAndChoosePlatform = () => {
  return (
    <div className="  bg-[url('/images/market-and-platform-bg.png')] bg-cover bg-bottom pt-[30px] pb-[140px]">
      <div className="section container">
        <SectionHead
          details={{
            H2: <>Interested in Other Markets?</>,
            p: [
              <>
                Doyos offers access to tier-1 bank liquidity across a large
                selection of trading instruments including
              </>,
            ],
          }}
        />
        <div className="flex flex-wrap items-center justify-center gap-[30px] md:gap-[100px]">
          {MarketData.map((item) => {
            return <FeatureCard key={item.id} details={item} />;
          })}
        </div>
      </div>
      <div className="section container">
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
    </div>
  );
};

export default InterestedAndChoosePlatform;

const MarketData = [
  {
    id: 1,
    title: "Forex",
    icon: <ForexIcon className="" />,
  },
  {
    id: 2,
    title: "Commodities",
    icon: <CommoditiesIcon className="" />,
  },
  {
    id: 3,
    title: "Stocks",
    icon: <StocksIcon className="" />,
  },
  {
    id: 4,
    title: "Indices",
    icon: <IndicesIcon className="" />,
  },
];
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

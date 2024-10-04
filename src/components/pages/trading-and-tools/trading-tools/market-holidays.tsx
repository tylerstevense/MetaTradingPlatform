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
import TableWithSection from "@/components/molecules/table-with-section";
import { MarketHolidayTableTabs } from "@/lib/data";
import { MarketHolidayTableData } from "@/lib/data";

const MarketHolidays = () => {
  return (
    <>
      <HeroSection
        backgroundUrl="/images/pages/trading-and-tools/MarketHolidaysBanner.png"
        heading={<>Market Holidays</>}
      />

      <div className="section">
        <SectionHead
          details={{
            H2: (
              <>
                Trading hours and market conditions may be impacted on the
                following dates
              </>
            ),
            p: [
              <>
                Doyos would like to draw your attention to the upcoming trading
                hour changes due to Thanksgiving Day in the US.(23rd of November
                2023). Trading Hour changes will only affect the following
                Financial Instruments
              </>,
            ],
          }}
        />
        <TableWithSection
          data={MarketHolidayTableData}
          tabs={MarketHolidayTableTabs}
        />
      </div>
      <HowToGetStarted />
      <InterestedAndChoosePlatform />
    </>
  );
};

export default MarketHolidays;

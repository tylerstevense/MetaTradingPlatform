import MostPopularCard from "@/components/molecules/most-popular-card";
import HowToGetStarted from "@/components/pages/how-to-get-started-section";
import Image from "next/image";
import InterestedAndChoosePlatform from "@/components/pages/interested-and-choose-platform-section";
import HowItWorks from "@/components/pages/how-it-works-section";
import HeroSection from "@/components/molecules/hero-section";
import WhyChooseDoyos from "@/components/pages/why-choose-doyos";

const ForexTrading = () => {
  return (
    <div>
      <HeroSection
        backgroundUrl="/images/pages/trading-and-tools/ForexTradingBanner.png"
        heading={<>Forex Trading</>}
      />

      <MostPopularCard
        image="/images/pages/trading-and-tools/popular-trade.png"
        heading={
          <>
            Trade The Most Popular&nbsp;
            <span className="h2-span text-secondary">Forex Trading Pairs</span>
            &nbsp; with Low Spreads
          </>
        }
        paragraphs={[
          <>
            Trade Forex with a globally recognized broker. Buy and sell CFDs
            through our bespoke MetaTrader 5 trading platform, and benefit from
            the award-winning multilingual customer support available
            24/7,&nbsp;
          </>,
          <>
            Some believe you must choose between an online broker and a wealth
            management firm. At DOYOS, you don&apos;t need to compromise.
            Whether you invest on your own, with an advisor, or a little of both
            — we can support you.
          </>,
        ]}
        imageLeft={false}
      />
      <MostPopularCard
        image="/images/pages/trading-and-tools/why-trade-forex.png"
        heading={
          <>
            Why trade&nbsp;
            <span className="h2-span text-secondary">Forex with DOYOS</span>
            &nbsp;?
          </>
        }
        paragraphs={[
          <>
            Trade CFDs on over 50+ major, cross, and exotic currency pairs, and
            benefit from the tightest spreads in the industry.
          </>,
        ]}
        imageLeft={true}
        checkItems={[
          "Direct Market Access (DMA)",
          "Small amount of Spread",
          "Leverage up to 1:500",
          "Access to 50+ Pairs",
          "Multilingual support",
        ]}
        buttonList={[
          { id: 1, text: "Open Demo Account", link: "/", variant: "default" },
          { id: 2, text: "Open Real Account", link: "/", variant: "secondary" },
        ]}
      />

      {/* Forex Graph Section -image */}
      <div className="section container flex justify-center">
        <Image
          className="w-full "
          src="/images/pages/trading-and-tools/forexGraph.png"
          alt="Forex Graph"
          width={10000}
          height={10000}
        />
      </div>

      {/* why traders choose doyos carousol Starts */}
      <WhyChooseDoyos />

      {/* How to Get Started Section */}
      <HowToGetStarted />
      {/* Interested Markets and Choose Platform */}
      <InterestedAndChoosePlatform />

    </div>
  );
};

export default ForexTrading;

import CheckTik from "@/components/icons/check-tik-icon";
import FeatureCard from "@/components/molecules/feature-card";
import HeroSection from "@/components/molecules/hero-section";
import MostPopularCard from "@/components/molecules/most-popular-card";
import HowToGetStarted from "../../how-to-get-started-section";
import TableWithSection from "@/components/molecules/table-with-section";
import { SpreadTableData, SpreadTableTabs } from "@/lib/data";
import SectionHead from "@/components/molecules/section-head";
import Spread1 from "@/components/icons/spread-swaps-commision-section/spread-1";
import Spread2 from "@/components/icons/spread-swaps-commision-section/spread-2";
import Spread3 from "@/components/icons/spread-swaps-commision-section/spread-3";
import Spread4 from "@/components/icons/spread-swaps-commision-section/spread-4";
import Spread5 from "@/components/icons/spread-swaps-commision-section/spread-5";
import Spread6 from "@/components/icons/spread-swaps-commision-section/spread-6";

const Spread = () => {
  return (
    <div>
      <HeroSection
        backgroundUrl="/images/pages/trading-and-tools/SpreadBanner.png"
        heading={<>Spread</>}
      />

      <MostPopularCard
        image="/images/pages/trading-and-tools/spread-swap.png"
        heading={<>Spreads, Swaps & Commissions.</>}
        paragraphs={[
          <>
            In keeping with our commitment to the highest ethical standards,
            Doyos offers full transparency regarding fees, execution and the
            company&apos;s pricing model.&nbsp;
          </>,
        ]}
        imageLeft={false}
        buttonList={[
          { id: 1, text: "Start Trading", link: "/try-free-demo", variant: "secondary" },
        ]}
      />

      {/* issues >> need to update icons and texts */}
      <div className="get-gradient section">
        <h2 className="text-center pt-[20px] pb-[60px]">
          Spreads, Swaps & Commissions
        </h2>
        <div className="container grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 place-items-center gap-[50px]">
          {CardData.map((item) => {
            return (
              <FeatureCard key={item.id} details={{ ...item, steps: false }} />
            );
          })}
        </div>
      </div>

      {/* Spreads, Commissions and Fees table here >>> issues */}
      <section className="section">
        <SectionHead
          details={{
            H2: <>Spreads, Commissions and Fees</>,
            p: [
              <>
                For a full list of spreads, commissions and fees on all
                financial assets offered, please see the table below
              </>,
            ],
          }}
        />
        <TableWithSection data={SpreadTableData} tabs={SpreadTableTabs} />
      </section>

      <HowToGetStarted />
    </div>
  );
};
export default Spread;

const CardData = [
  {
    id: 1,
    title: "NDD (No Dealing Desk) Execution",

    icon: <Spread1 />,
  },
  {
    id: 2,
    title: "NDD (No Dealing Desk) Execution",

    icon: <Spread2 />,
  },
  {
    id: 3,
    title: "NDD (No Dealing Desk) Execution",

    icon: <Spread3 />,
  },
  {
    id: 4,
    title: "NDD (No Dealing Desk) Execution",
    icon: <Spread4 />,
  },
  {
    id: 5,
    title: "NDD (No Dealing Desk) Execution",
    icon: <Spread5 />,
  },
  {
    id: 6,
    title: "NDD (No Dealing Desk) Execution",
    icon: <Spread6 />,
  },

];

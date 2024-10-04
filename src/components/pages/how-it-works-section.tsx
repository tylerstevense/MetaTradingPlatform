import ClientsTradingIcon from "../icons/how-it-works-section/clients-trading";
import PartnersLinkIcon from "../icons/how-it-works-section/partners-link";
import RegisterIBAccountIcon from "../icons/how-it-works-section/register-IB-account";
import WithdrawProfitIcon from "../icons/how-it-works-section/withdraw-profit";
import FeatureCard from "../molecules/feature-card";
import SectionHead from "../molecules/section-head";
import { Button } from "../ui/button";

const HowItWorks = () => {
  return (
    <div className="section container">
      <SectionHead
        details={{
          H2: <>How it Works</>,
          p: [
            <>
              Got a community of traders who trust your judgement? Introduce
              them to Doyos and profit from generous lifetime commissions on
              every lot they trade.
            </>,
          ],
        }}
      />
      <div className="flex flex-wrap items-center justify-center gap-[50px]">
        {CardData.map((item) => {
          return (
            <FeatureCard key={item.id} details={{ ...item, steps: true, hasBorder: true }} />
          );
        })}
      </div>
      <div className="flex justify-center pt-[50px]">

        <Button className="px-[30px]" variant="secondary"> Start Now </Button>
      </div>
    </div>
  );
};

export default HowItWorks;

const CardData = [
  {
    id: 1,
    title: "Register for an IB account",
    icon: <RegisterIBAccountIcon className="h-[82px]" />,
  },
  {
    id: 2,
    title: "Publish your partner link",
    icon: <PartnersLinkIcon className="" />,
  },
  {
    id: 3,
    title: "Get your clients trading",
    icon: <ClientsTradingIcon className="" />,
  },
  {
    id: 4,
    title: "Withdraw your profits!",
    icon: <WithdrawProfitIcon className="" />,
  },
];

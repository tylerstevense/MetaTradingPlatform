import Link from "next/link";
import AccountIcon from "../icons/account-icon";
import SignupIcon from "../icons/signup-icon";
import TradeIcon from "../icons/trade-icon";
import FeatureCard from "../molecules/feature-card";
import SectionHead from "../molecules/section-head";
import { Button } from "../ui/button";

const HowToGetStarted = ({
  buttonList = [],
}: {
  buttonList?: {
    id: number;
    text: string;
    link: string;
    variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  }[];
}) => {
  return (
    <div className="get-gradient">
      <div className="section container">
        <SectionHead
          details={{
            H2: <>How to Get Started</>,
            p: [
              <>
                To begin your investment journey in theForex markets, follow
                these simple steps
              </>,
            ],
          }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center gap-[10px] ">
          {CardData.map((item) => {
            return <FeatureCard key={item.id} details={item} />;
          })}
        </div>
        <div className="flex section justify-center items-center">
          {buttonList.length ? (
            <div className="flex flex-wrap items-center gap-[22px]">
              {buttonList.map((item) => {
                const { id, text, link, variant } = item;
                return (
                  <Link key={id} href={link}>
                    <Button variant={variant}>{text}</Button>
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default HowToGetStarted;

const CardData = [
  {
    id: 1,
    title: "Sign Up",
    text: "Create an account in minutes & upload your documents.",
    icon: <SignupIcon className="" />,
  },
  {
    id: 2,
    title: "Find your account",
    text: "Make instant deposits to your Doyos Wallet via debit card, wire transfer or your preferred online payment method.",
    icon: <AccountIcon className="" />,
  },
  {
    id: 3,
    title: "Trade",
    text: "Download your favorite trading platform on your device of choice & begin trading.",
    icon: <TradeIcon className="" />,
  },
];

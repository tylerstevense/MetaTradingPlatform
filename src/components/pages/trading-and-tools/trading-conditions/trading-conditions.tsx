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
import Faq from "@/components/molecules/faq";
import { conditionsFAQ } from "@/lib/data";

const TradingConditions = () => {
    return (
        <>

            <HeroSection
                backgroundUrl="/images/pages/trading-and-tools/TradingConditionsBanner.png"
                heading={<>
                    Trading Conditions
                </>} />

            <div className="pt-[80px]">
                <SectionHead
                    details={{

                        p: [
                            <>
                                The following terms and conditions form an integral part of your agreement with Doyos Global Limited and shall be read carefully; Doyos Global Limited does not bear any liability for clients who fail to comply with them. For more information, please contact us.
                            </>,

                        ],

                        buttons: [

                            { id: 1, text: "Learn More", link: "/", variant: "secondary" },
                        ]

                    }}
                />
            </div>
            <Faq data={conditionsFAQ} />


            {/* issues -todo--accrodion */}

            <HowToGetStarted />
            <InterestedAndChoosePlatform />
        </>
    )
}

export default TradingConditions;



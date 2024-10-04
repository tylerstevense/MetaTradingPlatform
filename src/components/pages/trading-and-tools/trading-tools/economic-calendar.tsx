import SectionHead from "@/components/molecules/section-head";
import CurrencyConvertor from "@/components/molecules/currency-converter";
import InterestedAndChoosePlatform from "../../interested-and-choose-platform-section";
import WhyChooseDoyos from "../../why-choose-doyos";
import HowToGetStarted from "../../how-to-get-started-section";
import Image from "next/image";

const EconomicCalendar = () => {
    return (
        <div className="">
            <div className="section get-gradient">
                <SectionHead
                    details={{
                        H2: (
                            <>
                                Designed to offer&nbsp;
                                <span className="text-secondary">Everything</span>&nbsp;a trader
                                needs!
                            </>
                        ),
                        p: [
                            <>
                                MT5 provides all the necessary tools for successful trading
                                includingimproved speed, functionality, and algorithmic
                                efficiency.
                            </>,
                        ],
                    }}
                />
                <div className="flex justify-center items-center container">
                    <Image alt="economic calendar image" src="/images/pages/trading-and-tools/economic-calendar-img.png" width={1000} height={1000} />
                </div>
            </div>
            <WhyChooseDoyos />
            <HowToGetStarted />
            <InterestedAndChoosePlatform />
        </div>
    );
};

export default EconomicCalendar;

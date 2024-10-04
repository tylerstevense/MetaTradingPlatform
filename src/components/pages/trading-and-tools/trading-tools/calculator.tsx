import SectionHead from "@/components/molecules/section-head";
import CurrencyConvertor from "@/components/molecules/currency-converter";
import PipCalculator from "@/components/molecules/pip-calculator";
import InterestedAndChoosePlatform from "../../interested-and-choose-platform-section";
import WhyChooseDoyos from "../../why-choose-doyos";
import HowToGetStarted from "../../how-to-get-started-section";

const Calculator = () => {
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
        <div className="flex flex-wrap items-start justify-center gap-[50px]">
          <div className="pt-[40px] flex flex-col gap-[20px] w-[400px] max-w-[400px]">
            <h3 className="text-center text-[16px] md:text-[20px] font-bold">
              Currency Calculator
            </h3>
            <CurrencyConvertor />
          </div>
          <div className="pt-[40px] flex flex-col gap-[20px] w-[400px] max-w-[400px]">
            <h3 className="text-center text-[16px] md:text-[20px] font-bold">
              PIP Calculator
            </h3>
            <PipCalculator />
          </div>
        </div>
      </div>
      <WhyChooseDoyos />
      <HowToGetStarted />
      <InterestedAndChoosePlatform />
    </div>
  );
};

export default Calculator;

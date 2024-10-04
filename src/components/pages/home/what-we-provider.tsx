import Clocks from "@/components/assets/home/what-we-provide/clocks";
import EdTrading from "@/components/assets/home/what-we-provide/ed-training";
import Fast from "@/components/assets/home/what-we-provide/fast";
import Secure from "@/components/assets/home/what-we-provide/secure";
import Trading from "@/components/assets/home/what-we-provide/trading";
import Platforms from "@/components/assets/home/what-we-provide/platforms";

const WhatWeProvide = () => {
  const NumberPortfolio = [
    {
      id: 0,
      text: "PIP SPREADS",
      number: "0.0",
    },
    {
      id: 1,
      text: "LEVERAGE",
      number: "1.500",
    },
    {
      id: 2,
      text: "MICRO LOT TRADING",
      number: "0.01",
    },
    {
      id: 3,
      text: "TRADABLE INSTRUMENTS",
      number: "+2250",
    },
    {
      id: 4,
      text: "DEDICATED SUPPORT",
      number: "24/7",
    },
  ];
  const ForexTradingSolution = [
    {
      id: 0,
      text: "24/7 Customer Services Available",
      graphic: <Clocks />,
    },
    {
      id: 1,
      text: "Fast Execution Speed",
      graphic: <Fast />,
    },
    {
      id: 2,
      text: "MetaTrader 5 Platform",
      graphic: <Trading />,
    },
    {
      id: 3,
      text: "Free Education and Training",
      graphic: <EdTrading />,
    },
    {
      id: 4,
      text: "Windows, Android & Mac/iOS support",
      graphic: <Platforms />,
    },
    {
      id: 5,
      text: "Secured Platforms",
      graphic: <Secure />,
    },
  ];
  return (
    <section>
      <div className="bg-primary ">
        <div className="container py-12 flex flex-wrap items-center justify-center md:justify-between gap-3">
          {NumberPortfolio.map((item) => {
            return (
              <div
                className="flex flex-col items-center jusitfy-center"
                key={item.id}
              >
                <p className="h1-span text-white">{item.number}</p>
                <p className="font-semibold text-white text-xs lg:text-[16px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-muted bg-[url('/images/market-and-platform-bg.png')] bg-cover bg-bottom section">
        <div className="container">
          <h2 className="text-center">
            We <span className="text-secondary h2-span">Provide Best</span>{" "}
            Forex Trading Solution <br /> in Town with 14+ years of experience
          </h2>
          <p className="pt-10 text-center">
            We provide the proper trading environment to the clients. We offer
            high quality order execution, no commission on deposits and <br />
            withdrawals and wide selection of instruments as we believe that
            these are the base of the best trading strategies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-16 pb-5">
            {ForexTradingSolution.map((item) => {
              return (
                <div key={item.id} className="p-5 bg-white w-full rounded-[10px] md:rounded-[20px] flex flex-col items-center justify-center hover:shadow-lg transition ease-in-out animation-fade-up">
                  {item.graphic}
                  <p className="text-center">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;

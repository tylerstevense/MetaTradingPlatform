import Comodities from "@/components/assets/home/instruments/comodities";
import Crypto from "@/components/assets/home/instruments/crypto";
import Forex from "@/components/assets/home/instruments/forex";
import Indices from "@/components/assets/home/instruments/indices";
import Metals from "@/components/assets/home/instruments/metas";
import Stock from "@/components/assets/home/instruments/stock";

const Instruments = () => {
  const ForexTradingSolution = [
    {
      id: 0,
      text: "Forex",
      description:
        "Trade Forex with a globally recognized broker. Buy and sell CFDs through our bespoke MetaTrader 5 trading platform, and benefit from the award-winning multilingual customer support available 24/7.",
      graphic: <Forex />,
    },
    {
      id: 1,
      text: "Indices",
      description:
        "Trade 30+ leading indices as CFDs with zero commission and ultra competitive spreads through a trusted global broker.",
      graphic: <Indices />,
    },
    {
      id: 2,
      text: "Commodities",
      description:
        "Trade Forex with a globally recognized broker. Buy and sell CFDs through our bespoke MetaTrader 5 trading platform, and benefit from the award-winning multilingual customer support available 24/7.",
      graphic: <Comodities />,
    },
    {
      id: 3,
      text: "Crypto",
      description:
        "Explore and trade the most popular cryptocurrencies like Bitcoin, Ethereum, Ripple, etc. with DOYOS and take advantage of this volatile market with significant pricing shifts, suitable for experienced traders who have an aggressive trading approach.",
      graphic: <Crypto />,
    },
    {
      id: 4,
      text: "Stock",
      description:
        "Buy and Sell shares on over 20,000 equities of the largest multinational companies listed on the top stock exchanges in the world in market capitalization.",
      graphic: <Stock />,
    },
    {
      id: 5,
      text: "Metals",
      description:
        "Diversify your portfolio by trading metals, such as gold and silver and unmask new trading opportunities. With a worldwide network of the most prominent precious metal dealers, producers, consumers, and speculators in the industry.",
      graphic: <Metals />,
    },
  ];
  return (
    <section className="bg-muted section rounded-bl-[20px] md:rounded-bl-[40px] rounded-tr-[20px] md:rounded-tr-[40px]">
      <div className="container">
        <h2 className="text-center">Instruments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-16 pb-5">
          {ForexTradingSolution.map((item) => {
            return (
              <div
                className="p-5 bg-white w-full rounded-[10px] md:rounded-[20px] flex items-center justify-start gap-5 hover:shadow-lg transition ease-in-out"
                key={item.id}
              >
                <div className="flex flex-col items-start justify-center">
                  {item.graphic}
                  <p className="text-center mt-2 font-semibold w-full">
                    {item.text}
                  </p>
                </div>
                <div className="w-auto">
                  <p>
                    {item.description.slice(0, 150)}
                    {item.description.length > 150 ? "..." : null}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Instruments;

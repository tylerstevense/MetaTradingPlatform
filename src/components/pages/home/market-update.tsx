import AustraliaFlag from "@/components/assets/home/market-update/australia-flag";
import CanadaFlag from "@/components/assets/home/market-update/canada-flag";
import ChinaFlag from "@/components/assets/home/market-update/china-flag";
import EuropeanUnionFlag from "@/components/assets/home/market-update/european-union-flag";
import JapanFlag from "@/components/assets/home/market-update/japan-flag";
import NewzealandFlag from "@/components/assets/home/market-update/newzealand-flag";
import SwitzerlandFlag from "@/components/assets/home/market-update/switzerland-flag";
import UAEFlag from "@/components/assets/home/market-update/uae-flag";
import UkFlag from "@/components/assets/home/market-update/uk-flag";
import UsFlag from "@/components/assets/home/market-update/us-flag";

const MarketUpdate = () => {
  return (
    <div className="container section">
      <h2 className="text-center">Market Update</h2>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-11 items-start justify-start min-w-[1200px] mt-10 sticky top-0 mb-3 border-b border-t py-2">
          <div className="col-span-1"></div>
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <p className="font-bold">CAD</p>
            <CanadaFlag />
          </div>
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <p className="font-bold">GBD</p>
            <UkFlag />
          </div>
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <p className="font-bold">USD</p>
            <UsFlag />
          </div>
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <p className="font-bold">CNY</p>
            <ChinaFlag />
          </div>
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <p className="font-bold">JPY</p>
            <JapanFlag />
          </div>
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <p className="font-bold">CHF</p>
            <SwitzerlandFlag />
          </div>
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <p className="font-bold">AUD</p>
            <AustraliaFlag />
          </div>
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <p className="font-bold">NZD</p>
            <NewzealandFlag />
          </div>
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <p className="font-bold">EUR</p>
            <EuropeanUnionFlag />
          </div>
          <div className="flex flex-col gap-[5px] items-center justify-center">
            <p className="font-bold">AED</p>
            <UAEFlag />
          </div>
        </div>
        <div className="min-w-[1200px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <div
                key={item}
                className="grid grid-cols-11 items-center justify-center border-b"
              >
                {item === 1 ? (
                  <CanadaFlag />
                ) : item === 2 ? (
                  <UkFlag />
                ) : item === 3 ? (
                  <UsFlag />
                ) : item === 4 ? (
                  <ChinaFlag />
                ) : item === 5 ? (
                  <JapanFlag />
                ) : item === 6 ? (
                  <SwitzerlandFlag />
                ) : item === 7 ? (
                  <AustraliaFlag />
                ) : item === 8 ? (
                  <NewzealandFlag />
                ) : item === 9 ? (
                  <EuropeanUnionFlag />
                ) : item === 10 ? (
                  <UAEFlag />
                ) : null}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((nums) => {
                  return (
                    <div
                      key={nums}
                      className="font-semibold text-center py-3 my-2"
                    >
                      {nums !== item ? "8.76": ""}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 mt-10">
        <p className="text-green-600 font-semibold">Increased</p>
        <p className="text-secondary font-semibold">Decreased</p>
        <p className="font-semibold">Unchanged</p>
      </div>
    </div>
  );
};

export default MarketUpdate;

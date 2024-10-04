import TradingPlatform from "@/components/pages/home/trading-platform";
import Commodities from "@/components/pages/trading-and-tools/market/commodities";
import Cryptos from "@/components/pages/trading-and-tools/market/cryptos";
import ForexTrading from "@/components/pages/trading-and-tools/market/forex";
import MarketIndices from "@/components/pages/trading-and-tools/market/indices";
import StockShare from "@/components/pages/trading-and-tools/market/stock-share";
import FundingWithdrawal from "@/components/pages/trading-and-tools/trading-conditions/funding-withdrawal";
import SecurityOfFund from "@/components/pages/trading-and-tools/trading-conditions/security-of-fund";
import Spread from "@/components/pages/trading-and-tools/trading-conditions/spread";
import SwapFreeAcccount from "@/components/pages/trading-and-tools/trading-conditions/swap-free-account";
import TradingConditions from "@/components/pages/trading-and-tools/trading-conditions/trading-conditions";
import MetaTrader5 from "@/components/pages/trading-and-tools/trading-platform/meta-trader5";
import Mt5Android from "@/components/pages/trading-and-tools/trading-platform/mt5-android";
import Mt5MacIOS from "@/components/pages/trading-and-tools/trading-platform/mt5-mac-ios";
import Calculator from "@/components/pages/trading-and-tools/trading-tools/calculator";
import EconomicCalendar from "@/components/pages/trading-and-tools/trading-tools/economic-calendar";
import FreeVps from "@/components/pages/trading-and-tools/trading-tools/free-vps";
import MarketHolidays from "@/components/pages/trading-and-tools/trading-tools/market-holidays";

const Page = ({ params }: { params: { child: string } }) => {
  return (
    <div>
      {params.child === "forex" ? (
        <ForexTrading />
      ) : params.child === "cryptos" ? (
        <Cryptos />
      ) : params.child === "stock" ? (
        <StockShare />
      ) : params.child === "commodities" ? (
        <Commodities />
      ) : params.child === "indices" ? (
        <MarketIndices />
      ) : params.child === "meta-trader5" ? (
        <MetaTrader5 />
      ) : params.child === "mt5-ios" ? (
        <Mt5MacIOS />
      ) : params.child === "mt5-android" ? (
        <Mt5Android />
      ) : params.child === "funding-withdrawal" ? (
        <FundingWithdrawal />
      ) : params.child === "spread" ? (
        <Spread />
      ) : params.child === "swap-free-account" ? (
        <SwapFreeAcccount />
      ) : params.child === "security-fund" ? (
        <SecurityOfFund />
      ) : params.child === "trading-conditions" ? (
        <TradingConditions />
      ) : params.child === "calculator" ? (
        <Calculator />
      ) : params.child === "economic-calendar" ? (
        <EconomicCalendar />
      ) : params.child === "free-vps" ? (
        <FreeVps />
      ) : params.child === "market-holidays" ? (
        <MarketHolidays />
      ) : null}
    </div>
  );
};

export default Page;

import OrderTypes from "@/components/molecules/order-types";
import { TTableData, TTableTabs } from "./type";
import AccountTable from "@/components/molecules/account-table";
import Leverage from "@/components/molecules/leverage";
export const MarketHolidayTableTabs: TTableTabs[] = [
  {
    value: "nov23",
    text: "November 23",
  },
  {
    value: "oct23",
    text: "October 23",
  },
  {
    value: "sep23",
    text: "Septerber 23",
  },
  {
    value: "aug23",
    text: "August 23",
  },
  {
    value: "jul23",
    text: "July 23",
  },
];
export const MarketHolidayTableData: TTableData = {
  thead: [
    {
      id: 1,
      key: "product",
      th: "Product",
      subTh: "All instruments",
    },
    {
      id: 2,
      key: "thanks_giving_day",
      th: "Thanksgiving Day 23/11/2023",
      subTh: "Normal Hours",
    },
    {
      id: 3,
      key: "thanks_giving_day_after",
      th: "The Day after Thanksgiving Day 24/11/2023",
      subTh: "Normal Hours",
    },
  ],
  tbody: [
    {
      id: 1,
      rowAsSection: true,
      cells: [
        {
          id: 1,
          key: "product",
          value: "Metals",
        },
      ],
    },
    {
      id: 2,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "product",
          value: "XAUUSD",
        },
        {
          id: 2,
          key: "thanks_giving_day",
          value: "Early Close 21:30",
        },
        {
          id: 3,
          key: "thanks_giving_day_after",
          value: "Early Close 20:45",
        },
      ],
    },
    {
      id: 3,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "product",
          value: "XAUGSD",
        },
        {
          id: 2,
          key: "thanks_giving_day",
          value: "Early Close 20:15",
        },
        {
          id: 3,
          key: "thanks_giving_day_after",
          value: "Early Close 20:30",
        },
      ],
    },
    {
      id: 4,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "product",
          value: "XPDUSD",
        },
        {
          id: 2,
          key: "thanks_giving_day",
          value: "Early Close 20:15",
        },
        {
          id: 3,
          key: "thanks_giving_day_after",
          value: "Early Close 20:30",
        },
      ],
    },
    {
      id: 4,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "product",
          value: "XPTUSD",
        },
        {
          id: 2,
          key: "thanks_giving_day",
          value: "Early Close 20:15",
        },
        {
          id: 3,
          key: "thanks_giving_day_after",
          value: "Early Close 20:30",
        },
      ],
    },
    {
      id: 5,
      rowAsSection: true,
      cells: [
        {
          id: 1,
          key: "product",
          value: "Cash and Future indices",
        },
      ],
    },
    {
      id: 6,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "product",
          value: "US30 cash and Future",
        },
        {
          id: 2,
          key: "thanks_giving_day",
          value: "Early Close 20:00",
        },
        {
          id: 3,
          key: "thanks_giving_day_after",
          value: "Early Close 20:15",
        },
      ],
    },
  ],
};

export const SpreadTableTabs: TTableTabs[] = [
  {
    value: "major_currencies",
    text: "Major Currencies",
  },
  {
    value: "crosses",
    text: "Crosses",
  },
  {
    value: "exotics",
    text: "Exotics",
  },
  {
    value: "cash_indices",
    text: "Cash Indices",
  },
  {
    value: "energies_spreads",
    text: "Energies Spreads",
  },
];
export const SpreadTableData: TTableData = {
  thead: [
    {
      id: 1,
      key: "symbol",
      th: "Symbol",
    },
    {
      id: 2,
      key: "ultimate",
      th: "Ultimate Account",
      subTh: "as low as",
    },
    {
      id: 3,
      key: "pro",
      th: "Pro Account",
      subTh: "as low as",
    },
    {
      id: 4,
      key: "mini",
      th: "Min Account",
      subTh: "as low as",
    },
  ],
  tbody: [
    {
      id: 1,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "EURUSD",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "1.5",
        },
      ],
    },
    {
      id: 2,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "AUDUSD",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "1.5",
        },
      ],
    },
    {
      id: 3,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "GBPUSD",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "1.5",
        },
      ],
    },
    {
      id: 4,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "NZDUSD",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "1.5",
        },
      ],
    },
    {
      id: 5,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "USDCHF",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "1.3",
        },
      ],
    },
    {
      id: 6,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "USDCAD",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "2.1",
        },
      ],
    },
    {
      id: 7,
      rowAsSection: false,
      cells: [
        {
          id: 1,
          key: "symbol",
          value: "USDJPY",
        },
        {
          id: 2,
          key: "ultimate",
          value: "0.0",
        },
        {
          id: 3,
          key: "pro",
          value: "0.0",
        },
        {
          id: 3,
          key: "mini",
          value: "2.1",
        },
      ],
    },
  ],
};

export const PricingFeaturesData = [
  {
    id: 1,
    accountType: "Classic",
    accountSubType: "",
    features: [
      "MT5",
      "Spread 3.0",
      "Upto 1:500 Leverage",
      "Stop Out: 50%",
      "Margin Call: 150%",
      "Execution Type: DMA (NDD)",
      "EA Supported",
      "VPS: Available*",
      "Webinars: Weekly",
      "Education: Basic",
      "24/7 Days Support",
      "Scalping - No",
      "Minimum Deposit $100",
    ],
  },
  {
    id: 2,
    accountType: "Standard",
    features: [
      "MT5",
      "Spread 2.5",
      "Upto 1:200 Leverage",
      "Stop Out: 50%",
      "Margin Call: 150%",
      "Execution Type: DMA (NDD)",
      "EA Supported",
      "VPS: Available*",
      "Webinars: Weekly",
      "Education: Expert",
      "24/7 Days Support",
      "Scalping - No",
      "Minimum Deposit $10K",
    ],
  },
  {
    id: 3,
    accountType: "Standard",
    features: [
      "MT5",
      "Spread 2.0",
      "Upto 1:100 Leverage",
      "Stop Out: 50%",
      "Margin Call: 150%",
      "Execution Type: DMA (NDD)",
      "EA Supported",
      "VPS: Available*",
      "Webinars: Weekly",
      "Education: Expert",
      "24/7 Days Support",
      "Scalping - No",
      "Minimum Deposit $100K",
    ],
  },
];



export const PricingFeaturesData2 = [
  {
    id: 1,
    accountType: "ECN",
    platformName: "MetaTrader5",
    commission: "0.0",
    spreads: 1.3,

  },
  {
    id: 2,
    accountType: "Pro",
    platformName: "MetaTrader5",
    commission: 10,
    spreads: 1.3,
  },
  {
    id: 3,
    accountType: "RAW",
    platformName: "MetaTrader5",
    commission: 6,
    spreads: "0.0",
  },
];

export const conditionsFAQ = {

  qnaList: [
    {
      id: 1,
      title: "Market",
      details:
        "Doyos strives to ensure that the market watch is accurate and prices are obtained from several major banks/liquidity providers/exchanges; in case of closure/failure of one or more price provider for any or all CFDs, quotes will be provided which will reflect what the company thinks to be the current Bid and Ask price for each CFD; we do not guarantee that our prices are the best prices available on the world market. The Client agrees hereunder that our market watch is only an indicator of the current world market and any misunderstanding regarding this service must be returned to Doyos Operations data.Moreover, charts for all traded instruments are drawn according to the default spreads, and may differ from the prices displayed on the market watch according to your account type because of differences in markups.",
    },
    {
      id: 2,
      title:
        "Spread",
      details: <AccountTable />
    },
    {
      id: 3,
      title: "Hedging",
      details:
        "Doyos allows clients to open positions in the opposite direction of previously opened positions in the trading account, to reduce loss and to decide later when to enter the market.Hedging an instrument by its corresponding Future OTC contract is forbidden (for swap-free accounts), because this represents an attempt to take advantage of the swap free facility and gain profits from swaps, one direction of this kind of hedge must be closed immediately. If the client fails to take action to avoid such practices, Doyos will, unfortunately, be required to close or take other action (by deducting the swaps retroactively or any other means) on these accounts without further notice.Hedged positions will be held in the trading account without affecting the required margin value, since the required margin is calculated for each instrument according to the net positions opened at a specific moment. The Company reserves the rights and at its sole discretion to close or partialy close any hedged position kept by the clients for a long period without priot notice to the clients",
    },
    {
      id: 4,
      title: "Order Types",
      details: <OrderTypes />
    },

    {
      id: 5,
      title: "Future -OTC",
      details:
        "All future trades are classified as market orders, and will be executed according to the market prices provided from its corresponding exchange at the time of execution; in addition, exchange fees may apply. Rollover: Futures-OTC contracts will not be rolled over automatically, neither accepting rollover requests from clients; in the case of any client need to rollover a future-otc position/s, open positions on the current contract can be closed and reopened at the next nearby future-otc contract before the last trading day for each contract. Available Futures instruments: Indices,Commodities & Energies, Where margin, contract size, and general contract specifications are displayed in the Markets Section of the website, and updated periodically.",
    },

    {
      id: 6,
      title: "Leverage",
      details: <Leverage />,
    },
    {
      id: 7,
      title: "Margin Requirements",
      details:
        "All future trades are classified as market orders, and will be executed according to the market prices provided from its corresponding exchange at the time of execution; in addition, exchange fees may apply. Rollover: Futures-OTC contracts will not be rolled over automatically, neither accepting rollover requests from clients; in the case of any client need to rollover a future-otc position/s, open positions on the current contract can be closed and reopened at the next nearby future-otc contract before the last trading day for each contract. Available Futures instruments: Indices,Commodities,Energies Where margin, contract size, and general contract specifications are displayed in the Markets Section of the website, and updated periodically.",
    },
    {
      id: 8,
      title: "Slippage",
      details:
        "Slippage involves executing any given trade on a specific price different from the expected price sent or preset by the client. This may take place during highly volatile market conditions such (but not limited to) economic or political news; the order will be filled at the next best available market price because, but not limited to – the desired/preset order price is not available, or because higher spread differences are applied in the corresponding exchanges of the traded instrument. Doyos does not apply slippage under normal market conditions, and applies it on stop pending entry or liquidation orders during times when Doyos is closed or when – but not limited to – there is a weekend or bank holiday, international economic events or hectic market movements. In this case, stop orders will be filled on the opening price which Doyos finds suitable.Clients acknowledge that slippage might occur as per the liquidity providers’ terms and conditions and that this is beyond the control of Doyos Global Limited and agrees to waive Doyos Global Limited from any liability that may arise subjective to any damage or expense or loss incurred by the Client, in relation to or directly or indirectly arising from but not limited to such terms and conditions.",
    },
  ],
};

export const AccountTypes = {

  "ECN": {
    "spread": 1.3,
    "minDeposit": 250,
    "commission": "N/A",
    "leverage": "1:500",
    "stopOut": "20%",
    "swapFree": "Allow",
    "accManager": "No",
    "wdFacilities": "24/5",
    "minWithdrawal": 20,
    "ea": "Yes",
    "scalping": "Yes",
    "vpn": "No",
    "hedge": "Allow"
  },
  "Pro": {
    "spread": 0,
    "minDeposit": 2500,
    "commission": 10,
    "leverage": "1:500",
    "stopOut": "20%",
    "swapFree": "Allow",
    "accManager": "Personal Acc Manager",
    "wdFacilities": "24/5",
    "minWithdrawal": 20,
    "ea": "Yes",
    "scalping": "Yes",
    "vpn": "Yes (3 lot monthly)",
    "hedge": "Allow"
  },
  "RAW": {
    "spread": 0,
    "minDeposit": 20000,
    "commission": 6,
    "leverage": "1:500",
    "stopOut": "20%",
    "swapFree": "Allow",
    "accManager": "Personal VIP Assistance",
    "wdFacilities": "24/7",
    "minWithdrawal": 20,
    "ea": "Yes",
    "scalping": "Yes",
    "vpn": "Yes (Free)",
    "hedge": "Allow"
  }
}


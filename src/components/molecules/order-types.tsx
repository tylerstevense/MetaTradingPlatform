import React from 'react';

const OrderTypes = () => {
    const checkmarkStyle = { color: 'green', marginRight: '5px' };

    return (
        <div>
            <b style={{ marginBottom: '10px', display: 'block' }}>The following orders may be given by the client:</b>

            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> OPEN - to open a new position;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> CLOSE - to close an open position;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> PARTIAL CLOSE - to close a part of an open position at the current market price and keep the remaining lots (part) floating;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> Modify - to add, remove, edit orders for Stop Loss, Take Profit, Buy Limit, Buy Stop, Sell Limit, Sell Stop;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> CLOSE BY - in case hedging is allowed;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> Multiple close to close-hedged positions on a specific instrument;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> Market orders: orders sent from the client terminal either by the client himself or a plug-in hooked to the client terminal (Expert Advisor), to buy or to sell an instrument at the current market price displayed on the market watch;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> Pending orders: this kind of order can be set in the same way used for market orders; but at prices predicted by the trader and may be achieved in the future, like limit, stop, and entry orders;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> All pending orders are guaranteed according to the fair market value;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> All pending orders are good till cancelled (GTC), unless the client places an expiry time and date on entry orders, or in the event that the financial instrument expires;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> All pending orders must be placed with respect to the rules appearing in the contract specifications for each instrument;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> Once pending orders are in the process, the system will reject any cancellation or modification attempted during that time;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> Pending order conditions may vary during hectic market conditions;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> If the market opens with a break off after a weekend or holidays, upon release of important economic and political news, or in the case of force majeure events; orders (sell stop, buy stop, stop loss) are fulfilled at the first available prices in the market;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> Even though such situations are not frequent, please be cautious when leaving pending orders for weekends and holidays;
            </p>
            <p style={{ marginBottom: '8px' }}>
                <span style={checkmarkStyle}>&#10003;</span> Placing stop orders prior to the release of financial news is not permitted, such orders may be rejected, deleted or filled at the best available market prices at that time.
            </p>
        </div>
    );
};

export default OrderTypes;

import React from 'react';

const Leverage = () => {
    const paragraphStyle = { marginBottom: "10px" }

    const tableStyle: React.CSSProperties = {
        width: '80%',
        margin: 'auto',
        borderCollapse: 'collapse',
        textAlign: 'center',
    };

    const thTdStyle: React.CSSProperties = {
        border: '1px solid #ddd',
        padding: '8px',
    };

    return (
        <div>
            <p style={paragraphStyle}>
                Shall mean a ratio in respect of Transaction Size and Initial Margin, 1:100 ratio means that in order to open a position, the Initial Margin required is one percent of the original contract value.</p>
            <p style={paragraphStyle}>
                The 1 (one) standard lot size is the measurement unit specified for each CFD contract. The possible choice of a leverage rate ranges from 1:1 up to 1:500 depending on the type of the CFD, the amount of trading volume active in the account and at the Company’s discretion. At the opening of the Client Account, the leverage rate is set at 1:30 by default. The Client may change the leverage of his Client Account by contacting the Company. The Company has the right to allow a change to the Client Account leverage at the Company’s discretion. In addition, the Company may, at its discretion, change the Client Account Leverage without any prior notice to the Client.
            </p>
            <p style={paragraphStyle}>

                Regardless of your account type or the amount of equity you have in your account, the leverage you will be allocated to trade with will be determined by the amount of trading volume you have in active use at any given time. As your trading volume exceeds one range, the trading platform will automatically adjust your leverage according to the chart below:
            </p>

            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thTdStyle}>Trading Volume Conditions</th>
                        <th style={thTdStyle}>Leverage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={thTdStyle}>Active Trading Volume from 0-19.99 Lots</td>
                        <td style={thTdStyle}>Leverage 1:500</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>Active Trading Volume between 20-39.99 Lots</td>
                        <td style={thTdStyle}>Leverage 1:300</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>Active Trading Volume from 40 Lots and above</td>
                        <td style={thTdStyle}>Leverage 1:100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Leverage;
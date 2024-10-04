import React from 'react';

const AccountTable = () => {
    const accountData = [
        {
            accountType: 'Starter Account',
            spread: 'As low as 1.5 pips',
        },
        {
            accountType: 'Premium Account',
            spread: 'Starts From 0 pip',
        },
        {
            accountType: 'Ultimate Account',
            spread: 'Starts From 0 pip',
        },
    ];

    const paragraphStyle = { marginBottom: '10px' };

    return (
        <>
            <div>

                <p style={paragraphStyle}>Doyos offers clients competitive spreads on all instruments, but may rarely make small increases on some or all instruments; ensuring that it provides the best available market conditions and tightest spreads.</p>

                <p style={paragraphStyle}>
                    One of our most important objectives is to ensure that your orders are executed at the best market price and that you get the tightest spreads available.
                </p>
                <p style={paragraphStyle}>At order execution, we apply our markup on the best available market prices according to your Trading account type; all transparent markups are published in the below table, which demonstrates the markup value as a fraction of PIPs for each account type and currency pair.</p>
                <p style={paragraphStyle}>At order execution, we apply our markup on the best available market prices according to your account type. As a result, the markup effect on the spread is shown in the table below, which demonstrates the lowest possible spread in PIPs for each account type and currency pair taking into consideration that our spreads are variable. The below table demonstrates the best spreads available (as low as) for each forex account type and currency pair:</p>
            </div>
            <table style={{ width: '100%', textAlign: 'center', borderCollapse: 'collapse', marginTop: '20px', marginBottom: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', textAlign: 'center', padding: '8px' }}>Account Type</th>
                        <th style={{ border: '1px solid #ddd', textAlign: 'center', padding: '8px' }}>Spread</th>
                    </tr>
                </thead>
                <tbody>
                    {accountData.map((account, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{account.accountType}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{account.spread}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>** During major economic release and market opening times; spreads on Fixed accounts (Fixed Spread) will be set as variable and will comply with the best available market prices.</p>
        </>
    );
};

export default AccountTable;

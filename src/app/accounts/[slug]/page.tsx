import Types from "@/components/pages/accounts/account-types";
import BasicAccount from "@/components/pages/accounts/basic-account";
import PropFunding from "@/components/pages/accounts/prop-funding";
import RegularAccount from "@/components/pages/accounts/regular-account";

import FundingWithdrawal from "@/components/pages/trading-and-tools/trading-conditions/funding-withdrawal";

const AccountsSlug = ({ params }: { params: { slug: String } }) => {
    //  console.log(params);
    return (
        <div>

            {
                params.slug === "regular" ? (
                    <RegularAccount />
                ) : params.slug === "prop-funding" ? (
                    <PropFunding />
                ) : params.slug === "funding-widthdrawal" ? (
                    <FundingWithdrawal />
                ) : params.slug === "basic" ? (
                    <BasicAccount />
                ) : null
            }
        </div>
    );
};

export default AccountsSlug;
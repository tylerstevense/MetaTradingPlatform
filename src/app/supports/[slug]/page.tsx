import PropFunding from "@/components/pages/accounts/prop-funding";
import RegularAccount from "@/components/pages/accounts/regular-account";
import CallBackRequest from "@/components/pages/supports/callback-request";
import Contact from "@/components/pages/supports/contact";
import FundingWithdrawal from "@/components/pages/trading-and-tools/trading-conditions/funding-withdrawal";

const SupportsSlug = ({ params }: { params: { slug: String } }) => {
    console.log(params);
    return (
        <div>

            {
                params.slug === "contact" ? (
                    <Contact />
                ) : params.slug === "call-request" ? (
                    <CallBackRequest />
                ) : null
            }
        </div>
    );
};

export default SupportsSlug;
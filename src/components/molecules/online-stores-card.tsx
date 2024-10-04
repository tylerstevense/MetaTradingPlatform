import clsx from "clsx";
import GooglePlayStore from "../assets/online stores/google-playstore";
import { ReactNode } from "react";

const OnlineStoresCard = ({
    data = {
        id: 1,
        title: 'Title',
        subtitle: " ",
        icon: <GooglePlayStore className="max-w-[150px] md:max-w-[380px] h-[100px]" />
    },
}: {
    data: {
        id: number;
        title: string;
        subtitle: string;
        icon: ReactNode;
    }
}) => {
    const { id, title, subtitle, icon } = data;
    return (

        <>
            <div className={clsx("flex flex-col justify-center items-center gap-[35px] border-l border-t p-[37px]", {
                "border-r": data.id % 2 === 0, "border-b": data.id > 4, "border-r md:border-r-0": data.id % 2 !== 0,
            })}>
                <div>
                    <p className="font-semibold text-center text-[24px]">{title}</p>

                    <p className="text-[16px]">{subtitle}</p>
                </div>

                <div>{icon} </div>

            </div>
        </>







    )
}
export default OnlineStoresCard;



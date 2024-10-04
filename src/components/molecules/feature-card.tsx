import { ReactNode } from "react";
import AccountIcon from "../icons/account-icon";
import clsx from "clsx";

const FeatureCard = ({
  details = {
    id: 1,
    title: "Title",
    text: "text",
    icon: <AccountIcon className="" />,
    steps: false,
    hasBorder: true,
  },
}: {
  details: {
    id: number;
    title?: string;
    text?: string;
    icon: ReactNode;
    steps?: boolean;
    hasBorder?: boolean;
  };
}) => {
  return (
    <div
      className={clsx(
        "card relative flex flex-col text-center items-center gap-[13px] bg-white rounded-[10px] px-[48px] h-auto py-[24px]",
        {
          "w-full md:max-w-[472px] border-0": details.text,

          "border": details.hasBorder, // Apply border if hasBorder is true
          "border-0": !details.hasBorder, // Remove border if hasBorder is false
        },
      )}
    >
      <div
        className={clsx(
          "absolute top-[-20px] right-[-20px] z-10 w-[48px] h-[48px] md:w-[60px] md:h-[60px] bg-[#E3F4FE] text-[#77C7FA] flex items-center justify-center rounded-full shadow text-[24px] md:text-[32px]",
          { hidden: !details.steps, flex: details.steps }
        )}
      >
        {details.id}
      </div>
      {details.icon}
      {details.title ? (
        <p
          className={clsx({
            "text-[16px] md:text-[24px] font-bold": details.text,
            "text-[14px] md:text-[16px] font-semibold": !details.text,
          })}
        >
          {details.title}
        </p>
      ) : null}
      {details.text ? <p>{details.text}</p> : null}
    </div>
  );
};

export default FeatureCard;

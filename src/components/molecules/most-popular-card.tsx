import clsx from "clsx";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import React, { ReactElement, ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const MostPopularCard = ({
  image = "/images/pages/trading-and-tools/popular-trade.png",

  heading = (
    <span className="action-span">Forex Trading Pairs with Low Spreads</span>
  ),
  paragraphs = [
    <>
      Trade Forex with a globally recognized broker. Buy and sell CFDs through
      our bespoke MetaTrader 5 trading platform, and benefit from the
      award-winning multilingual customer support available 24/7.
    </>,
    <>
      Some believe you must choose between an online broker and a wealth
      management firm. At DOYOS, you don&apos;t need to compromise. Whether you
      invest on your own, with an advisor, or a little of both — we can support
      you.
    </>,
  ],
  imageLeft = false,
  checkItems = [],
  buttonList = [],
}: {
  image?: string;
  heading?: ReactElement;
  paragraphs?: ReactNode[];
  imageLeft?: boolean;
  checkItems?: string[];
  buttonList?: {
    id: number;
    text: string;
    link: string;
    variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  }[];
}) => {
  return (
    <div
      className={clsx(
        "container flex flex-col md:flex-row items-center justify-between gap-[32px]  py-[70px]",
        { "md:flex-row-reverse": imageLeft, "md:flex-row": !imageLeft }
      )}
    >
      <div className="flex flex-col gap-[17px] md:gap-[45px] max-w-[750px]">
        <h2>{heading}</h2>
        {paragraphs.length ? (
          <div className="flex flex-col gap-[22px]">
            {paragraphs.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        ) : null}
        {checkItems.length ? (
          <div className="flex flex-wrap items-center gap-[22px]">
            {checkItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-[4px] py-[10px] px-[20px] rounded-[8px] border"
                >
                  <BadgeCheck className="stroke-secondary storke-[1.3px] w-[16px] h-[16px]" />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        ) : null}
        {buttonList.length ? (
          <div className="flex flex-wrap items-center gap-[22px]">
            {buttonList.map((item) => {
              const { id, text, link, variant } = item;
              return (
                <Link key={id} href={link}>
                  <Button variant={variant}>{text}</Button>
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
      {image ? (
        <Image
          src={image}
          alt="section-image"
          width={1000}
          height={1000}
          className="w-auto md:w-[550px] h-auto"
        />
      ) : null}
    </div>
  );
};

export default MostPopularCard;

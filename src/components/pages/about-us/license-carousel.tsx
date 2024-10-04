"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

type TSlide = {
  id: number;
  companyName: string;
  license: {
    type: string;
    from: string;
    flag: string;
    description: { id: number; text: string }[];
  };
};
const Slides: TSlide[] = [
  {
    id: 1,
    companyName: "Doyos Global Limited",
    license: {
      type: "FSC",
      from: "Mauritius Financial Services Commission",
      flag: "/images/pages/about-us/licese-regulations/mauritius.png",
      description: [
        { id: 1, text: "FS-4.1 Global Business Corporation" },
        {
          id: 2,
          text: "SEC-2.1B Investment Dealer (Full service dealer excluding underwriting)",
        },
        {
          id: 3,
          text: "The FSC license allows Doyos Global Limited to operate worldwide, provided that the country&nbsp;s domestic regulations do not prohibit operation.",
        },
        {
          id: 4,
          text: "Doyos does not offer its services to residents of certain jurisdictions such as USA, Cuba, Sudan, Syria, and North Korea",
        },
      ],
    },
  },
  {
    id: 2,
    companyName: "Doyos Global Limited",
    license: {
      type: "FSC",
      from: "Mauritius Financial Services Commission",
      flag: "/images/pages/about-us/licese-regulations/mauritius.png",
      description: [
        { id: 1, text: "FS-4.1 Global Business Corporation" },
        {
          id: 2,
          text: "SEC-2.1B Investment Dealer (Full service dealer excluding underwriting)",
        },
        {
          id: 3,
          text: "The FSC license allows Doyos Global Limited to operate worldwide, provided that the country&nbsp;s domestic regulations do not prohibit operation.",
        },
        {
          id: 4,
          text: "Doyos does not offer its services to residents of certain jurisdictions such as USA, Cuba, Sudan, Syria, and North Korea",
        },
      ],
    },
  },
  {
    id: 3,
    companyName: "Doyos Global Limited",
    license: {
      type: "FSC",
      from: "Mauritius Financial Services Commission",
      flag: "/images/pages/about-us/licese-regulations/mauritius.png",
      description: [
        { id: 1, text: "FS-4.1 Global Business Corporation" },
        {
          id: 2,
          text: "SEC-2.1B Investment Dealer (Full service dealer excluding underwriting)",
        },
        {
          id: 3,
          text: "The FSC license allows Doyos Global Limited to operate worldwide, provided that the country&nbsp;s domestic regulations do not prohibit operation.",
        },
        {
          id: 4,
          text: "Doyos does not offer its services to residents of certain jurisdictions such as USA, Cuba, Sudan, Syria, and North Korea",
        },
      ],
    },
  },
];
const LicenseCarousel = ({
  className,
  width,
}: {
  className?: string;
  width: number;
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  return (
    <div
      className={clsx(className, "relative overflow-hidden")}
      style={{ maxWidth: width + "px" }}
    >
      <div className="z-10 absolute top-[50%] left-0 w-full flex items-center justify-between">
        <div
          className="border bg-white rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center"
          role="button"
          onClick={() => currentSlide > 1 && setCurrentSlide(currentSlide - 1)}
        >
          <ChevronLeft className="stroke-secondary w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
        </div>
        <div
          className="border bg-white rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center"
          role="button"
          onClick={() =>
            currentSlide < Slides.length &&
            setCurrentSlide(currentSlide + 1)
          }
        >
          <ChevronRight className="stroke-secondary w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
        </div>
      </div>
      <div
        className="flex items-center transition ease-in-out duration-150"
        style={{ transform: `translateX(-${(currentSlide - 1) * width}px)` }}
      >
        {Slides.map((slide: TSlide) => {
          const { id, companyName, license } = slide;
          const { type, from, flag, description } = license;
          return (
            <div
              key={id}
              className="p-[20px] md:p-[40px]"
              style={{ minWidth: `100%` }}
            >
              <div className="p-[20px] md:p-[40px] rounded-[10px] space-y-[32px] shadow-md md:shadow-xl border">
                <div className="flex items-center justify-between gap-[30px]">
                  <div>
                    <h4 className="text-[16px] md:text-[20px] font-bold">
                      {companyName}
                    </h4>
                    <p>{type.toLocaleUpperCase()}</p>
                    <p>{from}</p>
                  </div>
                  <Image
                    src={flag}
                    alt=""
                    width={1000}
                    height={1000}
                    className="max-w-[120px] h-auto"
                  />
                </div>
                <div className="space-y-[16px]">
                  <h5 className="font-semibold">FSC License Type</h5>
                  <ul>
                    {description.map((item) => {
                      const { id, text } = item;
                      return <li key={id}>{text}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LicenseCarousel;

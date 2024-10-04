"use client";

import HeroSectionGraphic from "@/components/assets/home/herosection";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useElementSize } from "usehooks-ts";

type TSlide = {
  id: number;
  image: string;
};

const Slides: TSlide[] = [
  {
    id: 1,
    image: "/images/payment-methods.png",
  },
  {
    id: 2,
    image: "/images/payment-methods.png",
  },
  {
    id: 3,
    image: "/images/pages/trading-and-tools/trade-indices-online.png",
  },
];
const HomeHeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [squareRef, { width }] = useElementSize();

  return (
    <section
      className="md:section md:py-[68px] w-full overflow-hidden relative"
      style={{ maxWidth: "100vw" }}
    >
      <div
        className="min-h-[300px] flex items-center transition ease-in-out duration-150"
        style={{ transform: `translateX(-${(currentSlide - 1) * 100}vw)` }}
      >
        {Slides.map((slide: TSlide) => {
          const { id, image } = slide;
          return (
            <div
              key={id}
              className="min-w-[100vw]"
            >
              <div className="container  grid grid-cols-1 min-[580px]:grid-cols-2 justify-center items-center">
                <div className="flex flex-col mt-8 gap-6 md:gap-6">
                  <div className="flex flex-col justify-center gap-3 md:gap-6 xl:gap-10">
                    <p className="text-[16px] lg:text-[20px] text-center min-[580px]:text-left">
                      WELCOME! START GROWING YOUR TRADING TODAY
                    </p>
                    <h1 className="text-center min-[580px]:text-left">
                      <span className="text-secondary text-[20px] md:text-[64px] text-center min-[580px]:text-left">
                        MetaTrader 5
                      </span>
                      <br /> Trading Platform
                    </h1>
                    <p className="text-[16px] lg:text-[20px] text-center min-[580px]:text-left">
                      Buy & Sell crypto futures / CFDs in MT5.
                    </p>
                  </div>
                  <div className="flex justify-center items-center min-[580px]:justify-start max-h-[20px] md:max-h-[60px] mb-3">
                    <Link href="/register">  <Button variant="secondary">Open an Account</Button></Link>
                  </div>
                </div>

                <div className="pt-5 md:pt-0 min-[700px]:flex w-full">
                  {slide.id === 1 ? (
                    <HeroSectionGraphic className=" pt-5 md:pt-0 min-[700px]:flex" />
                  ) : (
                    <Image
                      src={image}
                      alt="image"
                      width={1000}
                      height={1000}
                      className="w-auto h-full mx-auto max-h-[200px] sm:max-h-[350px] md:max-h-[500px]"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-[20px] py-[20px]">
        {[1, 2, 3].map((item) => {
          return (
            <div
              key={item}
              className={clsx("w-[20px] h-[8px] rounded-full ", {
                "bg-gray-200": item !== currentSlide,
                "bg-secondary": item === currentSlide,
              })}
              role="button"
              onClick={() => setCurrentSlide(item)}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeHeroCarousel;
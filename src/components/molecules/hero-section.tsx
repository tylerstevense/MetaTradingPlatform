// HeroSection.jsx
import React, { ReactNode } from "react";
import Image from "next/image";

type HeroSectionProps = {
  backgroundUrl: any;
  heading: ReactNode;
};

const HeroSection = ({
  backgroundUrl = "/images/pages/trading-and-tools/ForexTradingBanner.png",
  heading = <>Title Here</>,
}: HeroSectionProps) => {
  return (
    <section className="relative">
      <Image
        src={backgroundUrl}
        alt="background-image"
        fill
        quality={100}
        placeholder="blur"
        blurDataURL="lightgray"
        className="bg-cover bg-center z-[-1]"
      />
      <div className="container section flex items-center">
        <h1 className="text-white py-[15px]">{heading}</h1>
      </div>
    </section>
  );
};

export default HeroSection;

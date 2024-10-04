"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { A11y, Autoplay, Navigation, Pagination, Grid } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FastClock from "../assets/trading-tools/fast-clock";
import clsx from "clsx";
import { ReactNode } from "react";

const WhyTraderChooseCarousel = ({
  cards = [
    {
      id: 1,
      image: <FastClock className="" />,
      title: "Ultra-Fast Execution",
      text: "Experience an NDD trading environment that employs the latest technology to execute trading orders in just 0.03 seconds (average order execution speed).",
    },
  ],
}: {
  cards: {
    id: number;
    image: ReactNode;
    title: string;
    text: string;
  }[];
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, Grid]}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="mySwiper"
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      // grid={{
      //   rows: 2,
      //   fill: "row",
      // }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
          grid: { rows: 1, fill: "row" }
        },
        450: {
          slidesPerView: 1,
          spaceBetween: 20,
          grid: { rows: 1, fill: "row" }
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 50,
          grid: { rows: 2, fill: "row" }
        },
        1260: {
          slidesPerView: 2,
          spaceBetween: 50,
          grid: { rows: 2, fill: "row" }
        },
      }}
    >
      {cards.map((item: any) => {
        const { id, image, title, text } = item;
        const middleIndex = Math.ceil(cards.length / 2);
        return (
          <SwiperSlide
            key={id}
            className={clsx("swiper-slide", {
              "pb-[16px] md:pb-[48px]": id > middleIndex,
              "pb-0": id < middleIndex,
            })}
          >
            <div
              key={id}
              className="bg-white min-h-[200px] px-[20px] py-[30px] border rounded-[10px] flex flex-col gap-[10px]"
            >
              {image}
              <h4 className="font-semibold text-[16px] md:text-[20px]">
                {title}

              </h4>
              <p>{text}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WhyTraderChooseCarousel;

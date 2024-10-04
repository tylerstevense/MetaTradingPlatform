import { cn } from "@/lib/utils";
import React from "react";

const IndicesIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <path
        d="M13 81L31.5 73L33.5 78.5L63 63"
        stroke="#091E3B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M77 55L87 50M87 50L82.5 48.5M87 50L85.5 55"
        stroke="#091E3B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 53V45H21.5M21.5 45V40.5M21.5 45H25V63H21.25M17.5 58V63H21.25M21.25 63V72"
        stroke="#091E3B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 30V37.5H33M33 37.5H41V42M33 37.5V56H37M41 47.5V56H37M37 56V69"
        stroke="#C1282D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53 19V26H57.5M57.5 26H49V53H53.25M57.5 26V36.5M57.5 41V53H53.25M53.25 53V61.5"
        stroke="#091E3B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65.5 53.5V59H69M69 59V70.5M69 59H72.5V40.5H69M69 40.5V25M69 40.5H65.5V49"
        stroke="#C1282D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IndicesIcon;

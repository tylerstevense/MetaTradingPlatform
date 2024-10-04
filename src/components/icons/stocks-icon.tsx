import { cn } from "@/lib/utils";
import React from "react";

const StocksIcon = ({ className }: { className: string }) => {
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
        d="M22.8571 63.3224L23.8911 72.7837L34.2313 71.2898L30.6122 48.3837L38.3673 46.8898L37.3333 38.9224L28.5442 40.4163C27.6825 36.2667 26.4762 27.4694 36.8163 27.9673V20C31.6463 20 23.6306 20.6693 20.7891 27.9673C19.2381 31.951 19.2381 35.9347 19.7551 41.4122L12 42.4082L13.034 51.3714L20.7891 49.8776L21.8231 57.8449"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.8774 41.412C49.052 43.2378 40.4352 48.3835 42.5033 61.8284C44.1798 72.7277 50.086 77.431 52.3264 79.2569C53.8774 80.5848 56.4625 81.7467 61.6325 79.7549C66.1865 78.0004 70.9386 80.2529 70.9386 80.2529C70.9386 80.2529 76.6257 83.2406 81.7958 77.2651C85.3759 73.1273 87.9999 69.2977 87.9999 67.3059C87.9999 65.314 73.5237 57.8446 86.4489 46.3916C84.5532 44.0678 79.6244 39.6193 75.0747 40.4161C69.3876 41.412 65.7686 45.3956 59.0475 40.4161"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65.7688 35.9348C66.1135 32.9471 68.7674 26.2744 76.6259 23.4858C76.9706 26.4736 75.2817 33.1462 65.7688 35.9348Z"
        stroke="#C1282D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StocksIcon;

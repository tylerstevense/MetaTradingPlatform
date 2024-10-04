import { TSearchParams } from "@/lib/type";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
type TAccountType = {
  id: number;
  type: string;
  spread: string;
  leverage: string;
};
const AccountCarousel = ({ searchParams }: { searchParams: TSearchParams }) => {
  const slide = parseInt(`${searchParams.slide || 1}`);
  const AccountTypes: TAccountType[] = [
    {
      id: 1,
      type: "Mini",
      spread: "1.3",
      leverage: "1:500",
    },
    {
      id: 2,
      type: "Pro",
      spread: "0.0",
      leverage: "1:500",
    },
    {
      id: 3,
      type: "Ultimate",
      spread: "0.0",
      leverage: "1:500",
    },
  ];
  const { type, spread, leverage } = AccountTypes[slide - 1];
  return (
    <div>
      <div className="flex items-center relative">
        <Image
          src="/images/slide-back.png"
          alt=""
          width={1000}
          height={1000}
          className="w-4/5 ml-auto h-auto"
        />
        <div className="absolute left-0 -bottom-[20px] border border-primary bg-muted p-3 md:p-5 rounded-tl-[20px] rounded-br-[20px] flex flex-col items-end justify-center gap-3">
          <p className="text-2xl lg:text-4xl font-bold text-right">{type}</p>
          <p className="text-xl lg:text-2xl font-bold text-right">
            <span className="text-xl lg:text-2xl font-bold text-secondary">
              Spread
            </span>
            :&nbsp;{spread}
          </p>
          <p className="text-xl lg:text-2xl font-bold text-right">
            Up to:&nbsp;
            <span className="text-xl lg:text-2xl font-bold text-secondary">
              {leverage}
            </span>
            &nbsp;Leverage
          </p>
        </div>
        <div className="absolute right-0 -bottom-[40px] flex items-end justify-end gap-5">
          <Link
            href={{
              pathname: "/",
              query: { slide: slide > 1 ? slide - 1 : slide },
            }}
            scroll={false}
          >
            <div className="bg-muted hover:bg-white border border-primary hover:border-secondary p-2 rounded-full rounded-br-none cursor-pointer group">
              <ChevronLeft className="h-12 w-12 stroke-1 group-hover:stroke-secondary" />
            </div>
          </Link>
          <Link
            href={{
              pathname: "/",
              query: { slide: slide < 3 ? slide + 1 : slide },
            }}
            scroll={false}
          >
            <div className="bg-muted hover:bg-white border border-primary hover:border-secondary p-2 rounded-full rounded-bl-none cursor-pointer group">
              <ChevronRight className="h-12 w-12 stroke-1 group-hover:stroke-secondary" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountCarousel;

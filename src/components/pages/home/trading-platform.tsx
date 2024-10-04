import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TradingPlatform = () => {
  return (
    <section className="bg-muted rounded-bl-[20px] md:rounded-bl-[40px] rounded-tr-[20px] md:rounded-tr-[40px]">
      <div className="container section grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center gap-10">
          <h2 className="">
            <span className="text-secondary h2-span">Advanced</span> Trading
            Platform
          </h2>
          <p>
            Our advanced trading platform features advanced charting tools,
            automated trading options, and real-time market data, enabling you
            to make informed trading decisions in real-time.
          </p>
          <ul className="flex flex-col items-start justify-start gap-5">
            <li className="flex items-start justify-start gap-3">
              <div>
                <BadgeCheck className="h-5 w-5 stroke-secondary mt-1" />
              </div>
              <div>
                <h4 className="font-semibold">Fast and Reliable Execution</h4>
                <p>
                  Provide fast and reliable trade execution with minimal
                  slippage. This is essential for traders who want to enter and
                  exit trades quickly.
                </p>
              </div>
            </li>
            <li className="flex items-start justify-start gap-3">
              <div>
                <BadgeCheck className="h-5 w-5 stroke-secondary mt-1" />
              </div>
              <div>
                <h4 className="font-semibold">Trading Tools and Resources</h4>
                <p>
                  Offer a range of trading tools and resources such as charting
                  tools, news feeds, economic calendars, and trading signals to
                  help traders make informed trading decisions.
                </p>
              </div>
            </li>
          </ul>
          <div className="flex flex-wrap items-center justify-start gap-[20px]">
            <Link href="/try-free-demo">  <Button>Open Demo Account</Button></Link>
            <Link href="/register">  <Button variant="secondary">Open Real Acccount</Button></Link>

          </div>
        </div>
        <div className="flex items-center">
          <Image src="/images/gadgets.png" alt="" width={1000} height={1000} className="w-auto h-auto" />
        </div>
      </div>
    </section>
  );
};

export default TradingPlatform;
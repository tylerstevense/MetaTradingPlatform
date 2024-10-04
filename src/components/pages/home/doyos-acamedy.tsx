import { BadgeCheck } from "lucide-react";
import Image from "next/image";

const DoyosAcademy = () => {
  return (
    <div className="-my-6 md:-my-0">
      <div className="container section grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex items-center">
          <Image
            src="/images/doyosacademy.png"
            alt=""
            width={1000}
            height={1000}
            className="w-auto h-auto mt-"
          />
        </div>
        <div className="flex flex-col justify-center gap-3 md:gap-10">
          <p>EXPLORE, LEARN, AND GROW</p>
          <h2 className="">
            What you will learn from <br />Doyos{" "}
            <span className="text-secondary h2-span">Trading Academy</span>
          </h2>
          <p className="mb-4 md:mb-0">
            Our forex education section is designed to cater to traders of all
            levels, from beginners to advanced traders. Whether you&apos;re just
            starting out or looking to take your trading to the next level, we
            have the resources you need to succeed.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-[20px]">
            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>Video tutorial</span>
            </div>

            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>Webinars</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>Trading guides</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>Trading forums</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>Technical analysis</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />{" "}
              <span>How to manage risk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoyosAcademy;

import { Button } from "@/components/ui/button";

const JoinBanner = () => {
  return (
    <section className="container section">
      <div className="p-8 md:p-16 rounded-br-[20px] rounded-tl-[20px] lg:rounded-br-[40px] lg:rounded-tl-[40px] flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-[#485CA0]/90 from-40% to-[#25C0C7]/90 to-70%">
        <h2 className="font-medium text-white text-center md:text-left">
          Join us today and experience <br /> the difference of trading with{" "}
          <br /> a <span className="h2-span text-white">trusted</span> {" "}and{" "}
          <span className="h2-span text-white">reliable forex broker</span>
        </h2>
        <Button>Open an Account</Button>
      </div>
    </section>
  );
};

export default JoinBanner;

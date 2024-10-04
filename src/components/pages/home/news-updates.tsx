import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NewsUpdates = () => {
  const newsAndUpdates = [
    {
      id: 0,
      image: "news-update-1.png",
      date: "10/11/23",
      title:
        "Canadian July CPI weaker than previous month. Peak inflation for Canada?",
      link: "/",
    },
    {
      id: 1,
      image: "news-update-1.png",
      date: "10/11/23",
      title:
        "Canadian July CPI weaker than previous month. Peak inflation for Canada?",
      link: "/",
    },
    {
      id: 2,
      image: "news-update-1.png",
      date: "10/11/23",
      title:
        "Canadian July CPI weaker than previous month. Peak inflation for Canada?",
      link: "/",
    },
    {
      id: 3,
      image: "news-update-1.png",
      date: "10/11/23",
      title:
        "Canadian July CPI weaker than previous month. Peak inflation for Canada?",
      link: "/",
    },
  ];
  return (
    <div className="section bg-muted rounded-t-[20px] lg:rounded-t-[40px] mt-10">
      <div className="container flex flex-col gap-10 items-center">
        <h2>News & Updates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-5">
          {newsAndUpdates.map((item) => {
            return (
              <div
                className="bg-white rounded-[10px] hover:shadow-xl"
                key={item.id}
              >
                <div className="relative">
                  <Image
                    src={`/images/${item.image}`}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-auto rounded-t-[10px]"
                  />
                  <div className="absolute bottom-0 right-0 py-1 bg-secondary text-white font-bold px-6 rounded-tl-[10px]">
                    {item.date}
                  </div>
                </div>
                <div className="p-3 md:p-5">
                  <h4 className="font-bold hover:text-secondary cursor-pointer">
                    {item.title}
                  </h4>
                  <div className="mt-3 flex justify-end">
                    <Link
                      href={item.link}
                      className=" text-secondary font-semibold hover:font-bold"
                    >
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Button>See all the latest new & articles</Button>
      </div>
    </div>
  );
};

export default NewsUpdates;

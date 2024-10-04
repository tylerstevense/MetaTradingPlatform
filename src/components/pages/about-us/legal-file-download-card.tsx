import PdfFile from "@/components/icons/pdf-file";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LegalFileDownloadCard = ({
  details = {
    id: 1,
    icon: <PdfFile className="" />,
    title: "title",
    subtitle: "subtitle",
    link: "#",
  },
}: {
  details: {
    id: number;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    link: string;
  };
}) => {
  const { icon, title, subtitle, link } = details;
  return (
    <div className="w-full px-[24px] py-[20px] rounded-[10px] bg-white border flex items-center justify-between gap-[10px]">
      <div className="flex items-center gap-[10px]">
        {icon}
        <div className="flex flex-col gap-[10px]">
          <h3 className="font-semibold">{title}</h3>
          <h4 className="font-medium">{subtitle}</h4>
        </div>
      </div>
      <Link href={link}>
        <button className="bg-white text-primary px-[15px] py-[6px] rounded-[5px] text-[14px] md:px-[25px] md:py-[8px] md:rounded-[10px] md:text-[16px] border">
          Download
        </button>
      </Link>
    </div>
  );
};

export default LegalFileDownloadCard;

import LegalFileDownloadCard from "./legal-file-download-card";
import PdfFile from "@/components/icons/pdf-file";
import SectionHead from "@/components/molecules/section-head";
import HowToGetStarted from "../how-to-get-started-section";
import HeroSection from "@/components/molecules/hero-section";

const LegalDocuments = () => {
  return (
    <div>
      <HeroSection
        backgroundUrl="/images/pages/about-us/LegalDocumentsBanner.png"
        heading={<>Legal Documents</>}
      />
      <section className="container section">
        <SectionHead
          details={{
            H2: <>Download all legal documents of Doyos</>,
            p: [
              <>
                Doyos would like to draw your attention to the upcoming trading
                hour changes due to Thanksgiving Day in the US.(23rd of November
                2023). Trading Hour changes will only affect the following
                Financial Instruments
              </>,
            ],
            buttons: [
              {
                id: 1,
                text: "Download all legal documents",
                link: "#",
                variant: "secondary",
              },
            ],
          }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px]">
          {Files.map((file) => {
            return <LegalFileDownloadCard key={file.id} details={file} />;
          })}
        </div>
      </section>
      <HowToGetStarted />
    </div>
  );
};

export default LegalDocuments;

const Files = [
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
  {
    id: 1,
    icon: <PdfFile className="" />,
    title: "Title",
    subtitle: "Subtitle",
    link: "#",
  },
];

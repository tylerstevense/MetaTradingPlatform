import GlobalOffices from "@/components/pages/about-us/global-offices";
import LegalDocuments from "@/components/pages/about-us/legal-documents";
import LicenseRegulation from "@/components/pages/about-us/license-regulations";
import OurGoal from "@/components/pages/about-us/our-goal";

const AboutUsSlug = ({ params }: { params: { slug: String } }) => {
  return (
    <>
      {params.slug === "legal-documents" ? (
        <LegalDocuments />
      ) : params.slug === "our-goal" ? (
        <OurGoal />
      ) : params.slug === "license-regulations" ? (
        <LicenseRegulation />
      ) : params.slug === "global-offices" ? (
        <GlobalOffices />
      ) : null}
    </>
  );
};

export default AboutUsSlug;

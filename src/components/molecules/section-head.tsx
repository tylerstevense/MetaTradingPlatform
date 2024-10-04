import Link from "next/link";
import { Button } from "../ui/button";

const SectionHead = ({
  details = {
    H2: <>H2</>,
    p: [<>p</>],
    buttons: [{ id: 1, text: "first button", link: "#", variant: "default" }],
  },
}: {
  details: {
    H2?: React.ReactNode;
    p?: React.ReactNode[];
    buttons?: {
      id: number;
      text: string;
      link: string;
      variant:
      | "link"
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | null
      | undefined;
    }[];
  };
}) => {
  return (
    <div className="max-w-[700px] mx-auto flex flex-col items-center justify-center gap-[40px] [&>*]:text-center pb-[64px]">
      {details.H2 ? <h2>{details.H2}</h2> : null}
      {details.p ? (
        <>
          {details.p.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </>
      ) : null}

      {details.buttons && details.buttons.length ? (
        <div>
          {details.buttons.map((button) => {
            const { id, link, text, variant } = button;
            return (
              <Link key={id} href={link}>
                <Button variant={variant || "secondary"} key={id}>
                  {text}
                </Button>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SectionHead;

import { cn } from "@/lib/utils";

const CloudShield = ({ className }: { className: string }) => {
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
        d="M25.1439 44.9999C12.3439 56.5999 22.4773 63.8333 29.1439 65.9999H66.6439C70.2439 65.9999 71.8106 65 72.1439 64.5C84.5439 54.1 74.6439 47.1666 68.1439 44.9999C65.7439 23.3999 52.4773 29.3333 46.1439 35L49.1439 32.4999C28.3439 18.0999 24.4773 34.8333 25.1439 44.9999ZM25.1439 44.9999L28.1439 49.4999"
        stroke="#091E3B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.644 56.3846C36.144 56.3846 47.2624 52.3725 48.7306 51C49.8941 52.3462 61.144 56.3846 63.644 56.3846V56.3851C63.644 67.1544 63.6438 86 48.7306 86C33.644 86 33.644 67.1538 33.644 56.3846Z"
        fill="white"
        stroke="#C1282D"
        strokeWidth="4"
      />
      <path
        d="M42.644 64C43.644 64 48.0914 62.5098 48.6787 62C49.1441 62.5 53.644 64 54.6441 64V64.0002C54.644 68.0002 54.644 75 48.6787 75C42.644 75 42.644 68 42.644 64Z"
        stroke="#091E3B"
        strokeWidth="4"
      />
      <circle cx="76.144" cy="18.5" r="3.5" stroke="#091E3B" strokeWidth="4" />
    </svg>
  );
};

export default CloudShield;

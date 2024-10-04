import { cn } from "@/lib/utils";

const AccountIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={(cn(className), "")}
    >
      <path
        d="M41.3332 28.3333L30.6665 34.9999L59.3332 50.9999V72.3333L69.9998 66.3333L69.3332 44.9999L41.3332 28.3333Z"
        stroke="#C1282D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6665 54.3333L41.3332 68.9999L55.3332 60.9999"
        stroke="#091E3B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 61L40.6667 75.6667L54.6667 67.6667"
        stroke="#091E3B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3335 67.6667L42.0002 82.3334L56.0002 74.3334"
        stroke="#091E3B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74.6665 49L87.3332 41"
        stroke="#C1282D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74.6665 55.6667L87.3332 47.6667"
        stroke="#C1282D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74.6665 62.3333L87.3332 54.3333"
        stroke="#C1282D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M72.6667 43L88 33.6667L58 17L12 45.6667L41.3333 61.6667L55.3333 53"
        stroke="#091E3B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="23.6667" r="2.5" stroke="#C1282D" strokeWidth="3" />
    </svg>
  );
};

export default AccountIcon;

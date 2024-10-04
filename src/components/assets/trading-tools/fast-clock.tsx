import { cn } from "@/lib/utils";

const FastClock = ({ className }: { className: string }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={(cn(className), "")}
    >
      <circle cx="58.5" cy="42.5" r="27" stroke="#091E3B" strokeWidth="3" />
      <circle cx="58.5" cy="42.5" r="20" stroke="#C1282D" strokeWidth="3" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.9859 39.7764L52.7173 36.8362L51.3721 38.3317L55.024 41.6167C55.008 41.7422 54.9998 41.8701 54.9998 42C54.9998 43.6569 56.3429 45 57.9998 45C59.306 45 60.4172 44.1652 60.8291 43H72.9998V41H60.8291C60.4172 39.8348 59.306 39 57.9998 39C57.2247 39 56.5183 39.2939 55.9859 39.7764Z"
        fill="#091E3B"
      />
      <path d="M21.5 27H35.5" stroke="#091E3B" strokeWidth="3" />
      <path d="M13 34.5H32" stroke="#091E3B" strokeWidth="3" />
      <path d="M24 42.5H31" stroke="#091E3B" strokeWidth="3" />
      <path d="M13.5 50.5H23.5" stroke="#091E3B" strokeWidth="3" />
      <path d="M13 58H35.5" stroke="#091E3B" strokeWidth="3" />
      <circle
        cx="77.5"
        cy="80.5"
        r="3"
        fill="#D9D9D9"
        stroke="#091E3B"
        strokeWidth="3"
      />
      <circle cx="58.5" cy="28.5" r="1.5" fill="#091E3B" />
      <circle cx="44.5" cy="42.5" r="1.5" fill="#091E3B" />
      <circle cx="58.5" cy="56.5" r="1.5" fill="#091E3B" />
    </svg>
  );
};

export default FastClock;

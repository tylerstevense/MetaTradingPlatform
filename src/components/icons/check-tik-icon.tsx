import { cn } from "@/lib/utils";

const CheckTik = ({ className }: { className: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"
            className={cn(className, "")}
        >
            <path d="M22.5 7.5L8.75 21.25L2.5 15" stroke="#091E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.5 12.5L18.125 21.875L16.25 20" stroke="#091E3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export default CheckTik;
import BrandButton from "@/components/ui/custom/BrandButton";
import { ArrowRight, PlusIcon } from "lucide-react";

export interface MarketCardProps {
  name: string;
  days: string;
  time: string;
  suburb: string;
  mapLink: string;
}

export function MarketCard({
    name,
    days,
    time,
    suburb,
    mapLink,
}: MarketCardProps){
    return(
        <div className="bg-secondary-lighter rounded-xl p-6 shadow-lg flex justify-between items-center w-full">
            <div>
                <h3 className="emphasise-style text-primary-dark">{name}</h3>
                <p className="label-style">{days}</p>
                <p className="label-style">{time}</p>
                <p className="label-style">{suburb}</p>
            </div>
            <div className="flex flex-col">
                <BrandButton variant={"muted"} size={"lg"} className="min-w-10">Take Me! <ArrowRight/></BrandButton>
                <BrandButton variant={"muted"} size={"lg"} className="min-w-10">More Info <PlusIcon/></BrandButton>
            </div>
        </div>
    )
}
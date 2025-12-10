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
        <div className="bg-background-2 rounded-xl p-6 shadow-lg flex justify-between items-center w-full text-on-light hover:scale-101 transition">
            <div>
                <h3>{name}</h3>
                <p className="muted">{days}</p>
                <p className="muted">{time}</p>
                <p className="muted">{suburb}</p>
            </div>
            <div className="flex flex-col">
                <BrandButton variant={"muted"} size={"lg"} className="min-w-10">Take Me! <ArrowRight/></BrandButton>
                <BrandButton variant={"muted"} size={"lg"} className="min-w-10">More Info <PlusIcon/></BrandButton>
            </div>
        </div>
    )
}
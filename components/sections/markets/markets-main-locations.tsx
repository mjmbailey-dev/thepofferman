import PageSection from "@/components/layouts/PageSection";
import BrandButton from "@/components/ui/custom/BrandButton";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const mapsLink = 'https://www.google.com/maps/dir//Prahran%20Market%20South%20Yarra%203141'

export default function MarketsMainLocation(){
    return(
        <PageSection className="bg-background-1">
            <div className="flex flex-col">
                <div className="flex flex-col text-center gap-5">
                    <div className="">
                        <p className="subtext">Where</p>
                        <h2>Our Main Location</h2>
                    </div>
                    <p>Find The Pofferman here Monday, Wednesday, Thursday, Friday, Saturday and Sunday!</p>
                </div>
                <div className="flex flex-col text-center mt-10 gap-5">
                    <h3>Prahran Market</h3>
                    <div className="flex-1 h-full w-full relative min-h-80 rounded-lg overflow-hidden shadow-2xl transition hover:scale-105">
                        <Image src="/prahranmarket.webp" alt="freshly served Caramel Dutch Pancakes" fill className="object-cover aspect-auto"/>
                    </div>
                    <div className="flex-1 flex flex-col h-full justify-center flex-end md:items-start md:text-left">
                        <p>Prahran Market, 163 Commercial Rd, South Yarra VIC 3141</p>
                        <Link href={mapsLink}><BrandButton asChild className="px-0!" variant={'muted'}>Directions<ChevronRight/></BrandButton></Link>
                    </div>
                </div>
            </div>
        </PageSection>
    )
}
import PageSection from "@/components/layouts/PageSection";
import BrandButton from "@/components/ui/custom/BrandButton";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function EventsIncluded(){
    return(
        <PageSection className="bg-background-1">
            <div className="flex flex-col text-center justify-center">
                <p className="subtext">Included</p>
                <h2>What makes events special</h2>
                <p>Every detail matters when you celebrate</p>
                <div className="grid grid-cols-4 grid-rows-2 row-">
                    <Image src='/insta-screenshot-1.png' alt='' width={400} height={400} className="overflow-hidden aspect-auto blur-xs row-span-1 col-span-2"/>
                    <div className="row-span-1 col-span-2 flex flex-col text-left justify-start">
                        <p className="subtext">Feature</p>
                        <h4>Design your own poffertjes menu</h4>
                        <p className="caption">Choose from classic toppings or create something entirely new for your guests.</p>
                        <div className="flex"><BrandButton size={'sm'}>Contact Us</BrandButton><BrandButton variant={'muted'}>Full Menu<ChevronRight/></BrandButton></div>
                    </div>
                </div>
            </div>
        </PageSection>
    )
}
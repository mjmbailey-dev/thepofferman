import BrandButton from "@/components/ui/custom/BrandButton";
import { CalendarCheck, ChevronRight, Store } from "lucide-react";

export default function HomeCTA(){
    return(
        <section className="bg-neutral-lightest flex justify-center w-full py-10 md:py-20">
            <div className="max-w-7xl w-full flex flex-col mx-10 gap-5 justify-center">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-1 flex-col">
                        <CalendarCheck className="text-primary-main"/>
                        <h2 className="header-style text-primary-main">Book your event</h2>
                        <p className="text-style ">Let us bring authentic poffertjes to your celebration. We handle the cooking, you enjoy the moment.</p>
                        <div className="">
                            <BrandButton>Contact Us</BrandButton>
                            <BrandButton variant={'muted'}>Learn More <ChevronRight/></BrandButton>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <Store className="text-primary-main"/>
                        <h2 className="header-style text-primary-main">Find us at Markets</h2>
                        <p className="text-style ">Visit The Pofferman at your local market. Check our schedule and stop by for fresh poffertjes.</p>
                        <div className="">
                            <BrandButton>Find Us</BrandButton>
                            <BrandButton variant={'muted'}>Learn More <ChevronRight/></BrandButton>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
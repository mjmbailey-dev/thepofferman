import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarCheck, ChevronRight, Store } from "lucide-react";
import Link from "next/link";

type HomeCTAProps = {
    className?: string
}

export default function HomeCTA({className} : HomeCTAProps){
    return(
        <section className={cn("bg-background-1 flex justify-center w-full py-10 md:py-20 border-neutral-lightest! outline-border-lightest!", className)}>
            <div className="max-w-7xl w-full flex flex-col mx-10 gap-5 justify-center">
                <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                    <div className="flex flex-1 flex-col gap-4">
                        <CalendarCheck className="text-primary"/>
                        <h3 className="">Book your event</h3>
                        <p className="max-w-sm md:max-w-md">Let us bring authentic poffertjes to your celebration. We handle the cooking, you enjoy the moment.</p>
                        <div className="">
                            <Link href={'/contact'}><Button variant={'default'}>Contact Us</Button></Link>
                            <Link href={'/events'}><Button variant={'ghost'}>Learn More <ChevronRight/></Button></Link>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4">
                        <Store className="text-primary"/>
                        <h3 className="">Find us at Markets</h3>
                        <p className="max-w-sm md:max-w-md">Visit The Pofferman at your local market. Check our schedule and stop by for fresh poffertjes.</p>
                        <div className="">
                            <Link href={'/markets'}><Button variant={'default'}>Find Us</Button></Link>
                            <Link href={'/faq'}><Button variant={'ghost'}>Learn More <ChevronRight/></Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
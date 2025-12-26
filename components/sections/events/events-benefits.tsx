import PageSection from "@/components/layouts/PageSection";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/ui/custom/content-cards";
import { ChevronRight, Heater, PartyPopper } from "lucide-react";


export default function EventsBenefits(){
    return(
        <PageSection className="bg-background-1 pt-0! mt-0!">
            <div className="grid grid-cols-1 grid-rows-4 lg:grid-rows-2 lg:grid-cols-2 gap-5">
                <div className="row-span-2 col-span-1">
                    <ContentCard 
                    variant="primary" 
                    className="text-center"
                    bgSrc="/insta-screenshot-4.png"
                    alt="Poffertjes on the Grill"
                    subtext="Benefits"
                    contentHeader="Guests remember what they taste"
                    contentBody="Hot poffertjes made right at your event stay with people long after the last bite. That's the difference between a meal and a memory."
                    contentFooter={<Button className="px-0!" variant={'ghost'}>More<ChevronRight/></Button>}/>
                </div>
                <div className="row-span-2 grid grid-cols-1 grid-rows-2 gap-5">
                    <div className="rows-span-1 cols-span-1">
                        <ContentCard
                        variant="secondary"
                        className="bg-primary"
                        subtext={<PartyPopper/>}
                        contentHeader="Entertainment included"
                        contentBody="Watching the cook work is half the fun. Your guests get a show with their dessert."
                        contentFooter={<Button className="px-0!" variant={'ghost'}>More<ChevronRight/></Button>}/>
                    </div>                
                    <div className="rows-span-1 cols-span-1">
                        <ContentCard
                        variant="secondary"
                        className="bg-primary"
                        subtext={<Heater/>}
                        contentHeader="Nothing goes stale"
                        contentBody="Fresh poffertjes come off the griddle when people are ready to eat them, not hours before."
                        contentFooter={<Button className="px-0!" variant={'ghost'}>More<ChevronRight/></Button>}/>
                    </div>                
                </div>
            </div>
        </PageSection>
    )
}
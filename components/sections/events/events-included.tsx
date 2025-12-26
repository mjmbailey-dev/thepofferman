import PageSection from "@/components/layouts/PageSection";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChefHatIcon, PartyPopper } from "lucide-react";
import { ContentCard } from "@/components/ui/custom/content-cards";

export default function EventsIncluded(){
    return(
        <PageSection className="bg-background-1">
            <div className="flex flex-col text-center justify-center">
                <p className="subtext">Included</p>
                <h2>What makes our events special</h2>
                <p>Every detail matters when you celebrate</p>
                <div className="grid grid-cols-1 md:grid-cols-2 text-left items-left justify-start lg:grid-cols-4 grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-5 mt-20 min-h-100">
                    <div className="md:col-span-2 row-span-2 md:row-span-1">
                        <ContentCard
                        variant="primary"
                        className=""
                        alt="pofferman at work cooking dutch pancakes"
                        subtext="Feature"
                        contentHeader="Design your own Poffertjes menu" 
                        contentBody="Choose from classic toppings or create something entirely new for your guests." 
                        contentFooter={<Button variant={'ghost'} className="mx-0! px-0! opacity-100!">Explore<ChevronRight/></Button>} 
                        bgSrc="/insta-screenshot-2.png"/>
                    </div>
                    <div className="">
                        <ContentCard
                        variant="secondary"
                        className="w-full"
                        alt="pofferman at work cooking dutch pancakes"
                        subtext={<ChefHatIcon size={30}/>}
                        contentHeader="Watch them cook right before your eyes" 
                        contentBody="Fresh poffertjes made on-site bring magic to any gathering." 
                        contentFooter={<Button variant={'ghost'} className="mx-0! px-0! opacity-100!">Explore<ChevronRight/></Button>} 
                        bgSrc="/insta-screenshot-1.png"/>
                    </div>
                    <div className="">
                        <ContentCard
                        variant="secondary"
                        className="w-full"
                        alt="pofferman at work cooking dutch pancakes"
                        subtext={<PartyPopper size={30}/>}
                        contentHeader="Perfect for any celebration you can imagine" 
                        contentBody="Birthdays, weddings, corporate events, or intimate gatherings all work beautifully." 
                        contentFooter={<Button variant={'ghost'} className="mx-0! px-0! opacity-100!">Explore<ChevronRight/></Button>} 
                        bgSrc="/insta-screenshot-3.png"/>
                    </div>
                </div>
            </div>
        </PageSection>
    )
}
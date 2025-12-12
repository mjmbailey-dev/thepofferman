import EventsHeader from "@/components/sections/events/events-header";
import EventsIncluded from "@/components/sections/events/events-included";
import EventsBenefits from "@/components/sections/events/events-benefits";
import PastEvents from "@/components/sections/events/events-gallery";
import EventsReviews from "@/components/sections/events/events-reviews";

export default function EventPage(){
    return(
        <div className="mt-10 md:mt-15 lg:mt-20">
            <EventsHeader/>
            <EventsIncluded/>
            <EventsBenefits/>
            <PastEvents/>
            {/* <EventsReviews/> */}
        </div>
    )
}
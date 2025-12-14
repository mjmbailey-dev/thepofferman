import MarketsFAQ from "@/components/sections/markets/markets-faq";
import MarketsHeader from "@/components/sections/markets/markets-header";
import MarketsMainLocation from "@/components/sections/markets/markets-main-locations";

export default function MarketsPage(){
    return(
        <div className="mt-10 md:mt-15 lg:mt-20">
            <MarketsHeader/>
            <MarketsMainLocation/>
            <MarketsFAQ/>
        </div>
    )
}
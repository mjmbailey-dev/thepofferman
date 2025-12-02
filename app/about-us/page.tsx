import AboutUsHeader from "@/components/page-components/about-us-components/header/header";
import LoveStory from "@/components/page-components/about-us-components/love-story/love-story";
import Journey from "@/components/page-components/about-us-components/journey/Journey";
import AboutUsGallery from "@/components/page-components/about-us-components/about-us-gallary/about-us-gallary";
import AboutUsCTA from "@/components/page-components/about-us-components/about-us-cta/about-us-cta";

export default function AboutUs() {
    return(
        <div className="">
            <AboutUsHeader/>
            <LoveStory/>
            <Journey/>
            <AboutUsGallery/>
            <AboutUsCTA/>
        </div>
    )
}
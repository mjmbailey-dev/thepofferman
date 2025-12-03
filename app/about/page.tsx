import AboutUsHeader from "@/components/sections/about/header";
import LoveStory from "@/components/sections/about/love-story";
import Journey from "@/components/sections/about/Journey";
import AboutUsGallery from "@/components/sections/about/about-us-gallary";
import AboutUsCTA from "@/components/sections/about/about-us-cta";
import HomeCTA from "@/components/sections/home/home-cta";
import AboutFAQ from "@/components/sections/about/about-faq";

export default function AboutUs() {
    return(
        <div className="">
            <AboutUsHeader/>
            <LoveStory/>
            <Journey/>
            <AboutUsGallery/>
            <AboutUsCTA/>
            <HomeCTA/>
            <AboutFAQ/>
        </div>
    )
}
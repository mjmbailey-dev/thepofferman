import Hero from "@/components/sections/home/hero";
import HomeCTA from "@/components/sections/home/home-cta";
import LoyaltyRewards from "@/components/sections/home/LoyaltyRewards";
import MarketLocations from "@/components/sections/home/MarketLocations";
import Menu from "@/components/sections/home/menu";
import WhyUs from "@/components/sections/home/why-us";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <WhyUs/>
      <Menu/>
      <LoyaltyRewards/>
      <MarketLocations/>
      <HomeCTA/>
    </div>
  );
}

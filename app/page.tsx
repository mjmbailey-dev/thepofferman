import Hero from "@/components/page-components/home-components/hero/hero";
import LoyaltyRewards from "@/components/page-components/home-components/loyalty-rewards/LoyaltyRewards";
import MarketLocations from "@/components/page-components/home-components/market-locations/MarketLocations";
import Menu from "@/components/page-components/home-components/menu/menu";
import WhyUs from "@/components/page-components/home-components/why-us/why-us";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <WhyUs/>
      <Menu/>
      <LoyaltyRewards/>
      <MarketLocations/>
    </div>
  );
}

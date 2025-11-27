import Hero from "@/components/page-components/hero/hero";
import LoyaltyRewards from "@/components/page-components/loyalty-rewards/LoyaltyRewards";
import Menu from "@/components/page-components/menu/menu";
import WhyUs from "@/components/page-components/why-us/why-us";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <WhyUs/>
      <Menu/>
      <LoyaltyRewards/>
    </div>
  );
}

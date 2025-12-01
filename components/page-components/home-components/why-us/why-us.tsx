import BrandButton from "@/components/ui/custom/BrandButton";
import { ArrowRight, ChefHatIcon, PartyPopper, ReceiptText } from "lucide-react";

export default function WhyUs(){
    return(
        <section className="w-full h-auto bg-secondary-lightest flex justify-center py-10">
            <div className="max-w-7xl mx-10 mt-10">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col align-middle text-center gap-10 my-5">
                        <p className="text-style">What we do</p>
                        <h1 className="header-style text-neutral-darkest">Three Reasons to Choose <br/>The PofferMan</h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-10 my-10">
                        <div className="flex flex-col justify-center align-top items-center text-center gap-5">
                            <ReceiptText size={50} className="text-neutral-darkest"/>
                            <h2 className="emphasise-style text-neutral-darkest">Authentic Dutch Recipe</h2>
                            <p className="text-style">We honour the craft of making poffertjes the way they've been made for generations.</p>
                        </div>
                        <div className="flex flex-col justify-center align-top items-center text-center gap-5">
                            <ChefHatIcon size={50} className="text-neutral-darkest"/>
                            <h2 className="emphasise-style text-neutral-darkest">Made fresh daily</h2>
                            <p className="text-style">Every batch is prepared fresh at the market with the finest ingredients.</p>
                        </div>
                        <div className="flex flex-col justify-center align-top items-center text-center gap-5">
                            <PartyPopper size={50} className="text-neutral-darkest"/>
                            <h2 className="emphasise-style text-neutral-darkest">Private event bookings</h2>
                            <p className="text-style">We bring our poffertjes kitchen to your celebration with the same care and quality.</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center gap-8">
                        <BrandButton variant={"secondary"} size="lg" className="min-w-10">Find us</BrandButton>
                        <BrandButton variant={"muted"} size={"lg"} className="min-w-10">More <ArrowRight/></BrandButton>
                    </div>
                </div>
            </div>

        </section>
    )
}
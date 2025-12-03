import BrandButton from "@/components/ui/custom/BrandButton"
import Image from "next/image"
import { ChevronDown, Minus } from "lucide-react"

export default function Journey(){
    return(
        <section className="bg-background-4 flex justify-center w-full py-10 md:py-20">
            <div className="max-w-7xl w-full flex flex-col mx-10 gap-5 justify-center">
                <div className="">
                    <p className="subtext">Journey & Purpose</p>
                    <h2 className="">Bringing a Dutch Tradition to Australia</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-20 items-center">
                
                {/* TEXT COLUMN */}
                <div className="flex-1 min-w-[250px] md:min-w-[300px]">

                    <div className="flex flex-col gap-5 py-6 text-center md:text-left">
                        <p className="">
                            Moving from the Netherlands to Australia was a big adventure. It inspired me to start my own poffertjes business!
                        </p>
                        <p className="">
                            Now, I bring this delicious Dutch treat to your local farmers market, and can’t wait to share the taste of home with you.
                        </p>
                        <p className="">See you soon!</p>
                    </div>

                    <div className="flex justify-center">
                        <BrandButton variant="muted" className="max-w-40">
                            <Minus className="scale-300" />
                            <ChevronDown className="scale-150" />
                            <Minus className="scale-300" />
                        </BrandButton>
                    </div>
                </div>

                {/* IMAGE COLUMN */}
                <div className="flex-1 max-w-[500px] w-full relative">
                    <div className="relative w-full aspect-square">
                    <Image
                        className="rounded-md object-cover"
                        src="/insta-screenshot-1.png"
                        alt="Founder Working"
                        fill
                    />
                    </div>
                </div>
                </div>

            </div>
        </section>
    )
}
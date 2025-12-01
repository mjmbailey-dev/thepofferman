import BrandButton from "@/components/ui/custom/BrandButton"
import Image from "next/image"
import { ChevronDown, Minus } from "lucide-react"

export default function Journey(){
    return(
        <section className="bg-neutral-lightest flex justify-center w-full py-10 md:py-20">
            <div className="max-w-7xl w-full flex flex-col mx-10 gap-5 justify-center">
                
                <div className="flex flex-col lg:flex-row overflow-hidden gap-7">
                    <div className="flex flex-col flex-1 justify-center">
                        <div className="flex flex-col flex-1">
                            <h2 className="text-style text-neutral-darkest! text-xl!">Journey & Purpose</h2>
                            <h1 className="header-style  text-primary-main text-6xl! py-2">Bringing a Dutch Tradition to Australia</h1>

                            <div className="flex flex-col gap-2 py-6">
                                <p className="text-style text-justify text-lg!">Leaving the Netherlands wasn’t easy. I left behind my language, 
                                                                                my family, my hometown everything familiar.</p>
                                <p className="text-style text-justify text-lg!">I started The PofferMan with one simple goal:
                                                                                to share the warm, authentic Dutch poffertjes I grew up with 
                                                                                made fresh, made properly, made with heart.</p>
                                <p className="text-style text-justify text-lg!">Because for me, these aren’t just pancakes. They’re a little bit of home.</p>

                            </div>
                            <BrandButton variant='muted' className="max-w-40 mx-auto"><Minus className="scale-300"/><ChevronDown className="scale-150"/><Minus className="scale-300"/></BrandButton>
                        </div>
                    </div>
                    <div className="flex-1 relative aspect-square">
                        <Image className="rounded-md" src={'/insta-screenshot-1.png'} alt="Founder and Partner" fill/>
                    </div>
                </div>
            </div>
        </section>
    )
}
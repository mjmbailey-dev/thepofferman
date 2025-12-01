import Image from "next/image"
import BrandButton from "@/components/ui/custom/BrandButton"
import { ChevronDown } from "lucide-react"

export default function LoveStory(){
    return(
        <section className="bg-secondary-lightest flex justify-center w-full py-10 md:py-20">
            <div className="max-w-7xl w-full flex flex-col mx-10 gap-5 justify-center">
                <div className="flex flex-col mx-10 gap-5 justify-center">
                    <h2 className="text-style text-center text-neutral-darkest">A Love Story</h2>
                    <h1 className="header-style text-center text-primary-main text-7xl!">How it all started</h1>
                    <div className="flex flex-col gap-3">
                        <p className="text-style text-center">I met my love, an Australian who had moved to the Netherlands.</p>
                        <p className="text-style text-center">We connected instantly through our cultures, both similarities and differences.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row border-4 rounded-3xl overflow-hidden">
                    <div className="flex-1 relative aspect-square">
                        <Image className="" src={'/insta-screenshot-5.jpg'} alt="Founder and Partner" fill/>
                    </div>
                    <div className="flex flex-col flex-1 justify-center">
                        <div className="flex flex-col p-2">
                            <h2 className="text-style text-neutral-darkest text-xl!">gezelligheid</h2>
                            <h1 className="header-style  text-primary-main text-6xl! py-2">Time Together</h1>

                            <div className="flex flex-col gap-2 py-6">
                                <p className="text-style text-lg!">{"We wandered through Dutch markets, sharing warm poffertjes fresh off the pan."}</p>
                                <p className="text-style text-lg!">Poffertjes became our tradition. Something small, sweet, and meaningful.</p>
                            </div>
                            <BrandButton variant='muted' className="max-w-40 mx-auto"><ChevronDown/></BrandButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
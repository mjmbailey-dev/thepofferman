import Image from "next/image"
import BrandButton from "@/components/ui/custom/BrandButton"
import { ChevronDown } from "lucide-react"

export default function LoveStory(){
    return(
        <section className="bg-background-1 flex justify-center w-full py-10 md:py-20">
            <div className="max-w-7xl w-full flex flex-col mx-10 gap-5 justify-center">
                <div className="flex flex-col mx-10 gap-5 justify-center">
                    <p className="subtext text-center">A Love Story</p>
                    <h2 className="text-center">How it all started</h2>
                    <div className="flex flex-col gap-3">
                        <p className="text-center">I met my love, an Australian who had moved to the Netherlands.</p>
                        <p className="text-center">We connected instantly through our cultures, both similarities and differences.</p>
                    </div>
                </div>
                <div className="border-4 border-foreground rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* IMAGE */}
                        <div className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-[500px] w-full">
                            <Image
                                src="/insta-screenshot-5.jpg"
                                alt="Founder and Partner"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="flex flex-col justify-center p-6 md:p-10 text-center lg:text-left">
                            <p className="subtext">gezelligheid</p>
                            <h2 className="py-2">Time Together</h2>

                            <div className="flex flex-col gap-3 py-6">
                                <p>We wandered through Dutch markets, sharing warm poffertjes fresh off the pan.</p>
                                <p>Poffertjes became our tradition. Something small, sweet, and meaningful.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
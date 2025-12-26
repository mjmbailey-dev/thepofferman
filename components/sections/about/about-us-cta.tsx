import SocialMediaGroup from "@/components/ui/custom/SocialMediaGroup";


export default function AboutUsCTA(){
    return(
        <section className="bg-background-1 flex justify-center w-full py-10 md:py-20">
            <div className="max-w-7xl w-full flex flex-col mx-10 gap-5 justify-center">
                <div className="flex flex-col justify-center gap-10">
                    <h2 className="text-center">Be Part of this Story</h2>
                    <p className="text-center">Follow us at markets, book us for your celebration, or reach out to collaborate</p>
                    <div className="max-h-10">
                        <SocialMediaGroup/>
                    </div>
                </div>
            </div>
        </section>
    )
}
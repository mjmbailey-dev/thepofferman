import SocialMediaGroup from "@/components/ui/custom/SocialMedia/SocialMediaGroup";


export default function AboutUsCTA(){
    return(
        <section className="bg-neutral-lightest flex justify-center w-full py-10 md:py-20 border-neutral-lightest! outline-border-lightest!">
            <div className="max-w-7xl w-full flex flex-col mx-10 gap-5 justify-center">
                <div className="flex flex-col justify-center gap-10">
                    <h1 className="header-style text-center text-neutral-darkest text-7xl!">Be Part of this Story</h1>
                    <p className="emphasise-style text-xl! text-neutral-dark text-center">Follow us at markets, book us for your celebration, or reach out to collaborate</p>
                    <div className="max-h-10">
                        <SocialMediaGroup/>
                    </div>
                </div>
            </div>
        </section>
    )
}
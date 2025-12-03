import Image from "next/image";

export default function LoyaltyRewards() {
    return(
        <section className="w-full bg-background-2 h-auto flex justify-center py-10 md:py-15 text-on-light">
            <div className="max-w-7xl mx-10 w-full">
                <h2 className="text-center mb-20">Loyalty Rewards!</h2>
                <div className="flex flex-col lg:flex-row items-center align-middle justify-between mt-20 gap-10">
                    <div className="flex flex-col text-center justify-center align-middle gap-8">
                        <h3 className="text-center">Loyalty Cards!</h3>
                        <p className="text-center lead max-w-md lg:max-w-lg">Stamp your loyalty card and get Free Pofferjies</p>
                    </div>
                    <div className="md:min-w-2xl">
                        <Image src='/rewards-cards.png' alt='Rewards cards' width={400} height={400} className="rounded-xl h-auto w-full"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
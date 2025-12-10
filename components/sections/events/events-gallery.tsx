import PageSection from "@/components/layouts/PageSection";
import Image from "next/image";

const ImageClasses = "aspect-square rounded-xl shadow-2xl hover:scale-102 transition"

export default function PastEvents(){
    return (
        <PageSection className="bg-background-3">
            <div className="flex flex-col text-center text-on-dark">
                <h2>Past Events</h2>
                <p className="">
                    See how we've brought poffertjes to celebrations
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-5 py-10">
                    <div className="relative col-span-2 row-span-2 aspect-square">
                        <Image src="/insta-screenshot-4.png" alt="Logo" fill  className={ImageClasses}/>
                    </div>
                    <div className="relative col-span-1 row-span-1 aspect-square">
                        <Image src="/insta-screenshot-1.png" alt="Logo" fill  className={ImageClasses}/>
                    </div>
                    <div className="relative col-span-1 row-span-1 aspect-square">
                        <Image src="/insta-screenshot-2.png" alt="Logo" fill  className={ImageClasses}/>
                    </div>
                    <div className="relative col-span-1 row-span-1 aspect-square">
                        <Image src="/insta-screenshot-3.png" alt="Logo" fill  className={ImageClasses}/>
                    </div>
                    <div className="relative col-span-1 row-span-1 aspect-square">
                        <Image src="/Logo.jpg" alt="Logo" fill  className={ImageClasses}/>
                    </div>
                </div>
            </div>
        </PageSection>
    )
}
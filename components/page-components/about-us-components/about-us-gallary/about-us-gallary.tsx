import Image from "next/image"



export default function AboutUsGallery(){
    return(
        <section className="bg-primary-dark flex justify-center w-full py-10 md:py-20">
            <div className="max-w-7xl w-full flex flex-col mx-10 gap-5 justify-center">
                <div className="flex flex-col justify-center w-full">
                    <h1 className="header-style text-center text-neutral-lightest text-7xl!">Our Journey</h1>
                    <p className="emphasise-style text-xl! text-neutral-lightest text-center">Moments that shaped The Pofferman from dream to reality.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-5 py-10">
                        <div className="relative col-span-2 row-span-2 aspect-square">
                            <Image src="/Logo.jpg" alt="Logo" fill  className="aspect-square rounded-xl"/>
                        </div>
                        <div className="relative col-span-1 row-span-1 aspect-square">
                            <Image src="/insta-screenshot-1.png" alt="Logo" fill  className="aspect-square rounded-xl"/>
                        </div>
                        <div className="relative col-span-1 row-span-1 aspect-square">
                            <Image src="/insta-screenshot-2.png" alt="Logo" fill  className="aspect-square rounded-xl"/>
                        </div>
                        <div className="relative col-span-1 row-span-1 aspect-square">
                            <Image src="/insta-screenshot-3.png" alt="Logo" fill  className="aspect-square rounded-xl"/>
                        </div>
                        <div className="relative col-span-1 row-span-1 aspect-square">
                            <Image src="/insta-screenshot-4.png" alt="Logo" fill  className="aspect-square rounded-xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


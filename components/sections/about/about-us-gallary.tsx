import Image from "next/image"

const ImageClasses = "aspect-square rounded-xl shadow-2xl hover:scale-102 transition"

export default function AboutUsGallery(){
    return(
        <section className="bg-background-3 flex justify-center w-full py-10 md:py-20">
            <div className="max-w-7xl w-full flex flex-col mx-10 gap-5 justify-center">
                <div className="flex flex-col justify-center w-full">
                    <h2 className="text-center">Our Journey</h2>
                    <p className="text-center">Moments that shaped The Pofferman from dream to reality.</p>
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
            </div>
        </section>
    )
}


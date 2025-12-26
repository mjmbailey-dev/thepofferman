import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";




export default function Hero(){
    return(
        <section className="w-full bg-background-2 h-auto flex justify-center py-10 md:py-15 lg:py-20">
            <div className="max-w-7xl mt-20 md:mt-15 lg:mt-10 mx-10 w-full">

                <div className="border-4 border-primary flex flex-col justify-center rounded-3xl pt-16 sm:pt-20 pb-10 px-6 sm:px-10 lg:px-16 drop-shadow-2xl!">
                    <h1 className="text-center mb-12">Do You Know The PofferMan?!</h1>
                    <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-16 md:gap-20">
                        <div className="flex flex-col justify-center text-center max-w-xl mx-auto md:text-left gap-4">
                            <p className="lead">
                                {"Golden brown, Fluffy and Sweet, it`s a real joy to eat!"}
                            </p>

                            <p className="lead">
                                The PofferMan brings traditional Dutch pancakes to life!
                            </p>
                            
                            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center lg:justify-start pt-4">
                                <Link href={"/contact"}>
                                    <Button variant={"default"} size={"lg"}>Contact Us</Button>
                                </Link>
                                <Link href={'/markets'}>
                                    <Button variant={"outline"} size={"lg"}>Find Us<ChevronRight/></Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end items-center">
                            <Image src="/Logo.jpg" alt="Company Logo" height={450} width={450} className="rounded-full logo-shadows"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
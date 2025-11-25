import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import OrSeparator from "../ui/OrSeparator";


export default function Hero(){
    return(
        <section className="md:mx-5 w-full mt-10 md:mt-20 static">
            <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl 2xs:text-3xl text-center text-shadow-lg z-50">DO YOU KNOW THE POFFERMAN!?</h1>
            <div className="flex items-center align-middle justify-center z-40 2xs:min-h-70 xs:min-h-120   ">
                <Image 
                src={"/Logo.jpg"} 
                alt="Owner cooking some Pofferjies" 
                width={500}
                height={500}
                className="rounded-full w-full max-w-[600px] absolute 2xs:top-30 sm:top-35 md:top-45 lg:top-55 mx-auto -z-40 shadow-xs"
                />
            </div>
            <div className="z-50">
                <Card className="flex flex-col justify-center mx-auto py-5 text-center max-w-4xl">
                    <p className="text-3xl my-5 text-center z-50">Golden brown, Fluffy and Sweet, it`s a real joy to eat!</p>
                    <div className="flex flex-col md:grid md:grid-cols-5 justify-center min-h-25 items-center align-middle md:px-5 mt-10">
                        <div className="md:col-start-1 md:col-span-2">
                            <div className="items-end flex justify-end">
                                <Button variant="secondary" size={"lg"} className="text-lg max-w-60 min-w-50 align-middle">Come Find Us!</Button>
                            </div>
                        </div>
                        <div className="h-auto md:col-start-3">
                            <OrSeparator/>
                        </div>
                        <div className="items-start flex  md:col-start-4 md:col-span-2">
                            <div className="flex justify-start">
                                <Button variant="default" size={"lg"} className="text-lg max-w-60 min-w-50">Enquire About Booking!</Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
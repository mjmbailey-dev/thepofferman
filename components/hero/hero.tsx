import Image from "next/image";
import { Button } from "../ui/button";
import OrSeparator from "../ui/OrSeparator";


export default function Hero(){
    return(
        <section className="md:mx-5 w-full mt-10 md:mt-20">
            <h1 className="md:text-8xl text-center">DO YOU KNOW THE POFFERMAN!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <Image 
                src={"/insta-screenshot-1.png"} 
                alt="Owner cooking some Pofferjies" 
                width={500}
                height={500}
                className="rounded-lg w-full"
                />
                <div className="flex flex-col justify-center mx-5 py-5 text-center">
                    <h2 className="my-5">The Pofferman?</h2>
                    <h1 className="my-5">The Pofferman!</h1>
                    <p className="text-3xl my-5">Golden brown, Fluffy and Sweet, it`s a real joy to eat!</p>

                    <div className="flex flex-col md:flex-row justify-center min-h-25 items-center md:px-5 mt-10">
                        <Button variant="secondary" size={"lg"} className="text-lg">Come Find Us!</Button>
                        <OrSeparator/>
                        <Button variant="default" size={"lg"} className="text-lg">Enquire About Booking!</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
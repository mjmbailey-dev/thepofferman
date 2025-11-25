import Image from "next/image";
import { Button } from "../ui/button";
import OrSeparator from "../ui/OrSeparator";


export default function Hero(){
    return(
        <section className="md:mx-5 w-full mt-10 md:mt-15">
            <h1 className="md:text-7xl text-center text-primary dark:text-secondary-foreground">DO YOU KNOW THE POFFERMAN!</h1>
            <div className="mx-auto min-h-40">
                <Image 
                src={"/Logo.jpg"} 
                alt="The PofferMan!" 
                width={400}
                height={400}
                className="rounded-full max-h-4/5 min-h-1/2 mx-auto"
                />
            </div>
                <div className="flex flex-col justify-center mx-5 py-5 text-center">
                    <p className="text-3xl my-5">Golden brown, Fluffy and Sweet, it`s a real joy to eat!</p>

                    <div className="flex flex-col md:flex-row justify-center min-h-25 items-center md:px-5 mt-10">
                        <Button variant="secondary" size={"lg"} className="text-lg">Come Find Us!</Button>
                        <OrSeparator/>
                        <Button variant="default" size={"lg"} className="text-lg">Enquire About Booking!</Button>
                    </div>
                </div>
        </section>
    )
}
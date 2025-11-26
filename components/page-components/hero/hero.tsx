'use client'

import Image from "next/image";
import BrandButton from "../../ui/custom/BrandButton";




export default function Hero(){
    return(
        <section className="w-full bg-secondary-lighter h-auto flex justify-center py-20 ">
            <div className="max-w-7xl mt-20 mx-10 w-full">
                <div className="border-2 rounded-3xl border-primary-dark flex flex-col lg:flex-row align-middle justify-between p-15">
                    <div className="flex flex-col align-middle items-center justify-between gap-4">
                        <h1 className="header-style text-center">Do You Know The  <br/>PofferMan?!</h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-style text-center">{"Golden brown, Fluffy and Sweet, it`s a real joy to eat!"}</p>
                            <p className="text-style text-center">The PofferMan brings traditional Dutch pancakes to life!</p>
                        </div>
                        <div className="flex flex-row gap-5">
                            <BrandButton variant={"secondary"} size={"lg"} className="min-w-[150px] sm:min-w-[200px]">Find Us</BrandButton>
                            <BrandButton variant={"primary"} size={"lg"} className="min-w-[150px] sm:min-w-[200px]">Contact Us</BrandButton>
                        </div>
                    </div>
                    <div className="p-3 mx-auto my-10 min-h-50 min-w-[300px] flex align-middle items-center ">
                        <Image src="/Logo.jpg" alt="Company Logo" height={400} width={400} className="rounded-full logo-shadows"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
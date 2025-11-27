import { Dot } from "lucide-react";
import Butter from "@/public/Butter.svg"

export default function Menu(){
    return(
        <section className="w-full min-h-screen bg-primary-dark">
            <div className="man-w-7xl w-full flex justify-center py-20 mx-auto">
                <div className="flex flex-col align-middle text-center items-center my-10 gap-20">
                    <h1 className="header-style text-neutral-lightest">The Menu</h1>
                    <h2 className="header-style text-5xl! text-neutral-lightest">Choose Your Size!</h2>
                    <div className="flex flex-row gap-20 justify-evenly">
                        <div className="flex flex-col align-top items-center text-center">
                            <Dot size={50} className="text-secondary-main" strokeWidth={11}/>
                            <h3 className="emphasise-style text-neutral-lightest">Regular</h3>
                            <p className="label-style text-neutral-lightest">$8.50</p>
                        </div>
                        <div className="flex flex-col align-top items-center text-center">
                            <div className="flex flex-row">
                                <Dot size={50} className="text-secondary-main" strokeWidth={11}/>
                                <Dot size={50} className="text-secondary-main" strokeWidth={11}/>
                            </div>
                            <h3 className="emphasise-style text-neutral-lightest">Large</h3>
                            <p className="label-style text-neutral-lightest">$12.50</p>
                        </div>
                    </div>
                    <h2 className="header-style text-5xl! text-neutral-lightest">Choose Your Topping!</h2>
                    <div className="">
                        <Butter className="text-secondary-main"/>
                        <h3 className="emphasise-style text-neutral-lightest">Large</h3>
                        <p className="label-style text-neutral-lightest">$12.50</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
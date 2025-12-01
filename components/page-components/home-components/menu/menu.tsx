import { CitrusIcon, Dot } from "lucide-react";
import ButterIcon from "./svgs/Butter/Butter";
import WhippedCreamIcon from "./svgs/WhippedCream/WhippedCream";
import NutellaIcon from "./svgs/Nutella/Nutella";
import MapleSyrupIcon from "./svgs/MapleSyrup/MapleSyrup";
import BiscoffIcon from "./svgs/Biscoff/Biscoff";

export default function Menu(){
    return(
        <section className="w-full min-h-screen bg-primary-dark flex justify-center border-b-5 border-secondary-main">
            <div className="max-w-7xl w-full flex justify-center py-10 md:py-15 mx-10">
                <div className="flex flex-col align-middle text-center items-center my-10 gap-20 w-full">
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
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 
                    gap-x-10 gap-y-30
                    sm:gap-x-30
                    lg:gap-x-50">
                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <div className="h-30 md:h-40 flex justify-center items-end ">
                                    <ButterIcon className="text-secondary-main w-30 h-auto md:w-40"/>

                                </div>
                                <h3 className="emphasise-style text-neutral-lightest text-lg! md:text-2xl! xl:text-3xl!">Traditional</h3>
                                <p className="label-style text-neutral-lightest ">Butter and Icing Sugar</p>
                            </div>

                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <WhippedCreamIcon className="text-secondary-main w-30 h-30 md:w-40 md:h-40"/>
                                <h3 className="emphasise-style text-neutral-lightest text-lg! md:text-2xl! xl:text-3xl!">Whipped Cream</h3>
                                <p className="label-style text-neutral-lightest">+50c</p>
                            </div>

                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <NutellaIcon strokeWidth={0} className="text-secondary-main w-30 h-30 md:w-40 md:h-40"/>
                                <h3 className="emphasise-style text-neutral-lightest text-lg! md:text-2xl!">Nutella</h3>
                                <p className="label-style text-neutral-lightest">+$2.50</p>
                            </div>
                       

                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <MapleSyrupIcon strokeWidth={0} className="text-secondary-main w-30 h-30 md:w-40 md:h-40"/>
                                <h3 className="emphasise-style text-neutral-lightest text-lg! md:text-2xl! xl:text-3xl!">Maple Syrup</h3>
                                <p className="label-style text-neutral-lightest">+$1.50</p>
                            </div>

                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <BiscoffIcon strokeWidth={0} className="text-secondary-main w-30 h-30 md:w-40 md:h-40"/>
                                <h3 className="emphasise-style text-neutral-lightest text-lg! md:text-2xl! xl:text-3xl!">Biscoff</h3>
                                <p className="label-style text-neutral-lightest">+$2.50</p>
                            </div>

                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <CitrusIcon size={100} strokeWidth={1} className="text-secondary-main w-30 h-30 md:w-40 md:h-40"/>
                                <h3 className="emphasise-style text-neutral-lightest text-lg! md:text-2xl! xl:text-3xl!">Lemon</h3>
                                <p className="label-style text-neutral-lightest">+50c</p>
                            </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
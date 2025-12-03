import { CitrusIcon, Dot } from "lucide-react";
import ButterIcon from "../../ui/icons/menu/Butter";
import WhippedCreamIcon from "../../ui/icons/menu/WhippedCream";
import NutellaIcon from "../../ui/icons/menu/Nutella";
import MapleSyrupIcon from "../../ui/icons/menu/MapleSyrup";
import BiscoffIcon from "../../ui/icons/menu/Biscoff";

export default function Menu(){
    return(
        <section className="w-full bg-background-3 text-on-dark flex justify-center border-b-5 border-secondary-main">
            <div className="max-w-7xl w-full flex justify-center py-10 md:py-15 mx-10">
                <div className="flex flex-col align-middle text-center items-center my-10 gap-20 w-full">
                    <h2>The Menu</h2>
                    <h3>Choose Your Size!</h3>
                    <div className="flex flex-row gap-20 justify-evenly">
                        <div className="flex flex-col align-top items-center text-center">
                            <Dot size={50} className="text-secondary-main" strokeWidth={11}/>
                            <h4>Regular</h4>
                            <p>$8.50</p>
                        </div>
                        <div className="flex flex-col align-top items-center text-center">
                            <div className="flex flex-row">
                                <Dot size={50} className="text-secondary-main" strokeWidth={11}/>
                                <Dot size={50} className="text-secondary-main" strokeWidth={11}/>
                            </div>
                            <h4>Large</h4>
                            <p>$12.50</p>
                        </div>
                    </div>
                    <h3>Choose Your Topping!</h3>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 
                    gap-x-10 gap-y-30
                    sm:gap-x-30
                    lg:gap-x-50">
                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <div className="h-30 md:h-40 flex justify-center items-end ">
                                    <ButterIcon className="text-secondary-main w-30 h-auto md:w-40"/>
                                </div>
                                <h4>Traditional</h4>
                                <p>Butter and Icing Sugar</p>
                            </div>

                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <WhippedCreamIcon className="text-secondary-main w-30 h-30 md:w-40 md:h-40"/>
                                <h4>Whipped Cream</h4>
                                <p>+50c</p>
                            </div>

                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <NutellaIcon strokeWidth={0} className="text-secondary-main w-30 h-30 md:w-40 md:h-40"/>
                                <h4>Nutella</h4>
                                <p>+$2.50</p>
                            </div>
                       

                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <MapleSyrupIcon strokeWidth={0} className="text-secondary-main w-30 h-30 md:w-40 md:h-40"/>
                                <h4 >Maple Syrup</h4>
                                <p>+$1.50</p>
                            </div>

                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <BiscoffIcon strokeWidth={0} className="text-secondary-main w-30 h-30 md:w-40 md:h-40"/>
                                <h4 >Biscoff</h4>
                                <p>+$2.50</p>
                            </div>

                            <div className="flex flex-col align-middle justify-start items-center text-center gap-y-5">
                                <CitrusIcon size={100} strokeWidth={1} className="text-secondary-main w-30 h-30 md:w-40 md:h-40"/>
                                <h4>Lemon</h4>
                                <p>+50c</p>
                            </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
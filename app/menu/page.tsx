import Menu from "@/components/sections/home/menu";
import MenuFAQ from "@/components/sections/menu/menu-faq";

export default function TheMenu(){

    return(
        <div className="mt-10 md:mt-15 lg:mt-20">
            <Menu/>
            <MenuFAQ/>
        </div>
    )
}
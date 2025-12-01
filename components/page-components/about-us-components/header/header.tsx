import BrandButton from "@/components/ui/custom/BrandButton";
import { ChevronDown, MoveDownIcon } from "lucide-react";

export default function AboutUsHeader() {

    return(
        <section className="bg-secondary-lighter flex justify-center w-full py-10 md:py-20">
            <div className="max-w-7xl w-full flex flex-col mt-20 mx-10 gap-5 justify-center">
                <h2 className="text-style text-center text-neutral-darkest">Origins</h2>
                <h1 className="header-style text-center text-primary-dark text-8xl!">The PofferMan<br/>story</h1>
                <p className="text-style text-center">I crossed the world to make something real and awesome</p>
                <BrandButton variant='muted' className="max-w-40 mx-auto">Begin<br/><ChevronDown/></BrandButton>
            </div>
        </section>
    )
}
import BrandButton from "@/components/ui/custom/BrandButton";
import { ChevronDown, MoveDownIcon, PencilLine } from "lucide-react";

export default function AboutUsHeader() {

    return(
        <section className="bg-background-2 flex justify-center w-full py-10 md:py-20">
            <div className="max-w-7xl w-full flex flex-col mt-20 mx-10 gap-5 justify-center">
                <p className="subtext text-center">Origins</p>
                <h1 className="text-center">The PofferMan</h1>
                <h3 className="text-center">A Story</h3>
                <p className="lead text-center">I crossed the world to make something real and awesome</p>
            </div>
        </section>
    )
}
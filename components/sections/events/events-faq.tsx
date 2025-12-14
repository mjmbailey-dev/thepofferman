import PageSection from "@/components/layouts/PageSection";
import FAQ from "@/components/layouts/FAQ";
import Link from "next/link";
import { FAQ_EVENTS } from "@/data";
import BrandButton from "@/components/ui/custom/BrandButton";
import { ChevronRight } from "lucide-react";

export default function EventsFAQ(){
    return(
        <PageSection className="bg-background-3 text-on-dark">
            <div className="flex flex-col justify-center md:flex-row gap-10">
                    <div className="flex-1 flex flex-col text-center items-center md:items-start md:text-left gap-10">
                        <h3 className="">FAQ</h3>
                        <p className="">Some answers to questions about our events!</p>
                        <div className="flex gap-5 align-middle items=center">
                            <Link href=''>
                                <BrandButton className="w-fit"  variant={'secondary'}>Contact</BrandButton>
                            </Link>
                            <Link href='/faq'>
                                <BrandButton className="w-fit text-on-dark"  variant={'muted'}>Full FAQ<ChevronRight/></BrandButton>
                            </Link>
                        </div>
                    </div>
                <div className="flex-1">
                    <FAQ items={FAQ_EVENTS} type={'multiple'}/>
                </div>

            </div>
        </PageSection>
    )
}
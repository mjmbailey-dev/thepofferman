import FAQ from "@/components/layouts/FAQ";
import PageSection from "@/components/layouts/PageSection";
import BrandButton from "@/components/ui/custom/BrandButton";
import { FAQ_MENU } from "@/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";


export default function MenuFAQ(){
    return (
        <PageSection className="bg-background-3 text-on-dark">
            <div className="flex flex-col justify-center md:flex-row gap-10">
                <div className="flex-1 flex flex-col text-center items-center md:items-start md:text-left gap-10">
                    <h3 className="">FAQ</h3>
                    <p className="">Some answers to questions about Dutch pancakes!</p>
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
                    <FAQ items={FAQ_MENU} type={'multiple'}/>
                </div>

            </div>
        </PageSection>
    )
}
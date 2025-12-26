import FAQ from "@/components/layouts/FAQ";
import PageSection from "@/components/layouts/PageSection";
import { Button } from "@/components/ui/button";
import { FAQ_ABOUT } from "@/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";


export default function AboutFAQ(){
    return (
        <PageSection className="bg-background">
            <div className="flex flex-col justify-center md:flex-row gap-10">
                <div className="flex-1 flex flex-col text-center items-center md:items-start md:text-left gap-10">
                    <h3 className="">FAQ</h3>
                    <p className="">Some answers to questions about us and Dutch pancakes!</p>
                    <div className="flex gap-5 align-middle items=center">
                        <Link href='/contact'>
                            <Button className="w-fit"  variant={'default'}>Contact</Button>
                        </Link>
                        <Link href='/faq'>
                            <Button className="w-fit"  variant={'ghost'}>Full FAQ<ChevronRight/></Button>
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <FAQ items={FAQ_ABOUT} type={'multiple'}/>
                </div>

            </div>
        </PageSection>
    )
}
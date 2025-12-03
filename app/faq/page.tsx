import FAQ from "@/components/layouts/FAQ";
import PageSection from "@/components/layouts/PageSection";
import { FAQ_ALL } from "@/data";


export default function FAQPage(){
    return(
        <PageSection className="bg-background-3 text-on-dark mt-10 md:mt-15 lg:mt-20">
            <h1 className="text-center">Frequently Asked Questions</h1>
            <p></p>
            <FAQ type={'multiple'} items={FAQ_ALL} className="bg-background-3 text-on-dark mt-10 md:mt-15 lg:mt-20"/>

        </PageSection>
    )
}
import ContactFormSection from "@/components/sections/contact/contact-form"
import ContactHeader from "@/components/sections/contact/contact-header"
import ContactInfo from "@/components/sections/contact/content-info"

export default function ContactPage(){
    return(
        <div className="mt-10 md:mt-15 lg:mt-20">
            <ContactHeader/>
            <ContactInfo/>
            <ContactFormSection/>
        </div>
    )
}
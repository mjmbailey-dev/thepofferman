import PageSection from "@/components/layouts/PageSection"
import BrandButton from "@/components/ui/custom/BrandButton"
import { ChevronRight, LocateIcon, Mail, MapPinCheck, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactInfo(){
    return(
        <PageSection className="bg-background-1">
            <div className="flex flex-col gap-15">
                <div className="flex flex-col gap-5">
                    <p className="subtext">Reach</p>
                    <h2>Drop us a line</h2>
                    <p className="">We read every message and get back fast!</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-10">

                    <div className="grid grid-rows-[auto,1fr,auto] gap-8">
                        <Mail className="w-8 h-8"/>
                        <div className="">
                            <h3>Email</h3>
                            <p className="subtext">Send us details about your event or ask anything!</p>
                        </div>
                        <Link className="link" href="mailto:hello@pofferman.com">Hello@pofferman.com</Link>
                    </div>

                    <div className="grid grid-rows-[auto,1fr,auto] gap-8">
                        <MessageCircle className="w-8 h-8"/>
                        <div className="">
                            <h3>Message</h3>
                            <p className="subtext">Leave a message anytime via sms or Whatsapp!</p>
                        </div>
                        <Link className="link" href="https://api.whatsapp.com/send?phone=61491017249">+61 491 017 249</Link>
                    </div>

                    <div className="grid grid-rows-[auto,1fr,auto] gap-8">
                        <MapPinCheck className="w-8 h-8"/>
                        <div className="">
                            <h3>In person</h3>
                            <p className="subtext">We're open at markets and can answer questions too!</p>
                        </div>
                        <Link className="link" href="/markets">Find Us</Link>
                    </div>

                </div>
            </div>
        </PageSection>
    )
}
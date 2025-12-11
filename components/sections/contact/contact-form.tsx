import PageSection from "@/components/layouts/PageSection";
import { Mail, MapPinCheck, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactFormSection() {
    return(
        <PageSection className="bg-background-4">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex flex-col gap-5">
                    <div className="">
                        <p className="subtext">Connect</p>
                        <h2>Send us a message</h2>
                    </div>
                    <p>Fill out the form and we'll respond quickly!</p>
                    <div className="flex flex-col gap-5 mt-10">
                        <div className="flex gap-2"><Mail className="w-6 h-6"/><Link className="link" href="mailto:hello@pofferman.com">Hello@pofferman.com</Link></div>
                        <div className="flex gap-2"><MessageCircle className="w-6 h-6"/><Link className="link" href="https://api.whatsapp.com/send?phone=61491017249">+61 491 017 249</Link></div>
                        <div className="flex gap-2"><MapPinCheck className="w-6 h-6"/><Link className="link" href="/markets">Find Us</Link></div>
                    </div>
                </div>
            </div>
        </PageSection>
    )
}
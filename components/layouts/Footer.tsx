import Image from "next/image"
import Link from "next/link"
import SocialMediaGroup from "../ui/custom/SocialMediaGroup"

export default function Footer(){

    return(
        <footer className="w-full bg-background-3 h-auto flex justify-center py-10 md:py-20 text-on-dark">
            <div className="max-w-7xl mx-10 w-full flex flex-col md:flex-row justify-between">
                <div className="flex flex-col flex-1 justify-start gap-5">
                    <div className="flex flex-row gap-5">
                        <Image src='/logo.jpg' width={40} height={40} className="aspect-square" alt="logo"/>
                    </div>
                    <div className="flex flex-row gap-5">
                        <Link className="footer-link" href='/'>Home</Link>
                        <Link className="footer-link" href='/about-us'>About Us</Link>
                        <Link className="footer-link" href='/events'>Events</Link>
                        <Link className="footer-link" href='/menu'>Menu</Link>
                        <Link className="footer-link" href='/markets'>Find Us</Link>
                    </div>
                </div>
                <div className="flex flex-1 flex-col justify-start max-w-40 text-neutral-lightest">
                    <SocialMediaGroup/>
                </div>
            </div>
        </footer>
    )
    
}
import Image from "next/image"
import Link from "next/link"
import SocialMediaGroup from "../ui/custom/SocialMediaGroup"
import { Separator } from "../ui/separator"

export default function Footer(){

    return(
        <footer className="w-full bg-background-3 h-auto flex justify-center py-10 md:py-20 text-on-dark">
            <div className="max-w-7xl mx-10 w-full flex flex-col justify-between gap-5">
                <div className="flex flex-col flex-1 justify-start gap-5">
                    <div className="flex flex-row justify-between items-center gap-5">
                        <Image src='/Logo.jpg' width={50} height={50} className="aspect-square rounded-full" alt="logo"/>
                        <SocialMediaGroup/>
                    </div>
                    <div className="flex flex-col w-full justify-center md:flex-row gap-5">
                        <Link className="footer-link" href='/'>Home</Link>
                        <Link className="footer-link" href='/about'>About</Link>
                        <Link className="footer-link" href='/events'>Events</Link>
                        <Link className="footer-link" href='/menu'>Menu</Link>
                        <Link className="footer-link" href='/markets'>Markets</Link>
                    </div>
                </div>
                <Separator className="border-2 border-white/30"/>
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <div className="flex flex-col md:flex-row gap-5">
                        <Link className="footer-link font-light!" href='/privacy-policy'>Privacy Policy</Link>
                        <Link className="footer-link font-light!" href='/terms-of-service'>Terms of Service</Link>
                    </div>
                    <span>&copy; 2025 The Pofferman. All rights reserved. </span>
                </div>
            </div>
        </footer>
    )
    
}
import Link from "next/link";
import FacebookIcon from "./Facebook/Facebook";
import InstagramIcon from "./Instagram/Instagram";


export default function SocialMediaGroup(){
    return(
        <div className="flex justify-center gap-2 h-10">
            <Link href={'https://www.facebook.com/p/The-Traditional-Dutch-Pancakes-Poffertjes-61573431792978/'}>
                <FacebookIcon className="h-full aspect-square text-neutral-darkest"/>
            </Link>
            <Link href={'https://www.instagram.com/the_pofferman/'}>
                <InstagramIcon className="h-full aspect-square text-neutral-darkest"/>
            </Link>
        </div>
    )
}
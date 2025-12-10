import Link from "next/link";
import FacebookIcon from "../icons/social/Facebook";
import InstagramIcon from "../icons/social/Instagram";


export default function SocialMediaGroup(){
    return(
        <div className="flex justify-center gap-2">
            <Link href={'https://www.facebook.com/p/The-Traditional-Dutch-Pancakes-Poffertjes-61573431792978/'} className="hover:scale-110! hover:text-blue-700!">
                <FacebookIcon className="h-8 w-8"/>
            </Link>
            <Link href={'https://www.instagram.com/the_pofferman/'}className="hover:scale-110! hover:text-pink-700!">
                <InstagramIcon className="h-8 w-8"/>
            </Link>
        </div>
    )
}
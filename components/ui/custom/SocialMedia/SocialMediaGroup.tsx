import FacebookIcon from "./Facebook/Facebook";
import InstagramIcon from "./Instagram/Instagram";


export default function SocialMediaGroup(){
    return(
        <div className="flex justify-between gap-2 h-full max-h-10">
            <FacebookIcon className="h-full"/>
            <InstagramIcon className="h-full"/>
        </div>
    )
}
'use client'
import useTheme from "@/lib/hooks/useTheme";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import ThemeSelect from "./ThemeSelect";
import { SidebarTrigger } from "./ui/sidebar";
import BrandButton from "./ui/custom/BrandButton";
import { cn } from "@/lib/utils";
import Link from "next/link";

const linkClasses = "text-primary-main label-style hover:bg-primary-light focus:bg-primary-light data-[state=open]:hover:bg-primary-light data-[state=open]:focus:bg-primary-light data-[state=open]:focus:text-secondary-light hover:text-secondary-light focus:text-secondary-light data-[state=open]:hover:text-secondary-light hidden lg:block"

export default function Navbar() {
    useTheme();
    return(
        <div className="fixed bg-secondary-lighter min-h-20 w-full border-b-2 border-primary-light z-50 flex justify-center">
                <div className="max-w-7xl w-full mx-10 flex justify-between items-center align-middle">
                    <Link className="" href='/'>
                        <h1 className="header-style text-primary-main text-[48px]! ">The Pofferman</h1>
                    </Link>        
                            
                    <NavigationMenu viewport={false} className="h-auto min-h-20 w-full flex justify-between items-center align-middle">
                            <NavigationMenuList className="flex align-left justify-center gap-6">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={linkClasses}><Link href={'/about-us'}>About Us</Link></NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className={linkClasses}>Private Events</NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="hidden md:flex text-primary-main label-style bg-transparent 
                                    hover:bg-primary-light focus:bg-primary-light data-[state=open]:hover:bg-primary-light data-[state=open]:focus:bg-primary-light 
                                    data-[state=open]:focus:text-secondary-light hover:text-secondary-light focus:text-secondary-light data-[state=open]:hover:text-secondary-light">
                                        More
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink asChild><Link href='/the-menu'>The Menu</Link></NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <BrandButton variant="secondary" className="hidden md:inline-flex">
                                    Find Us
                                </BrandButton>
                                <BrandButton variant="primary" className="hidden sm:inline-flex">
                                    Contact Us
                                </BrandButton>
                                <SidebarTrigger className="md:hidden" variant={"outline"}/>
                            </NavigationMenuList>
                    </NavigationMenu>
                </div>
        </div>
    )
}
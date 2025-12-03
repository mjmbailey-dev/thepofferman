'use client'
import useTheme from "@/hooks/useTheme";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { SidebarTrigger } from "../ui/sidebar";
import BrandButton from "../ui/custom/BrandButton";
import Link from "next/link";
import { cn } from "@/lib/utils";

const linkClasses = "nav-link hidden lg:flex bg-transparent hover:bg-transparent focus:bg-transparent "

export default function Navbar() {
    useTheme();
    return(
        <div className="fixed bg-background-2 min-h-20 w-full border-b-2 border-primary-light z-50 flex justify-center">
                <div className="max-w-7xl w-full mx-10 flex justify-between items-center align-middle">
                    <Link className="logo-style" href='/'>
                        The Pofferman
                    </Link>        
                            
                    <NavigationMenu viewport={false} className="h-auto min-h-20 w-full flex justify-between items-center align-middle">
                            <NavigationMenuList className="flex align-left justify-center gap-6">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={linkClasses}><Link href={'/about'}>About</Link></NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={linkClasses}><Link href='/events'>Events</Link></NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={linkClasses}><Link href='/markets'>Markets</Link></NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={cn("hover:bg-transparent hover:text-accent-foreground focus:bg-transparent focus:text-accent-foreground data-[state=open]:hover:bg-transparent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent", linkClasses)}>
                                        More
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink asChild><Link href='/menu'>The Menu</Link></NavigationMenuLink>
                                        <NavigationMenuLink asChild><Link href='/faq'>FAQ's</Link></NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <BrandButton variant="primary" size={'lg'} className="hidden sm:inline-flex">
                                    Contact Us
                                </BrandButton>
                                <SidebarTrigger className="md:hidden" variant={"default"}/>
                            </NavigationMenuList>
                    </NavigationMenu>
                </div>
        </div>
    )
}
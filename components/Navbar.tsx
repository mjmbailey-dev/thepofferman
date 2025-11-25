'use client'
import useTheme from "@/lib/hooks/useTheme";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import ThemeSelect from "./ThemeSelect";
import Image from "next/image";
import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
    useTheme();
    return(
        <div className="block">
            <NavigationMenu viewport={false} className="max-w-7xl w-full m-auto flex flex-row justify-between min-h-20 md:min-h-24">
                    <div className="mt-5 ml-5 z-50 max-h-20 md:max-h-24 max-w-20 md:max-w-24 rounded-full overflow-hidden">
                        <Image src="/Logo.jpg" alt="Company Logo" width={500} height={500} className="object-contain" />
                    </div>
                    <NavigationMenuList className="hidden md:flex">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <NavigationMenuLink  className="">Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <NavigationMenuList>
                        <ThemeSelect/>
                        <Button>
                            Contact Us
                        </Button>
                        <SidebarTrigger className="md:hidden"/>
                    </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
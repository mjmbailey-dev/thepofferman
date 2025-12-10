import Link from "next/link";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from "../ui/sidebar";
import { CalendarCheck, FileQuestionMark, Heart, Home, ReceiptText, Store } from "lucide-react"
import SocialMediaGroup from "../ui/custom/SocialMediaGroup";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Heart,
  },
  {
    title: "Events",
    url: "/events",
    icon: CalendarCheck,
  },
  {
    title: "Markets",
    url: "/markets",
    icon: Store,
  },
  {
    title: "Menu",
    url: "/menu",
    icon: ReceiptText,
  },
  {
    title: "FAQ",
    url: "faq",
    icon: FileQuestionMark
  }
]


export default function AppSidebar() {

    return(
        <Sidebar side="right" variant="inset" className="h-full">
            <SidebarHeader className="text-center py-4 bg-background-2">
                <Link className="logo-style" href='/'>
                        The Pofferman
                </Link>  
            </SidebarHeader>
            <SidebarInset className="bg-background-4">
            <SidebarContent className="p-2">
                <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            </SidebarContent>

            </SidebarInset>
            <SidebarFooter className="bg-background-2 py-4">
                <p className="lead text-center">Follow Us!</p>
                <SocialMediaGroup/>
            </SidebarFooter>
        </Sidebar>
    )
}
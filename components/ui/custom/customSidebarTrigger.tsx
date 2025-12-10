import { useSidebar } from "@/components/ui/sidebar"
import BrandButton from "./BrandButton"
import { Plus } from 'lucide-react'

type CustomerSidebarTriggerProps = {
    className?: string
}

export function CustomSidebarTrigger({ className } : CustomerSidebarTriggerProps) {
  const { toggleSidebar } = useSidebar()

  return <BrandButton onClick={toggleSidebar} variant={'secondary'} className={className}><Plus/></BrandButton>
}
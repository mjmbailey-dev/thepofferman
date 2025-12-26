import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "../button"
import { Plus } from 'lucide-react'

type CustomerSidebarTriggerProps = {
    className?: string
}

export function CustomSidebarTrigger({ className } : CustomerSidebarTriggerProps) {
  const { toggleSidebar } = useSidebar()

  return <Button onClick={toggleSidebar} variant={'secondary'} className={className}><Plus/></Button>
}
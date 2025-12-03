import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Plus } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

type FAQProps = {
  title?: string
  subtitle?: string
  items: FAQItem[]
  type: 'multiple' | 'single'
  collapsible?: boolean
  className?: string
}

export default function FAQ({ items, type = 'multiple', collapsible = true}: FAQProps) {
  return (
    <Accordion type={type} collapsible={collapsible} className="space-y-3 w-full">
        {items.map((faq, index) => (
        <AccordionItem
            key={index}
            value={`item-${index}`}
            className="group rounded-md px-4 py-1 ring-1"
        >   
            
            <AccordionTrigger className="group flex text-left font-bold justify-between">
                <span>{faq.question}</span>
            </AccordionTrigger>

            <AccordionContent className="subtext">
                {faq.answer}
            </AccordionContent>
        </AccordionItem>
        ))}
    </Accordion>
  )
}

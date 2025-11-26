'use client'

import { useBackground } from "@/lib/hooks/useBackground"

export default function BackgroundProvider({sectionId, bgClass} : {sectionId : string, bgClass: string}) {
    useBackground(sectionId, bgClass)
    return(
        null
    )
}
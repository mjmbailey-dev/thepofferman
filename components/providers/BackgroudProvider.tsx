'use client'

import { useBackground } from "@/hooks/useBackground"

export default function BackgroundProvider({sectionId, bgClass} : {sectionId : string, bgClass: string}) {
    useBackground(sectionId, bgClass)
    return(
        null
    )
}
'use client'

import useTheme from "@/lib/hooks/useTheme"

export default function ThemeProvider() {
    useTheme();
    console.log("ThemeProvider: useTheme() finished");
    return null;
}
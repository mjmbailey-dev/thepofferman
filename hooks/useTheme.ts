'use client'

import { useEffect, useState } from "react"

export type Theme = 'light' | 'dark' | 'system';

const THEME_KEY = 'theme';
const SYSTEM_PROPERTY = '(prefers-color-scheme: dark)';

type ThemeReturn = {
    theme: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export default function useTheme(): ThemeReturn {

    const [theme, setTheme] = useState<Theme>('light')

    // Constructor useEffect
    useEffect(() => {
        const local = localStorage.getItem(THEME_KEY) as Theme | null;

        if(local === 'light' || local === 'dark' || local === 'system'){
            setTheme(local)
        } else {
            setTheme('system')
        }
    },[])

    
    // useEffect for when theme is system
    useEffect(() => {
        if(theme !== 'system') return
        
        const media = window.matchMedia(SYSTEM_PROPERTY)
        
        const handleChange = () => {
            applyTheme("system", media.matches)
        }
        
        media.addEventListener("change", handleChange)
        return () => media.removeEventListener("change", handleChange)
        
    }, [theme])
    
    // UseEffect for when the theme changes
    useEffect(() => {
        const media = window.matchMedia(SYSTEM_PROPERTY);
        applyTheme(theme, media.matches);
        localStorage.setItem(THEME_KEY, theme);

    } , [theme]);


    return { theme, setTheme }
}

function applyTheme(theme: Theme, prefersDark: boolean){
    const html = document.documentElement;

    const finalTheme = theme === "system" ? (prefersDark ? "dark" : "light") : theme;

    html.classList.toggle("dark", finalTheme === "dark");
}
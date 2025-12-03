'use client'
import { useEffect } from "react";

export function useBackground(sectionId: string, bgClass: string) {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.className = "";       // remove all backgrounds
          document.body.classList.add(bgClass);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionId, bgClass]);
}
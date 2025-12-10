"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

type ContentCardProps = {
    className?: string,
    bgSrc?: string,
    alt?: string,
    contentHeader: string,
    contentBody: string,
    contentFooter: React.ReactNode | string,
    subtext?: React.ReactNode | string,
    variant: "primary" | "secondary",
}


const contentCardVariants = cva(
  "card flex-1 flex flex-col h-full transition duration-300 rounded-md justify-between group-hover/card:scale-105 z-10 text-white! bg-black/60",
  {
    variants: {
      variant: {
        primary:
          "p-6 gap-6",
        secondary:
          "p-6 gap-4",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const headingTagMap = {
  primary: "h3",
  secondary: "h4",
} as const;

export function ContentCard({ 
  className, 
  bgSrc, 
  alt, 
  contentHeader, 
  contentBody, 
  contentFooter, 
  subtext, 
  variant = "primary" } : ContentCardProps) {
    const HeadingTag = headingTagMap[variant];
  return (
    <div className="relative w-full h-full group/card flex flex-col justify-end">
      {bgSrc && alt && (
        <div className="">
          <Image
            src={bgSrc}
            fill
            alt={alt}
            className={
              "object-cover cursor-pointer overflow-hidden relative h-auto w-auto rounded-md shadow-xl card mx-auto backgroundImage flex flex-col justify-between bg-cover group-hover/card:scale-105 transition duration-300 z-0"
            }
          />
            <div className="absolute w-full h-full rounded-md top-0 left-0 transition duration-300 group-hover/card:bg-black group-hover/card:scale-105 opacity-60 z-10"></div>
        </div>
      )}
        <div className={cn(contentCardVariants({ variant }), className)}>
          <div className="flex flex-col gap-2">
            <p className="subtext text-white!">{subtext}</p>
            <HeadingTag>
              {contentHeader}
            </HeadingTag>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-normal text-sm text-white! relative">
              {contentBody}
            </p>
            <div className="text-white!">
              {contentFooter}
            </div>
          </div>
        </div>
    </div>
  );
}
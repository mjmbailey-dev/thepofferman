import { Children } from "react";
import { Button } from "../button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brandButtonVariants = cva(
    "", 
    {
    variants: {
        variant: {
            primary:
            "bg-primary-main text-neutral-lightest border-primary-dark border-2 physical-primary-button rounded-full hover:bg-primary-dark focus:primary-dark",
            secondary:
            "bg-secondary-main text-neutral-darkest border-secondary-dark border-2 physical-secondary-button rounded-full hover:bg-secondary-dark focus:secondary-dark",
            muted:
            "text-black",
        },
        size: {
            default: "px-6 py-4 text-[16px]",
            sm: "px-4 py-2 text-[14px]",
            lg: "px-8 py-6 text-[20px]",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "default",
    },
});


export default function BrandButton({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof brandButtonVariants> & {
    asChild?: boolean
  }) {
    return(
    <Button
    {...props}
    className={cn(brandButtonVariants({variant , size}), className)}
    /> 
    )
}
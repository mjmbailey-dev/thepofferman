import { Button } from "../button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const brandButtonVariants = cva(
    "rounded-full font-inter font-semibold transition-all hover:cursor-pointer", 
    {
    variants: {
        variant: {
            primary:
            "bg-primary-main border-primary-dark border-2 physical-primary-button hover:bg-primary-dark focus:primary-dark",
            secondary:
            "bg-secondary-main text-secondary-foreground border-secondary-dark border-2 physical-secondary-button hover:bg-secondary-dark focus:secondary-dark",
            muted:
            "bg-transparent hover:bg-transparent text-muted-foreground hover:text-primary hover:scale-110",
        },
        size: {
            default: "px-4 py-2 text-sm",
            sm: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg md:px-10 md:py-5 md:text-xl",
        },
        fullWidth: {
            true: "w-full sm:w-auto",
            false: "w-auto",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "default",
        fullWidth: false,
    },
});


export default function BrandButton({
    className,
    variant,
    size,
    fullWidth,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof brandButtonVariants> & {
    asChild?: boolean
  }) {
    return(
    <Button
    {...props}
    className={cn(brandButtonVariants({variant , size, fullWidth}), className)}
    /> 
    )
}
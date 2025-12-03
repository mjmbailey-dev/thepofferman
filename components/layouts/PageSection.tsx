import { cn } from "@/lib/utils"

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export default function PageSection({
  children,
  className = "",
  innerClassName = ""
}: PageSectionProps) {
  return (
    <section
      className={cn(
        "flex justify-center w-full py-10 md:py-20"
        ,className
        )}
    >
      <div
        className={cn("max-w-7xl flex flex-col gap-5 w-full mx-10 justify-center"
            ,innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

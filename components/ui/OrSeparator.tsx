export default function OrSeparator() {
  return (
    <div className="flex items-center md:flex-col md:h-full md:justify-center w-full my-3">
      
      {/* Line before OR */}
      <div className="flex-1 border-t md:border-t-0 md:border-3 border-border"></div>

      {/* OR text */}
      <span className="px-4 py-1 text-sm font-medium text-muted-foreground">
        OR
      </span>

      {/* Line after OR */}
      <div className="flex-1 border-t md:border-t-0 md:border-3 border-border"></div>

    </div>
  );
}
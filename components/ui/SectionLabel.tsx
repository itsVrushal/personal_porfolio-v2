interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm font-semibold tracking-[0.22em] text-accent uppercase mb-3.5 ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block flex-shrink-0" />
      <span>{label}</span>
    </div>
  );
}

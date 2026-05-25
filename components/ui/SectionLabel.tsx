interface SectionLabelProps {
  label: string;
}

export default function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="font-mono text-[10px] tracking-[0.25em] text-accent uppercase mb-3">
      &middot; {label}
    </div>
  );
}

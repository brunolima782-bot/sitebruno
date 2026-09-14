export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-mist">
      <span className="h-px w-8 bg-gradient-to-r from-blue-intense to-transparent" />
      <span className="section-number text-xs font-medium uppercase text-cyan">
        {index} / {label}
      </span>
    </div>
  );
}

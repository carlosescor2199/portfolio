export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-4 font-mono text-xs tracking-[0.3em] text-muted uppercase">
      <span className="text-circuit">{index}</span>
      <span aria-hidden="true">/</span>
      <span>{label}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </div>
  );
}

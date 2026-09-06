import Reveal from "./Reveal";
import { labEntries } from "@/data/lab";

export default function Lab() {
  return (
    <section id="lab" className="border-t border-line py-24 md:py-[150px]">
      <div className="mx-auto max-w-wrap px-8">
        <Reveal className="mb-16 max-w-[640px]">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.14em] text-ink-faint">
            <span className="h-px w-7 bg-accent-line" /> 06 / Lab
          </div>
          <h2 className="mt-3.5 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-[-.01em]">
            The Lab
          </h2>
          <p className="mt-4 max-w-[520px] text-ink-dim">
            The flagship projects demonstrate competence. The Lab demonstrates curiosity — a running build log of
            smaller experiments, notes, and things that didn&apos;t work.
          </p>
        </Reveal>

        <div>
          {labEntries.map((entry) => (
            <Reveal
              key={entry.tag}
              className="grid grid-cols-1 gap-2.5 border-t border-line py-[30px] sm:grid-cols-[120px_1fr] sm:gap-[30px]"
            >
              <div>
                <div className="font-display text-[13px] text-accent">{entry.tag}</div>
                <div className="mt-1.5 text-[11px] uppercase tracking-[.08em] text-ink-faint">{entry.project}</div>
              </div>
              <div className="mt-1.5 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                <LabField label="Learned" value={entry.learned} />
                <LabField label="Built" value={entry.built} />
                <LabField label="Failed" value={entry.failed} />
                <LabField label="Next" value={entry.next} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LabField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h5 className="mb-1.5 text-[11px] uppercase tracking-[.08em] text-ink-faint">{label}</h5>
      <p className="text-sm text-ink-dim">{value}</p>
    </div>
  );
}

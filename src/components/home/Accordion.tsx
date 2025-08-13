"use client";

export default function Accordion({
                                      items,
                                  }: {
    items: { q: string; a: string }[];
}) {
    return (
        <div className="divide-y divide-white/10 rounded-xl ring-1 ring-white/10 overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]">
            {items.map((it, idx) => (
                <details key={idx} className="group">
                    <summary
                        className="list-none cursor-pointer select-none flex items-center justify-between gap-4 px-4 py-3 text-white/90 hover:bg-white/[0.06]">
                        <span className="text-sm md:text-base">{it.q}</span>
                        <span className="text-white/50 group-open:hidden">+</span>
                        <span className="text-white/50 hidden group-open:inline">−</span>
                    </summary>
                    <div className="px-4 pb-4 text-white/70 text-sm leading-relaxed">{it.a}</div>
                </details>
            ))}
        </div>
    );
}



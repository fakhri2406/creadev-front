export default function ServiceCard({
                                      title,
                                      pricePrimary,
                                      note,
                                      bullets,
                                    }: {
  title: string;
  pricePrimary: string;
  note?: string;
  bullets?: string[];
}) {
  return (
    <div className="rounded-2xl bg-white/[0.05] ring-1 ring-white/10 px-5 py-6 flex flex-col gap-4">
      <div className="space-y-3">
        <h3 className="text-white/95 text-lg font-semibold tracking-tight">{title}</h3>
        <div>
          <span
            className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs text-white/90">
            {pricePrimary}
          </span>
        </div>
        {note && <div className="text-white/60 text-xs">{note}</div>}
      </div>

      {bullets && bullets.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 text-white/70 text-sm">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}



"use client";
import Badge from "@/components/Badge";

export default function ProcessCard({
                                      icon,
                                      title,
                                      desc,
                                      step,
                                    }: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  step?: string;
}) {
  return (
    <div
      className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 flex flex-col gap-3 hover:bg-white/[0.065] transition-colors">
      <div className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-white/10 text-white/90">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-white/90">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
      </div>
      {step && (
        <div className="mt-auto">
          <Badge>{step}</Badge>
        </div>
      )}
    </div>
  );
}



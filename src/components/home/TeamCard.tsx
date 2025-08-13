"use client";

export default function TeamCard({
                                     name,
                                     role,
                                     about,
                                 }: {
    name: string;
    role: string;
    about?: string;
}) {
    return (
    <div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-4 md:p-5 grid grid-cols-[80px,1fr] gap-4">
      <div className="self-start">
        <div className="w-20 h-20 rounded-xl bg-white/10 grid place-items-center ring-1 ring-white/10">
          <span className="text-white/50 text-xl">👤</span>
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <div className="text-white/95 font-medium whitespace-nowrap">{name}</div>
          <div className="text-white/50 text-sm">{role}</div>
        </div>
                <p className="text-white/60 text-sm leading-relaxed">
                    {about ?? "Layihəyə bağlı məsuliyyətləri daşıyır, keyfiyyəti qoruyur və nəticə yönümlü işləyir."}
                </p>
            </div>
        </div>
    );
}



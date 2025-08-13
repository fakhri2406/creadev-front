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
        <div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-4 md:p-5 grid gap-4">
            <div className="grid grid-cols-[80px,1fr] gap-4 items-center">
                <div className="w-20 h-20 rounded-xl bg-white/10 grid place-items-center ring-1 ring-white/10">
                    <span className="text-white/50 text-xl">👤</span>
                </div>
                <div>
                    <div className="text-white/95 font-medium text-lg">{name}</div>
                    <div className="text-white/50 text-sm">{role}</div>
                </div>
            </div>

            {about && (
                <p className="text-white/60 text-sm leading-relaxed">
                    {about}
                </p>
            )}
        </div>
    );
}
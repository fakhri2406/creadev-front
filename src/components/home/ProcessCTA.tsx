"use client";

import Button from "@/components/Button";

export default function ProcessCTA() {
  return (
    <div
      className="mx-auto max-w-3xl rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-4 md:p-5 flex items-center justify-between">
      <div className="space-y-1">
        <div className="text-white/90 text-sm md:text-base font-medium">Biznesinizi bizimlə inkişaf etdirin
        </div>
        <div className="text-white/60 text-xs md:text-sm">Fikrinizdən məhsula qədər addım-addım yol xəritəsi
        </div>
      </div>
      <Button variant="primary" size="md">Hazır layihələrimiz</Button>
    </div>
  );
}



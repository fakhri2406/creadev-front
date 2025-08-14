"use client";

import { usePathname } from "next/navigation";

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="relative">
      <div key={pathname} className="animate-enter" style={{ willChange: "transform, opacity" }}>
        {children}
      </div>
      <style jsx global>{`
        @keyframes enter {
          0% { opacity: 0; transform: translateY(8px); filter: blur(2px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-enter { animation: enter 1000ms cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .animate-enter { animation: none; }
        }
      `}</style>
    </div>
  );
}



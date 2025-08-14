export const LogoGlyph = ({className = "w-5 h-5"}: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M8 6l-4 6 4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6l4 6-4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRight = ({className = "w-4 h-4"}: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round"/>
  </svg>
);

export const Analysis = ({className = "w-5 h-5"}: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 13l3-3 3 3 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Backend = ({className = "w-5 h-5"}: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const Frontend = ({className = "w-5 h-5"}: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 8l-3 4 3 4M16 8l3 4-3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round"/>
  </svg>
);

export const Idea = ({className = "w-5 h-5"}: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M12 3a7 7 0 00-4 13v3a2 2 0 002 2h4a2 2 0 002-2v-3a7 7 0 00-4-13z" stroke="currentColor"
          strokeWidth="2"/>
  </svg>
);

export const Sparkle = ({className = "w-4 h-4"}: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);

export const Target = ({className = "w-3.5 h-3.5"}: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.9"/>
  </svg>
);



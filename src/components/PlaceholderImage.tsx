import clsx from "clsx";

type Props = {
  className?: string;
  aspect?: "video" | "square" | "landscape" | "portrait" | "cinema";
  radius?: "sm" | "md" | "lg" | "xl";
};

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  landscape: "[aspect-ratio:101/75]",
  portrait: "[aspect-ratio:21/22]",
  cinema: "[aspect-ratio:21/9]",
} as const;

export default function PlaceholderImage({className, aspect = "landscape", radius = "lg"}: Props) {
  return (
    <div
      className={clsx(
        "relative bg-neutral-900 ring-1 ring-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        aspectMap[aspect],
        radius === "sm" && "rounded-sm",
        radius === "md" && "rounded-md",
        radius === "lg" && "rounded-lg",
        radius === "xl" && "rounded-xl",
        "overflow-hidden",
        className,
      )}
    >
      {/* solid placeholder - no transparency overlay */}
      <div className="absolute inset-0 grid place-items-center">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden className="text-white/20">
          <rect x="3" y="5" width="18" height="14" rx="2" className="fill-current"/>
          <path d="M7 13l2-2 3 3 3-3 2 2v4H7v-4z" fill="#000" fillOpacity="0.15"/>
        </svg>
      </div>
    </div>
  );
}



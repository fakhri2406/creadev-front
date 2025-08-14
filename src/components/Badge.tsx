import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

export default function Badge({children, icon, className}: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[10px] uppercase tracking-wide text-white/70 backdrop-blur-sm",
        className,
      )}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
}

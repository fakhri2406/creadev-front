import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
    size?: "md" | "lg";
    asChild?: boolean;
};

export default function Button({variant = "primary", size = "md", className, children, ...rest}: ButtonProps) {
    const base = "inline-flex items-center justify-center rounded-full font-medium transition-colors select-none";

    const heights = {
        md: "px-5 py-2.5 text-sm",
        lg: "px-6 py-3 text-base",
    } as const;

    const variants = {
    primary:
      "text-black bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(232,232,232,0.88)_50%,rgba(185,185,185,0.82)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-10px_28px_rgba(0,0,0,0.13),0_8px_24px_rgba(0,0,0,0.25)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(236,236,236,0.9)_60%,rgba(190,190,190,0.86)_100%)]",
        secondary:
            "text-white/90 bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/14",
        ghost: "text-white/80 hover:bg-white/5",
    } as const;

    return (
        <button className={clsx(base, heights[size], variants[variant], className)} {...rest}>
            {children}
        </button>
    );
}



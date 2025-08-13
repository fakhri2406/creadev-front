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
            "text-black bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(236,236,236,0.9)_55%,rgba(190,190,190,0.85)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-8px_24px_rgba(0,0,0,0.10),0_6px_20px_rgba(0,0,0,0.22)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(238,238,238,0.92)_60%,rgba(195,195,195,0.88)_100%)]",
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



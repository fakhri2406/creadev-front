import Container from "./Container";

type Props = {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    id?: string;
    children: React.ReactNode;
    className?: string;
    center?: boolean;
};

export default function Section({title, subtitle, id, children, className = "", center = false}: Props) {
    return (
        <section id={id} className={`py-12 sm:py-16 lg:py-24 ${className}`}>
            <div className="relative rounded-t-2xl overflow-hidden ring-1 ring-white/5 bg-black">
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent"/>
                <Container>
                    <div className="grid items-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] py-8">
                        {(title || subtitle) && (
                            <header className={`mb-10 ${center ? "text-center" : ""}`}>
                                {subtitle && (
                                    <div
                                        className="text-xs font-medium text-white/50 mb-2 tracking-wide">{subtitle}</div>
                                )}
                                {title && (
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white/95">{title}</h2>
                                )}
                            </header>
                        )}
                        {children}
                    </div>
                </Container>
            </div>
        </section>
    );
}



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
        <section id={id} className={`py-0 ${className}`}>
            <div className="relative rounded-t-2xl overflow-hidden bg-black">
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent"/>
                <Container>
                    <div className="grid items-center min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] py-14">
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
                        <div className="self-center">
                            {children}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}



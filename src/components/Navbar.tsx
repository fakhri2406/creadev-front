"use client";

import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import {LogoGlyph} from "./icons";

const LINKS = [
    {href: "#", label: "Xidmətlər"},
    {href: "#", label: "Proyektlər"},
    {href: "#", label: "Haqqımızda"},
    {href: "#", label: "Əlaqə"},
];

export default function Navbar() {
    return (
        <div className="mt-4">
            <Container>
                <div
                    className="mx-auto max-w-3xl rounded-full border border-white/10 bg-white/5 backdrop-blur-lg text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <div className="flex items-center justify-between px-3">
                        {/* Left: Logo */}
                        <Link href="#" className="inline-flex items-center gap-2 py-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-black">
                <LogoGlyph className="w-3.5 h-3.5"/>
              </span>
                            <span className="hidden sm:inline text-sm font-medium">creadev.</span>
                        </Link>

                        {/* Middle: Links */}
                        <nav className="hidden md:flex items-center gap-4">
                            {LINKS.map((l) => (
                                <Link key={l.label} href={l.href} className="text-sm text-white/85 hover:text-white">
                                    {l.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Right: AI button */}
                        <div className="py-2">
                            <Button variant="secondary" size="md" className="px-4">creadev.ai</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}



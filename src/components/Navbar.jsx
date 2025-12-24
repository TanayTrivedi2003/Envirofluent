import { useState } from "react";
import React from "react";
export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1F33]">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center">
                        <span className="text-[#0B1F33] font-bold text-lg">E</span>
                    </div>
                    <span className="text-white text-xl font-bold tracking-wide">
                        EPPL
                    </span>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
                    {["Home", "About", "Services", "Pages", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-slate-300 hover:text-sky-400 transition"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="bg-sky-400 text-[#0B1F33] px-7 py-3 rounded-full font-medium hover:bg-sky-300 transition"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white text-xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#0B1F33] border-t border-white/10">
                    <nav className="flex flex-col px-6 py-6 gap-5 text-slate-300 text-sm">
                        {["Home", "About", "Services", "Pages", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-sky-400 transition"
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="mt-2 bg-sky-400 text-[#0B1F33] px-6 py-3 rounded-full text-center font-medium"
                        >
                            Get Started
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}

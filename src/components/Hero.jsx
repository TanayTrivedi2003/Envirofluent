import React from "react";
import "./Hero.css";
import Counter from "./Counter";

const Hero = () => {
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section
                id="home"
                className="relative min-h-screen bg-[#0B1F33] flex items-center px-6 pt-28 overflow-hidden"
            >
                {/* Background glow */}
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:28px_28px] opacity-20"></div>

                <div className="relative z-10 w-full max-w-5xl mx-auto text-center text-white">

                    <span className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full 
                        border border-sky-400 text-sky-400 text-sm tracking-wide 
                        bg-white/5 backdrop-blur hero-animate hero-delay-1">
                        SUSTAINABLE WATER & WASTEWATER SOLUTIONS
                    </span>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto hero-animate hero-delay-2">
                        Turning Water Challenges Into
                        <span className="block relative mt-2">
                            <span className="relative z-10">Reliable Treatment Solutions</span>
                            <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 
                                w-48 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full">
                            </span>
                        </span>
                    </h1>

                    <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto hero-animate hero-delay-3">
                        We design, execute, and maintain advanced water and wastewater
                        treatment systems, helping industries, municipalities, and
                        communities achieve sustainable water management and compliance.
                    </p>

                    <div className="mt-12 mb-10 flex flex-wrap justify-center gap-4 hero-animate hero-delay-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full font-medium 
                                bg-sky-400 text-[#0B1F33]
                                hover:bg-sky-300 hover:-translate-y-1
                                transition-all duration-300 shadow-lg"
                        >
                            Get Started
                        </a>

                        <a
                            href="#about"
                            className="px-8 py-3 rounded-full font-medium 
                                border border-sky-400 text-sky-400
                                hover:bg-sky-400 hover:text-[#0B1F33]
                                hover:-translate-y-1 transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Hero trust mini-stats
                    <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-10">
                        <div>
                            <h4 className="text-3xl font-bold">
                                <Counter end={10} />
                                <span className="text-sky-400">+</span>
                            </h4>
                            <p className="text-slate-400 text-sm mt-1">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold">
                                <Counter end={500} />
                                <span className="text-sky-400">+</span>
                            </h4>
                            <p className="text-slate-400 text-sm mt-1">Projects</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold">
                                <Counter end={90} />
                                <span className="text-sky-400">%</span>
                            </h4>
                            <p className="text-slate-400 text-sm mt-1">Compliance</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold">
                                24/7
                            </h4>
                            <p className="text-slate-400 text-sm mt-1">Support</p>
                        </div>
                    </div> */}

                </div>
            </section>
        </>
    );
};

export default Hero;

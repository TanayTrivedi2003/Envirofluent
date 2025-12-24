import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section
                id="home"
                className="min-h-screen bg-[#0B1F33] flex items-center px-6 pt-28"
            >
                <div className="w-full max-w-5xl mx-auto text-center text-white">

                    <span className="inline-block mb-8 px-6 py-2 rounded-full border border-sky-400 text-sky-400 text-sm tracking-wide hero-animate hero-delay-1">
                        SUSTAINABLE WATER & WASTEWATER SOLUTIONS
                    </span>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto hero-animate hero-delay-2">
                        Turning Water Challenges Into <br />
                        Reliable Treatment Solutions
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto hero-animate hero-delay-3">
                        We design, execute, and maintain advanced water and wastewater
                        treatment systems, helping industries, municipalities, and
                        communities achieve sustainable water management and compliance.
                    </p>

                    <div className="mt-10 flex justify-center gap-4 hero-animate hero-delay-4">
                        <a
                            href="#contact"
                            className="bg-sky-400 text-[#0B1F33] px-8 py-3 rounded-full font-medium hover:bg-sky-300 transition"
                        >
                            Get Started
                        </a>

                        <a
                            href="#about"
                            className="border border-sky-400 text-sky-400 px-8 py-3 rounded-full font-medium hover:bg-sky-400 hover:text-[#0B1F33] transition"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= IMPACT / PROJECTS SECTION ================= */}
            <section className="bg-[#071B2E] py-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Image Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                        {/* Card 1 */}
                        <div className="relative rounded-2xl overflow-hidden group">
                            <img
                                src="/images/image1.jpeg"
                                alt="Water Treatment Project"
                                className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3 className="text-xl font-semibold mb-2">
                                    Advanced Water Treatment
                                </h3>
                                <p className="text-sm text-slate-200">
                                    Efficient and compliant water treatment systems designed
                                    for long-term operational reliability.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative rounded-2xl overflow-hidden group">
                            <img
                                src="/images/image2.jpeg"
                                alt="Wastewater Management"
                                className="w-full h-[360px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3 className="text-xl font-semibold mb-2">
                                    Wastewater & Reuse Solutions
                                </h3>
                                <p className="text-sm text-slate-200">
                                    Sustainable wastewater treatment and reuse technologies
                                    to reduce environmental impact.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-white">

                        {/* Quote */}
                        <div>
                            <span className="text-6xl text-sky-400">“</span>
                            <p className="mt-4 text-slate-300 text-lg">
                                Real-world water and wastewater projects delivering
                                measurable environmental and operational impact.
                            </p>
                        </div>

                        {/* Stat 1 */}
                        <div className="text-center">
                            <h4 className="text-5xl font-bold">
                                500<span className="text-sky-400">+</span>
                            </h4>
                            <p className="mt-2 text-slate-300">
                                MLD Water Treated
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center">
                            <h4 className="text-5xl font-bold">
                                90<span className="text-sky-400">%</span>
                            </h4>
                            <p className="mt-2 text-slate-300">
                                Compliance & Efficiency Rate
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Hero;

import React from "react";
import Counter from "./Counter";
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/scroll-reveal.css";
import { FaLeaf, FaAward } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

const About = () => {
    useScrollReveal();

    return (
        <section className="bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ================= MAIN GRID ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,38%)_minmax(300px,62%)] gap-12 lg:gap-16 items-start">

                    {/* LEFT CONTENT */}
                    <div className="w-full reveal">
                        <span className="inline-block mb-4 lg:mb-6 px-4 py-1.5 lg:px-5 lg:py-2 rounded-full border border-sky-400 text-sky-500 text-sm font-medium">
                            ABOUT
                        </span>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F33] leading-tight">
                            Leading the Way to a{" "}
                            <span className="block sm:inline">Cleaner, Greener Tomorrow</span>
                        </h2>

                        <p className="mt-4 lg:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                            We design and deliver reliable water and wastewater treatment
                            solutions that support industries, municipalities, and communities
                            in achieving sustainable and compliant water management.
                        </p>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                            {/* BIG IMAGE */}
                            <div className="w-full reveal reveal-delay-1">
                                <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden">
                                    <img
                                        src="/images/about1.jpg"
                                        alt="Water Treatment Plant"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* IMAGE + STATS */}
                            <div className="flex flex-col gap-6 md:gap-8 w-full">

                                {/* SMALL IMAGE */}
                                <div className="rounded-2xl overflow-hidden w-full reveal reveal-delay-2">
                                    <img
                                        src="/images/about2.jpg"
                                        alt="Wastewater Process"
                                        className="w-full h-[200px] sm:h-[250px] md:h-[220px] lg:h-[260px] object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* STATS BOX */}
                                <div className="rounded-2xl p-6 md:p-8 w-full  reveal reveal-delay-3">
                                    <div className="grid grid-cols-2 gap-4 md:gap-6 text-center">

                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-medium text-[#0B1F33]">
                                                <Counter end={500} />
                                                <span className="text-sky-500">+</span>
                                            </h3>
                                            <p className="text-sky-500 font-medium mt-1 text-sm md:text-base">
                                                People
                                            </p>
                                            <p className="text-gray-500 text-xs md:text-sm">
                                                Trusted Company
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-3xl md:text-4xl font-medium text-[#0B1F33]">
                                                <Counter end={50} />
                                                <span className="text-sky-500">+</span>
                                            </h3>
                                            <p className="text-sky-500 font-medium mt-1 text-sm md:text-base">
                                                Communities
                                            </p>
                                            <p className="text-gray-500 text-xs md:text-sm">
                                                Actively Partnered
                                            </p>
                                        </div>

                                    </div>

                                    <div className="mt-8 md:mt-10 flex justify-center">
                                        <button className="px-6 py-2.5 md:px-8 md:py-3 rounded-full border border-[#0B1F33] text-[#0B1F33] font-medium hover:bg-[#0B1F33] hover:text-white transition-all duration-300 text-sm md:text-base">
                                            Learn More
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= AWARDS ================= */}
                <div className="mt-16 sm:mt-20 lg:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 text-center">

                    {/* Award 1 */}
                    <div className="px-4 reveal flex flex-col items-center">
                        <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full border border-[#0B1F33]">
                            <FaLeaf className="text-[#0B1F33] text-3xl" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold text-[#0B1F33]">
                            Engineering Excellence
                        </h4>
                        <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xs">
                            Advanced water and wastewater system expertise with proven results.
                        </p>
                    </div>

                    {/* Award 2 */}
                    <div className="px-4 reveal reveal-delay-1 flex flex-col items-center">
                        <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full border border-[#0B1F33]">
                            <FaAward className="text-[#0B1F33] text-3xl" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold text-[#0B1F33]">
                            Sustainable Solutions
                        </h4>
                        <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xs">
                            Eco-friendly, compliant and future-ready treatment infrastructure.
                        </p>
                    </div>

                    {/* Award 3 */}
                    <div className="px-4 reveal reveal-delay-2 flex flex-col items-center sm:col-span-2 lg:col-span-1">
                        <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full border border-[#0B1F33]">
                            <FaHandsHelping className="text-[#0B1F33] text-3xl" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold text-[#0B1F33]">
                            Community Impact
                        </h4>
                        <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xs">
                            Supporting municipalities and industries across regions.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

import React, { useRef } from "react";
import Counter from "./Counter";
import useScrollReveal from "../hooks/useScrollReveal";
import "../styles/scroll-reveal.css";
import { FaLeaf, FaAward, FaHandsHelping, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const About = () => {
    useScrollReveal();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="bg-white py-12 sm:py-16 lg:py-24 overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-50 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* ================= MAIN GRID ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,38%)_minmax(300px,62%)] gap-12 lg:gap-16 items-start" ref={ref}>

                    {/* LEFT CONTENT */}
                    <div className="w-full reveal">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="inline-block mb-4 lg:mb-6 px-4 py-1.5 lg:px-5 lg:py-2 rounded-full border border-sky-400 text-sky-500 text-sm font-medium bg-sky-50 hover:bg-sky-100 transition-colors duration-300"
                        >
                            ABOUT
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F33] leading-tight"
                        >
                            Leading the Way to a{" "}
                            <span className="block sm:inline relative">
                                Cleaner, Greener Tomorrow
                                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></span>
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 lg:mt-8 text-gray-600 text-base sm:text-lg leading-relaxed"
                        >
                            We are a water and wastewater treatment solutions company delivering reliable,
                            efficient, and sustainable systems for industries, municipalities, and
                            infrastructure projects. With a strong focus on compliance, performance,
                            and long-term value, we design and implement solutions that protect
                            natural resources and support communities.
                        </motion.p>


                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {/* BIG IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="w-full reveal reveal-delay-1 group"
                            >
                                <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                    <img
                                        src="/images/about1.jpg"
                                        alt="Water Treatment Plant"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                                        <p className="text-sm font-medium">Advanced Treatment Facility</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* IMAGE + STATS */}
                            <div className="flex flex-col gap-6 md:gap-8 w-full">
                                {/* SMALL IMAGE */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                    className="rounded-2xl overflow-hidden w-full reveal reveal-delay-2 group"
                                >
                                    <div className="relative">
                                        <img
                                            src="/images/about2.jpg"
                                            alt="Wastewater Process"
                                            className="w-full h-[200px] sm:h-[250px] md:h-[220px] lg:h-[260px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-sky-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </motion.div>

                                {/* STATS BOX */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.7, delay: 0.5 }}
                                    className="rounded-2xl p-6 md:p-8 w-full reveal reveal-delay-3 bg-gradient-to-br from-white to-sky-50 border border-sky-100 shadow-lg hover:shadow-xl transition-all duration-500 group"
                                >
                                    <div className="grid grid-cols-2 gap-6 md:gap-8 text-center">
                                        <div className="transform group-hover:scale-105 transition-transform duration-300">
                                            <h3 className="text-4xl md:text-5xl font-bold text-[#0B1F33]">
                                                <Counter end={115} />
                                                <span className="text-sky-500">+</span>
                                            </h3>
                                            <p className="text-sky-500 font-semibold mt-2 text-sm md:text-base tracking-wide">
                                                People
                                            </p>
                                            <p className="text-gray-500 text-xs md:text-sm mt-1">
                                                Trusted Company
                                            </p>
                                        </div>

                                        <div className="transform group-hover:scale-105 transition-transform duration-300">
                                            <h3 className="text-4xl md:text-5xl font-bold text-[#0B1F33]">
                                                <Counter end={28} />
                                                <span className="text-sky-500">+</span>
                                            </h3>
                                            <p className="text-sky-500 font-semibold mt-2 text-sm md:text-base tracking-wide">
                                                Communities
                                            </p>
                                            <p className="text-gray-500 text-xs md:text-sm mt-1">
                                                Actively Partnered
                                            </p>
                                        </div>
                                    </div>

                                    {/* <div className="mt-10 md:mt-12 flex justify-center">
                                        <button className="group/btn px-8 py-3.5 rounded-full border-2 border-[#0B1F33] text-[#0B1F33] font-semibold hover:bg-[#0B1F33] hover:text-white transition-all duration-400 text-base md:text-lg flex items-center gap-2 hover:shadow-lg hover:-translate-y-1">
                                            Learn More
                                            <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div> */}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= AWARDS ================= */}
                <div className="mt-20 sm:mt-24 lg:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-center">
                    {[
                        {
                            icon: <FaLeaf />,
                            title: "Engineering Excellence",
                            desc: "Advanced water and wastewater system expertise with proven results.",
                            delay: 0.1
                        },
                        {
                            icon: <FaAward />,
                            title: "Sustainable Solutions",
                            desc: "Eco-friendly, compliant and future-ready treatment infrastructure.",
                            delay: 0.2
                        },
                        {
                            icon: <FaHandsHelping />,
                            title: "Community Impact",
                            desc: "Supporting municipalities and industries across regions.",
                            delay: 0.3
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className="px-4 reveal flex flex-col items-center group"
                        >
                            <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#0B1F33] bg-gradient-to-br from-white to-sky-50 group-hover:border-sky-500 group-hover:shadow-lg group-hover:scale-110 transition-all duration-400">
                                <div className="text-[#0B1F33] group-hover:text-sky-600 text-3xl transition-colors duration-400">
                                    {item.icon}
                                </div>
                            </div>
                            <h4 className="text-xl sm:text-2xl font-bold text-[#0B1F33] group-hover:text-sky-700 transition-colors duration-300">
                                {item.title}
                            </h4>
                            <p className="mt-3 text-gray-600 text-base leading-relaxed max-w-xs group-hover:text-gray-700 transition-colors duration-300">
                                {item.desc}
                            </p>
                            <div className="mt-4 w-8 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>



                {/* ================= OUR SOLUTIONS ================= */}
                <div className="mt-20 sm:mt-24 lg:mt-28">

                    {/* Heading */}
                    <div className="max-w-3xl mb-14">
                        <span className="inline-block mb-4 px-5 py-2 rounded-full border border-sky-400 text-sky-500 text-sm font-medium bg-sky-50">
                            OUR SOLUTIONS
                        </span>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F33] leading-tight">
                            Water & Wastewater Solutions
                            <span className="block text-sky-500">
                                Designed for Real-World Challenges
                            </span>
                        </h3>

                        <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
                            We deliver proven water and wastewater treatment solutions that address
                            industrial, municipal, and infrastructure challenges with a focus on
                            performance, compliance, and sustainability.
                        </p>
                    </div>

                    {/* Solution Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.15 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >

                        {[
                            {
                                title: "Industrial Water Treatment",
                                desc: "Efficient water treatment solutions engineered for industrial processes, ensuring compliance and reduced operational costs."
                            },
                            {
                                title: "Wastewater Treatment & Reuse",
                                desc: "Advanced wastewater treatment systems enabling safe discharge and reuse while minimizing environmental impact."
                            },
                            {
                                title: "Zero Liquid Discharge (ZLD)",
                                desc: "Comprehensive ZLD solutions designed to recover water, eliminate liquid waste, and meet strict regulatory requirements."
                            },
                            {
                                title: "Sewage Treatment Plants (STP)",
                                desc: "Reliable and scalable STP solutions for municipalities, residential townships, and infrastructure projects."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative bg-white rounded-2xl p-8 border border-gray-400 shadow-xl
                           hover:border-sky-400 hover:-translate-y-2
                           hover:shadow-xl transition-all duration-500"
                            >
                                {/* hover glow */}
                                <div className="absolute inset-0 rounded-2xl bg-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <h4 className="relative z-10 text-xl font-semibold text-[#0B1F33] mb-3">
                                    {item.title}
                                </h4>

                                <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="mt-6 h-1 w-10 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        ))}

                    </motion.div>
                </div>


                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-20 pt-10 border-t border-gray-200"
                >
                    <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16 opacity-70">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#0B1F33]">24/7</div>
                            <div className="text-sm text-gray-500 mt-1">Support</div>
                        </div>

                        <div className="h-12 w-px bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#0B1F33]">99%</div>
                            <div className="text-sm text-gray-500 mt-1">Success Rate</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
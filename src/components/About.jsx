// import React from "react";
// import Counter from "./Counter";
// import useScrollReveal from "../hooks/useScrollReveal";
// import "../styles/scroll-reveal.css";
// import { FaLeaf, FaAward } from "react-icons/fa";
// import { FaHandsHelping } from "react-icons/fa";

// const About = () => {
//     useScrollReveal();

//     return (
//         <section className="bg-white py-12 sm:py-16 lg:py-24 overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 {/* ================= MAIN GRID ================= */}
//                 <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,38%)_minmax(300px,62%)] gap-12 lg:gap-16 items-start">

//                     {/* LEFT CONTENT */}
//                     <div className="w-full reveal">
//                         <span className="inline-block mb-4 lg:mb-6 px-4 py-1.5 lg:px-5 lg:py-2 rounded-full border border-sky-400 text-sky-500 text-sm font-medium">
//                             ABOUT
//                         </span>

//                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F33] leading-tight">
//                             Leading the Way to a{" "}
//                             <span className="block sm:inline">Cleaner, Greener Tomorrow</span>
//                         </h2>

//                         <p className="mt-4 lg:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
//                             We design and deliver reliable water and wastewater treatment
//                             solutions that support industries, municipalities, and communities
//                             in achieving sustainable and compliant water management.
//                         </p>
//                     </div>

//                     {/* RIGHT SIDE */}
//                     <div className="w-full">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

//                             {/* BIG IMAGE */}
//                             <div className="w-full reveal reveal-delay-1">
//                                 <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden">
//                                     <img
//                                         src="/images/about1.jpg"
//                                         alt="Water Treatment Plant"
//                                         className="w-full h-full object-cover"
//                                         loading="lazy"
//                                     />
//                                 </div>
//                             </div>

//                             {/* IMAGE + STATS */}
//                             <div className="flex flex-col gap-6 md:gap-8 w-full">

//                                 {/* SMALL IMAGE */}
//                                 <div className="rounded-2xl overflow-hidden w-full reveal reveal-delay-2">
//                                     <img
//                                         src="/images/about2.jpg"
//                                         alt="Wastewater Process"
//                                         className="w-full h-[200px] sm:h-[250px] md:h-[220px] lg:h-[260px] object-cover"
//                                         loading="lazy"
//                                     />
//                                 </div>

//                                 {/* STATS BOX */}
//                                 <div className="rounded-2xl p-6 md:p-8 w-full  reveal reveal-delay-3">
//                                     <div className="grid grid-cols-2 gap-4 md:gap-6 text-center">

//                                         <div>
//                                             <h3 className="text-3xl md:text-4xl font-medium text-[#0B1F33]">
//                                                 <Counter end={500} />
//                                                 <span className="text-sky-500">+</span>
//                                             </h3>
//                                             <p className="text-sky-500 font-medium mt-1 text-sm md:text-base">
//                                                 People
//                                             </p>
//                                             <p className="text-gray-500 text-xs md:text-sm">
//                                                 Trusted Company
//                                             </p>
//                                         </div>

//                                         <div>
//                                             <h3 className="text-3xl md:text-4xl font-medium text-[#0B1F33]">
//                                                 <Counter end={50} />
//                                                 <span className="text-sky-500">+</span>
//                                             </h3>
//                                             <p className="text-sky-500 font-medium mt-1 text-sm md:text-base">
//                                                 Communities
//                                             </p>
//                                             <p className="text-gray-500 text-xs md:text-sm">
//                                                 Actively Partnered
//                                             </p>
//                                         </div>

//                                     </div>

//                                     <div className="mt-8 md:mt-10 flex justify-center">
//                                         <button className="px-6 py-2.5 md:px-8 md:py-3 rounded-full border border-[#0B1F33] text-[#0B1F33] font-medium hover:bg-[#0B1F33] hover:text-white transition-all duration-300 text-sm md:text-base">
//                                             Learn More
//                                         </button>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ================= AWARDS ================= */}
//                 <div className="mt-16 sm:mt-20 lg:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 text-center">

//                     {/* Award 1 */}
//                     <div className="px-4 reveal flex flex-col items-center">
//                         <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full border border-[#0B1F33]">
//                             <FaLeaf className="text-[#0B1F33] text-3xl" />
//                         </div>
//                         <h4 className="text-lg sm:text-xl font-semibold text-[#0B1F33]">
//                             Engineering Excellence
//                         </h4>
//                         <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xs">
//                             Advanced water and wastewater system expertise with proven results.
//                         </p>
//                     </div>

//                     {/* Award 2 */}
//                     <div className="px-4 reveal reveal-delay-1 flex flex-col items-center">
//                         <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full border border-[#0B1F33]">
//                             <FaAward className="text-[#0B1F33] text-3xl" />
//                         </div>
//                         <h4 className="text-lg sm:text-xl font-semibold text-[#0B1F33]">
//                             Sustainable Solutions
//                         </h4>
//                         <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xs">
//                             Eco-friendly, compliant and future-ready treatment infrastructure.
//                         </p>
//                     </div>

//                     {/* Award 3 */}
//                     <div className="px-4 reveal reveal-delay-2 flex flex-col items-center sm:col-span-2 lg:col-span-1">
//                         <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full border border-[#0B1F33]">
//                             <FaHandsHelping className="text-[#0B1F33] text-3xl" />
//                         </div>
//                         <h4 className="text-lg sm:text-xl font-semibold text-[#0B1F33]">
//                             Community Impact
//                         </h4>
//                         <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-xs">
//                             Supporting municipalities and industries across regions.
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;



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
                            We design and deliver reliable water and wastewater treatment
                            solutions that support industries, municipalities, and communities
                            in achieving sustainable and compliant water management.
                        </motion.p>

                        {/* Quick stats for mobile/desktop */}
                        <div className="mt-8 grid grid-cols-2 gap-4 lg:hidden">
                            <div className="bg-gradient-to-br from-sky-50 to-white p-4 rounded-xl border border-sky-100">
                                <h3 className="text-2xl font-bold text-[#0B1F33]">500+</h3>
                                <p className="text-sm text-sky-600 mt-1">Projects Completed</p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100">
                                <h3 className="text-2xl font-bold text-[#0B1F33]">50+</h3>
                                <p className="text-sm text-sky-600 mt-1">Years Experience</p>
                            </div>
                        </div>
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
                                                <Counter end={500} />
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
                                                <Counter end={50} />
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

                                    <div className="mt-10 md:mt-12 flex justify-center">
                                        <button className="group/btn px-8 py-3.5 rounded-full border-2 border-[#0B1F33] text-[#0B1F33] font-semibold hover:bg-[#0B1F33] hover:text-white transition-all duration-400 text-base md:text-lg flex items-center gap-2 hover:shadow-lg hover:-translate-y-1">
                                            Learn More
                                            <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
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
                            <div className="text-3xl font-bold text-[#0B1F33]">ISO</div>
                            <div className="text-sm text-gray-500 mt-1">Certified</div>
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
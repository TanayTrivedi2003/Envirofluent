import { motion } from "framer-motion";

const DirectorMessage = () => {
    return (
        <section className="bg-white py-20 sm:py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* ================= LEFT CONTENT ================= */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block mb-6 px-6 py-2 rounded-full border border-sky-400 text-sky-500 text-sm tracking-wide bg-sky-50">
                        DIRECTOR’S MESSAGE
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight">
                        Leadership Behind
                        <span className="block">Envirofluent</span>
                    </h2>

                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                        At Envirofluent, we believe that responsible water management is
                        not just a regulatory requirement, but a commitment to future
                        generations. Our focus is on delivering practical, sustainable,
                        and performance-driven water & wastewater solutions across India.
                    </p>

                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                        With strong engineering expertise and hands-on project execution,
                        we aim to support industries and communities with reliable systems
                        that create long-term environmental and operational value.
                    </p>
                </motion.div>

                {/* ================= RIGHT CARD ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="relative bg-gray-50 rounded-3xl p-6 shadow-lg">

                        {/* Image */}
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src="/images/director.jpg" // replace with real image
                                alt="Director"
                                className="w-full h-[420px] object-cover"
                            />

                            {/* Quote Overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <p className="text-white text-sm leading-relaxed italic max-w-md">
                                    “Building sustainable water solutions that balance
                                    compliance, efficiency, and long-term environmental
                                    responsibility.”
                                </p>
                            </div>
                        </div>

                        {/* Name & Role */}
                        <div className="mt-6">
                            <h4 className="text-xl font-semibold text-[#0B1F33]">
                                Director Name
                            </h4>

                            <p className="text-sm text-gray-500 mt-1">
                                Founder & Managing Director
                            </p>

                            <div className="mt-4 h-1 w-12 bg-sky-400 rounded-full"></div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default DirectorMessage;

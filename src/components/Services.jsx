import { motion } from "framer-motion";
import {
    FaLeaf,
    FaDraftingCompass,
    FaProjectDiagram,
    FaTools
} from "react-icons/fa";

const services = [
    {
        icon: <FaLeaf />,
        title: "Environmental Consultancy",
        desc: "Expert environmental consulting services to support compliance, sustainability planning, and responsible water management strategies."
    },
    {
        icon: <FaDraftingCompass />,
        title: "Engineering & System Design",
        desc: "Custom-designed water and wastewater treatment systems engineered for efficiency, performance, and long-term reliability."
    },
    {
        icon: <FaProjectDiagram />,
        title: "Project Execution & Commissioning",
        desc: "End-to-end project execution including installation, testing, and commissioning to ensure seamless and compliant operations."
    },
    {
        icon: <FaTools />,
        title: "Operation & Maintenance (O&M)",
        desc: "Comprehensive operation and maintenance services to maximize system uptime, efficiency, and asset lifespan."
    }
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 }
    }
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Services = () => {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

                {/* LEFT CONTENT */}
                <div>
                    <span className="inline-block mb-6 px-6 py-2 rounded-full border border-sky-400 text-sky-500 text-sm tracking-wide">
                        OUR SERVICES
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight">
                        Sustainable Water
                        <span className="block">Solutions</span>
                    </h2>

                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                        From consultancy and design to execution and maintenance, we deliver
                        end-to-end water and wastewater treatment services that ensure
                        compliance, efficiency, and sustainability.
                    </p>

                    {/* TRUST STRIP (FIXED) */}
                    <div className="mt-12 space-y-3 text-sm sm:text-base text-gray-600">
                        <div className="flex items-center gap-3">
                            <span className="text-sky-400">✔</span>
                            Pan-India Project Execution
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sky-400">✔</span>
                            On-site & Remote Engineering Support
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sky-400">✔</span>
                            Flexible Deployment Across Locations
                        </div>
                    </div>
                </div>

                {/* RIGHT CARDS */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-200
                                       hover:border-sky-400 hover:-translate-y-2
                                       hover:shadow-xl transition-all duration-500"
                        >
                            {/* hover glow */}
                            <div className="absolute inset-0 rounded-2xl bg-sky-400/10
                                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* icon */}
                            <div className="relative z-10 mb-6 w-14 h-14 flex items-center justify-center rounded-xl
                                            border border-sky-400 text-sky-400 text-2xl
                                            group-hover:bg-sky-400 group-hover:text-[#0B1F33]
                                            transition-all duration-400">
                                {service.icon}
                            </div>

                            <h4 className="relative z-10 text-xl font-semibold text-[#0B1F33] mb-3">
                                {service.title}
                            </h4>

                            <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

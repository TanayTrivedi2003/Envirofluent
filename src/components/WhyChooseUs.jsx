import { motion } from "framer-motion";
import { FaLeaf, FaCogs, FaChartLine, FaRecycle } from "react-icons/fa";
import Counter from "./Counter";

const data = [
    {
        icon: <FaLeaf />,
        title: "Eco-Focused Solutions",
        desc: "We design water and wastewater treatment systems that reduce environmental impact and promote responsible water management."
    },
    {
        icon: <FaCogs />,
        title: "Proven Engineering Expertise",
        desc: "With strong industry experience, we deliver reliable, scalable, and performance-driven treatment solutions."
    },
    {
        icon: <FaChartLine />,
        title: "Cost-Effective & Efficient",
        desc: "Our optimized designs reduce operational costs while ensuring compliance and consistent performance."
    },
    {
        icon: <FaRecycle />,
        title: "Sustainability & Compliance",
        desc: "Focused on reuse, efficiency, and long-term regulatory compliance for sustainable growth."
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

const WhyChooseUs = () => {
    return (
        <section className="bg-[#071B2E] py-24 px-6 relative overflow-hidden">
            {/* soft blue glow background */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <span className="inline-block mb-6 px-6 py-2 rounded-full border border-sky-400 text-sky-400 text-sm tracking-wide">
                        WHY CHOOSE ENVIROFLUENT
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Because sustainable water management
                        <span className="block text-sky-400">
                            starts with the right partner.
                        </span>
                    </h2>

                    <p className="mt-6 text-slate-300 text-lg">
                        Delivering reliable, compliant, and future-ready water & wastewater
                        treatment solutions for industries and communities.
                    </p>
                </div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {data.map((itemData, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative bg-white rounded-2xl p-8 border border-gray-200 
                         hover:border-sky-400 transition-all duration-500 
                         hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* light blue hover glow */}
                            <div className="absolute inset-0 rounded-2xl bg-sky-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon */}
                            <div className="relative z-10 mb-6 w-14 h-14 flex items-center justify-center rounded-xl 
                              border border-sky-400 text-sky-400 text-2xl 
                              group-hover:bg-sky-400 group-hover:text-[#0B1F33] 
                              transition-all duration-400">
                                {itemData.icon}
                            </div>

                            <h4 className="relative z-10 text-xl font-semibold text-[#0B1F33] mb-3">
                                {itemData.title}
                            </h4>

                            <p className="relative z-10 text-gray-600 leading-relaxed text-sm">
                                {itemData.desc}
                            </p>

                            {/* underline */}
                            <div className="mt-6 h-1 w-10 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </motion.div>


                {/* ================= EXPERIENCE STRIP ================= */}
                <div className="mt-20 border-t border-white/10 pt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center text-white">

                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-sky-400">
                                <Counter end={28} />+
                            </div>
                            <p className="mt-2 text-slate-300 text-sm md:text-base">
                                Years of Industry Experience
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-sky-400">
                                <Counter end={115} />+
                            </div>
                            <p className="mt-2 text-slate-300 text-sm md:text-base">
                                Water & Wastewater Projects Delivered
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl md:text-5xl font-bold text-sky-400">
                                <Counter end={100} />%
                            </div>
                            <p className="mt-2 text-slate-300 text-sm md:text-base">
                                Compliance-Focused Execution
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
};

export default WhyChooseUs;


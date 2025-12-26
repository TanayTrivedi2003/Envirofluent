import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Operations Manager",
        company: "Industrial Manufacturing Unit",
        text: "Envirofluent has significantly improved our water management operations. Their treatment systems helped us achieve compliance while reducing operational challenges.",
        image: "/images/testimonial.jpg"
    }
];

const smallTestimonials = [
    {
        name: "Plant Head",
        company: "Process Industry",
        text: "Their wastewater solutions are efficient and cost-effective. The team understands real on-ground challenges."
    },
    {
        name: "Compliance Officer",
        company: "Infrastructure Project",
        text: "Professional execution and strong technical understanding. We no longer worry about regulatory compliance."
    },
    {
        name: "Project Manager",
        company: "Municipal Contractor",
        text: "Reliable systems, smooth commissioning, and excellent post-installation support."
    }
];

const Testimonials = () => {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <span className="inline-block mb-6 px-6 py-2 rounded-full border border-sky-400 text-sky-500 text-sm tracking-wide">
                        TESTIMONIALS
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight">
                        Trusted by Industries &
                        <span className="block">Communities</span>
                    </h2>

                    <p className="mt-4 text-gray-600 text-lg">
                        See how our water and wastewater solutions help organizations
                        operate efficiently and stay compliant.
                    </p>
                </div>

                {/* Main testimonial */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 mb-16">

                    {/* Image */}
                    <div className="md:w-1/3">
                        <img
                            src={testimonials[0].image}
                            alt="Client"
                            className="rounded-2xl w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3 relative">
                        <div className="text-6xl text-sky-400 mb-4">“</div>

                        <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                            {testimonials[0].text}
                        </p>

                        <div className="mt-8">
                            <h4 className="font-semibold text-[#0B1F33]">
                                {testimonials[0].name}
                            </h4>
                            <p className="text-sm text-gray-500">
                                {testimonials[0].company}
                            </p>
                        </div>

                        <div className="absolute bottom-0 right-0 text-6xl text-sky-400 opacity-30">
                            ”
                        </div>
                    </div>
                </div>

                {/* Small testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {smallTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-8 relative"
                        >
                            <div className="text-4xl text-gray-300 mb-4">“</div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {item.text}
                            </p>

                            <div>
                                <h4 className="font-semibold text-[#0B1F33]">
                                    {item.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {item.company}
                                </p>
                            </div>

                            <div className="absolute bottom-6 right-6 text-4xl text-gray-300">
                                ”
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;

import React, { useState } from "react";
import "./Faq.css"
const faqs = [
    {
        question: "What water and wastewater services does Envirofluent provide?",
        answer:
            "Envirofluent provides end-to-end solutions including water treatment plants, STP, ETP, reuse & recycle systems, and long-term operation & maintenance services.",
    },
    {
        question: "Do you work with industries as well as municipalities?",
        answer:
            "Yes, we work with industries, urban local bodies, municipalities, infrastructure developers, and residential communities across India.",
    },
    {
        question: "How do you ensure regulatory compliance?",
        answer:
            "All our systems are designed as per CPCB, SPCB, and local statutory norms.",
    },
    {
        question: "Can systems be customized as per site conditions?",
        answer:
            "Yes. Each project is engineered after detailed site surveys, water analysis, and capacity planning.",
    },
    {
        question: "Do you provide AMC and long-term O&M support?",
        answer:
            "Yes, we offer AMC and complete O&M services to ensure uninterrupted performance.",
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="FAQ" className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">

                {/* LEFT */}
                <div className="fade-up">
                    <span className="inline-block mb-4 px-5 py-2 text-sm rounded-full border border-sky-400 text-sky-500">
                        FAQ
                    </span>

                    <h2 className="text-4xl font-bold text-[#0B1F33] leading-tight">
                        Frequently Asked <br /> Questions
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-md">
                        Everything you need to know about our water and wastewater
                        treatment solutions and execution approach.
                    </p>

                    <div className="mt-10 bg-[#0B1F33] text-white rounded-xl p-8 flex items-center justify-between gap-6 fade-up">
                        <div>
                            <h4 className="text-lg font-semibold">Still have questions?</h4>
                            <p className="text-sm text-slate-300">
                                Our experts are here to help you.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="bg-sky-400 text-[#0B1F33] px-6 py-3 rounded-full font-medium hover:bg-sky-300 transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="space-y-6 fade-up">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-5 cursor-pointer"
                                onClick={() =>
                                    setActiveIndex(isOpen ? null : index)
                                }
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium text-[#0B1F33]">
                                        {faq.question}
                                    </h3>

                                    <span
                                        className={`text-2xl text-sky-500 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </div>

                                <div
                                    className="accordion-content"
                                    style={{
                                        maxHeight: isOpen ? "200px" : "0px",
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Faq;

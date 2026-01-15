import React from "react";

const InquiryForm = () => {
    return (
        <section id="contact" className="bg-[#F5F9FC] py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <span className="inline-block mb-4 px-5 py-2 text-sm rounded-full border border-sky-400 text-sky-500">
                        INQUIRY
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight">
                        Let’s Discuss Your <br /> Water Requirements
                    </h2>

                    <p className="mt-5 text-gray-600 text-lg max-w-md">
                        Our engineering team will evaluate your requirements and propose
                        the most efficient and compliant water or wastewater solution.
                    </p>

                    <ul className="mt-8 space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <span className="text-sky-500 text-xl">✓</span>
                            Expert consultation by experienced engineers
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-sky-500 text-xl">✓</span>
                            Customized solutions based on site conditions
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-sky-500 text-xl">✓</span>
                            Compliance with CPCB & SPCB norms
                        </li>
                    </ul>
                </div>

                {/* FORM */}
                <div className="bg-white rounded-3xl shadow-xl p-10">
                    <form className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-400"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-400"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-400"
                            />
                            <input
                                type="text"
                                placeholder="Organization / Company"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-400"
                            />
                        </div>

                        <select
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:border-sky-400"
                        >
                            <option>Select Requirement</option>
                            <option>Water Treatment Plant (WTP)</option>
                            <option>Sewage Treatment Plant (STP)</option>
                            <option>Effluent Treatment Plant (ETP)</option>
                            <option>Reuse & Recycle System</option>
                            <option>Operation & Maintenance (O&M)</option>
                            <option>Consultation / Audit</option>
                        </select>

                        <textarea
                            rows="4"
                            placeholder="Briefly describe your requirement"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-sky-400 text-[#0B1F33] font-semibold py-4 rounded-full hover:bg-sky-300 transition"
                        >
                            Submit Inquiry
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default InquiryForm;

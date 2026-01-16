import React, { useState } from "react";

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        requirement: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const whatsappNumber = "9969103022"; // ✅ WhatsApp number

        const whatsappMessage = `
New Inquiry - Envirofluent

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Requirement: ${formData.requirement}

Message:
${formData.message}
    `;

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappURL, "_blank");
    };

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
                        the most efficient and compliant solution.
                    </p>
                </div>

                {/* FORM */}
                <div className="bg-white rounded-3xl shadow-xl p-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-4 py-3"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-4 py-3"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-4 py-3"
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="Organization / Company"
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3"
                            />
                        </div>

                        <select
                            name="requirement"
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-3 text-gray-600"
                        >
                            <option value="">Select Requirement</option>
                            <option>Water Treatment Plant (WTP)</option>
                            <option>Sewage Treatment Plant (STP)</option>
                            <option>Effluent Treatment Plant (ETP)</option>
                            <option>Reuse & Recycle System</option>
                            <option>Operation & Maintenance (O&M)</option>
                            <option>Consultation / Audit</option>
                        </select>

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Briefly describe your requirement"
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-sky-400 text-[#0B1F33] font-semibold py-4 rounded-full hover:bg-sky-300 transition"
                        >
                            Submit on WhatsApp
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default InquiryForm;

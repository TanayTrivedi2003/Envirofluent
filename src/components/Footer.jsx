import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0B1F33] text-slate-300 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* BRAND */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src="/images/logo.png"
                            alt="EPPL Logo"
                            className="w-10 h-10 object-contain"
                        />
                        <span className="text-white text-xl font-bold tracking-wide">
                            EPPL
                        </span>
                    </div>

                    <p className="text-sm leading-relaxed">
                        Envirofluent Projects Pvt. Ltd. delivers sustainable water and
                        wastewater treatment solutions for industries, municipalities, and
                        infrastructure projects across India.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h4 className="text-white font-semibold mb-5">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <a href="#home" className="hover:text-sky-400 transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-sky-400 transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#solutions" className="hover:text-sky-400 transition">
                                Our Solutions
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-sky-400 transition">
                                Our Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-sky-400 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* SERVICES */}
                <div>
                    <h4 className="text-white font-semibold mb-5">Our Services</h4>
                    <ul className="space-y-3 text-sm">
                        <li>Water Treatment Plants (WTP)</li>
                        <li>Sewage Treatment Plants (STP)</li>
                        <li>Effluent Treatment Plants (ETP)</li>
                        <li>Reuse & Recycle Systems</li>
                        <li>Operation & Maintenance (O&M)</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="text-white font-semibold mb-5">Contact Us</h4>

                    <ul className="space-y-4 text-sm">
                        <li>
                            📧{" "}
                            <a
                                href="mailto:info@envirofluent.com"
                                className="hover:text-sky-400 transition"
                            >
                                info@envirofluent.com
                            </a>
                        </li>

                        <li>
                            📞{" "}
                            <a
                                href="tel:+919999999999"
                                className="hover:text-sky-400 transition"
                            >
                                +91 99999 99999
                            </a>
                        </li>

                        <li className="leading-relaxed">
                            📍 Corporate Office: <br />
                            Envirofluent Projects Pvt. Ltd., <br />
                            Industrial Area, <br />
                            India
                        </li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/10 mt-14 pt-6 text-center text-sm text-slate-400">
                © {new Date().getFullYear()} Envirofluent Projects Pvt. Ltd.
                All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

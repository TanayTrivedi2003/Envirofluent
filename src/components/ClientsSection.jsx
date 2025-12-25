import React from "react";
import "./ClientsSection.css";

const clients = [
    "/logos/client1.png",
    "/logos/client2.png",
    "/logos/client3.png",
    "/logos/client4.png",
    "/logos/client5.png",

    "/logos/client7.png",
    "/logos/client8.png",
    "/logos/client9.png",
];

const ClientsSection = () => {
    return (
        <section className="bg-white py-14 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-center text-Black text-2xl md:text-3xl font-semibold mb-10">
                    We Have Worked With
                </h2>

                {/* Single Row Continuous Slider */}
                <div className="clients-marquee">
                    <div className="clients-track">
                        {[...clients, ...clients].map((logo, index) => (
                            <div className="client-logo" key={index}>
                                <img src={logo} alt="Client Logo" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClientsSection;

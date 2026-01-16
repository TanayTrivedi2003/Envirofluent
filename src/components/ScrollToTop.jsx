import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 300);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!show) return null;

    return (
        <button
            onClick={scrollTop}
            className="fixed bottom-24 right-6 z-40 bg-sky-400 text-[#0B1F33] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-sky-300 transition"
            aria-label="Scroll to top"
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTop;

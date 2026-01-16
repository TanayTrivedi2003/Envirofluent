import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
    { src: "/images/image1.jpeg" },
    { src: "/images/image2.jpeg" },
    { src: "/images/image3.jpeg" },
    { src: "/images/image4.jpeg" },
    { src: "/images/image5.jpeg" },
    { src: "/images/image6.jpeg" },
    { src: "/images/image7.jpeg" },
    { src: "/images/image8.jpeg" },
    { src: "/images/image9.jpeg" },
    { src: "/images/image11.jpeg" },
    { src: "/images/image12.jpeg" },
    { src: "/images/image13.jpeg" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const ProjectGallery = () => {
    return (
        <section id="gallery" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-14"
                >
                    <span className="inline-block mb-4 px-5 py-2 text-sm rounded-full border border-sky-400 text-sky-500">
                        PROJECT GALLERY
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-tight">
                        Our Work Across Water & <br /> Wastewater Projects
                    </h2>

                    <p className="mt-4 text-gray-600 text-lg">
                        A glimpse of our executed projects, on-site installations, and
                        treatment systems delivered for industries and municipalities.
                    </p>
                </motion.div>

                {/* GRID */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {galleryImages.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="overflow-hidden rounded-2xl shadow-md bg-white"
                        >
                            <img
                                src={item.src}
                                alt="Project"
                                className="w-full h-[260px] object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectGallery;

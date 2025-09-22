"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { palette } from "@/utils/color";
import { education } from "@/utils/data";

export default function Education() {
    const lineRef = useRef<SVGPathElement | null>(null);

    useEffect(() => {
        if (lineRef.current) {
            gsap.fromTo(
                lineRef.current,
                { strokeDasharray: 2000, strokeDashoffset: 2000 },
                { strokeDashoffset: 0, duration: 3, ease: "power2.inOut" }
            );
        }
    }, []);

    return (
        <div
            className={`flex justify-center items-center w-screen bg-[${palette.background.light}]`}
            style={{ height: "calc(85vh - 2rem)" }}
        >
            <div className="relative w-full h-full flex justify-center items-center">
                {/* Linha ondulada */}
                <svg
                    className="absolute top-1/2 left-0 w-full h-40 pointer-events-none"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                >
                    <path
                        ref={lineRef}
                        d="M 0 100 Q 250 0, 500 100 T 1000 100"
                        stroke={palette.accents.icon}
                        strokeWidth="2.5"
                        fill="transparent"
                    />
                </svg>

                {/* Bolinhas / timeline */}
                <div className="flex w-full justify-around items-center relative z-10">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col items-center relative"
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Bolinha com imagem */}
                            <div
                                className={`w-24 h-24 rounded-full border-2 bg-white/40 backdrop-blur-md overflow-hidden shadow-md`}
                                style={{ borderColor: palette.border.dark }}
                            >
                                <img
                                    src={`/${idx + 4}.png`} // coloque imagens de educação correspondentes
                                    alt={edu.degree}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Dados visíveis */}
                            <div className="text-center mb-40">
                                <h3 className={`text-base font-bold text-[${palette.text.primary}]`}>
                                    {edu.degree}
                                </h3>
                                <p className={`text-xs text-[${palette.text.secondary}]`}>{edu.institution}</p>
                                <p className={`text-xs italic text-[${palette.text.muted}]`}>{edu.duration}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

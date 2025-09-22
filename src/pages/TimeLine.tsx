"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { FaTrophy } from "react-icons/fa";
import { experience, projects } from "@/utils/data";
import { palette } from "@/utils/color";
import TypingText from "@/utils/TypingText";

export default function TimeLine() {
    const lineRef = useRef<SVGPathElement | null>(null);
    const [hovered, setHovered] = useState<number | null>(null);
    const [showProjects, setShowProjects] = useState(false);
    const leaveTimer = useRef<number | null>(null);

    useEffect(() => {
        if (lineRef.current) {
            gsap.fromTo(
                lineRef.current,
                { strokeDasharray: 2000, strokeDashoffset: 2000 },
                { strokeDashoffset: 0, duration: 3, ease: "power2.inOut" }
            );
        }
    }, []);

    function handleEnter(idx: number) {
        if (leaveTimer.current) {
            window.clearTimeout(leaveTimer.current);
            leaveTimer.current = null;
        }
        setHovered(idx);
    }

    function handleLeaveWithDelay() {
        if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
        leaveTimer.current = window.setTimeout(() => {
            setHovered(null);
            leaveTimer.current = null;
        }, 150);
    }

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
                    {experience.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col items-center relative"
                            onMouseEnter={() => handleEnter(idx)}
                            onMouseLeave={handleLeaveWithDelay}
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div
                                className={`w-24 h-24 rounded-full border-2 bg-white/40 backdrop-blur-md overflow-hidden shadow-md`}
                                style={{ borderColor: palette.border.dark }}
                            >
                                <img
                                    src={`/${idx + 1}.png`}
                                    alt={exp.company}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="text-center mb-40">
                                <h3 className={`text-base font-bold text-[${palette.text.primary}]`}>
                                    {exp.company}
                                </h3>
                                <p className={`text-xs text-[${palette.text.secondary}]`}>{exp.location}</p>
                                <p className={`text-xs italic text-[${palette.text.muted}]`}>{exp.type}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal centralizado + overlay */}
                <AnimatePresence>
                    {hovered !== null && !showProjects && (
                        <>
                            {/* overlay */}
                            <motion.div
                                key="overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.35 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                className="absolute inset-0 z-40"
                                style={{ backgroundColor: "#000" }}
                                onMouseEnter={() => {
                                    if (leaveTimer.current) {
                                        window.clearTimeout(leaveTimer.current);
                                        leaveTimer.current = null;
                                    }
                                }}
                                onMouseLeave={() => setHovered(null)}
                            />

                            {/* modal experience */}
                            <motion.div
                                key="modal"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.22 }}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[80%] h-[80%] bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border`}
                                style={{ borderColor: palette.border.medium, zIndex: 50 }}
                                onMouseEnter={() => {
                                    if (leaveTimer.current) {
                                        window.clearTimeout(leaveTimer.current);
                                        leaveTimer.current = null;
                                    }
                                }}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className="flex h-full flex-col p-8 relative">
                                    {/* Botão Projects */}
                                    <button
                                        onClick={() => setShowProjects(true)}
                                        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            backgroundColor: palette.accents.button,
                                            color: "#fff",
                                            border: "none",
                                            padding: "0.5rem 1rem",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            boxShadow: `0 4px 10px ${palette.border.dark}`,
                                        }}
                                    >
                                        Projects
                                    </button>

                                    <div className="flex items-start gap-6">
                                        <div
                                            className="w-28 h-28 rounded-lg overflow-hidden bg-white/40 backdrop-blur-md border"
                                            style={{ borderColor: palette.border.dark }}
                                        >
                                            <img
                                                src={`/${hovered + 1}.png`}
                                                alt={experience[hovered].company}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div>
                                            <h2 className={`text-2xl font-bold text-[${palette.text.primary}]`}>
                                                {experience[hovered].company}
                                            </h2>
                                            <p className={`text-sm text-[${palette.text.secondary}]`}>
                                                {experience[hovered].location} • {experience[hovered].type}
                                            </p>
                                            <p className={`mt-2 text-lg font-semibold text-[${palette.text.primary}]`}>
                                                {experience[hovered].role}
                                            </p>
                                            <p className={`text-sm text-[${palette.text.secondary}]`}>
                                                {experience[hovered].duration}
                                            </p>
                                        </div>
                                    </div>

                                    <hr className="my-6 border-t" />

                                    <div className="flex-1 overflow-auto pr-4">
                                        <TypingText text={experience[hovered].description} start={true} />
                                    </div>

                                    <div className="mt-6 flex items-start gap-3">
                                        <FaTrophy className={`text-[${palette.accents.icon}] mt-1`} />
                                        <TypingText text={experience[hovered].achievements} start={true} />
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}

                    {/* Modal Projects */}
                    {hovered !== null && showProjects && (
                        <>
                            <motion.div
                                key="overlay-projects"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.35 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                className="absolute inset-0 z-40"
                                style={{ backgroundColor: "#000" }}
                                onMouseLeave={() => setShowProjects(false)}
                            />

                            <motion.div
                                key="modal-projects"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.22 }}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[80%] h-[80%] bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border overflow-auto`}
                                style={{ borderColor: palette.border.medium, zIndex: 50 }}
                            >
                                <div className="flex flex-col h-full p-8 relative">
                                    <div className="flex items-center gap-2 mb-6">
                                        <FaTrophy className={`text-[${palette.accents.icon}]`} />
                                        <h2 className={`text-2xl font-bold text-[${palette.text.primary}]`}>
                                            Projects
                                        </h2>
                                    </div>

                                    {projects
                                        .filter((p) => p.company === experience[hovered].company)
                                        .map((p, idx) => (
                                            <div key={idx} className="mb-6 p-4 border-b border-gray-300 last:border-b-0">
                                                <h3 className="text-lg font-semibold text-[${palette.text.primary}]">
                                                    {p.name}
                                                </h3>
                                                <p className="text-sm text-[${palette.text.secondary}]">{p.role}</p>
                                                <p className="mt-1 text-sm text-[${palette.text.primary}]">{p.description}</p>
                                                {p.technologies.length > 0 && (
                                                    <p className="mt-1 text-xs text-[${palette.text.secondary}]">
                                                        <strong>Tech:</strong> {<TypingText text={p.technologies.join(", ")} start={true} />}
                                                    </p>
                                                )}
                                                {p.skills.length > 0 && (
                                                    <p className="mt-1 text-xs text-[${palette.text.secondary}]">
                                                        <strong>Skills:</strong> {<TypingText text={p.skills.join(", ")} start={true} />}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

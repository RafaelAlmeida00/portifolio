"use client";

import { palette } from "@/utils/color";
import { selfProjects } from "@/utils/data";
import { FaTrophy } from "react-icons/fa";
import TypingText from "@/utils/TypingText";

export default function SelfProjects() {
    return (
        <div
            className={`flex justify-center items-start w-screen bg-[${palette.background.light}] py-16`}
            style={{ minHeight: "85vh" }}
        >
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1200px] px-4">
                {selfProjects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`relative flex flex-col bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border p-6 w-[320px]`}
                        style={{ borderColor: palette.border.medium }}
                    >
                        {/* Header com ícone */}
                        <div className="flex items-center gap-2 mb-4">
                            <FaTrophy className={`text-[${palette.accents.icon}]`} />
                            <h2 className={`text-xl font-bold text-[${palette.text.primary}]`}>
                                {project.name}
                            </h2>
                        </div>

                        {/* Descrição */}
                        <p className={`text-sm text-[${palette.text.secondary}] mb-3`}>
                            {project.description}
                        </p>

                        {/* Tecnologias */}
                        {project.technologies.length > 0 && (
                            <p className={`text-xs text-[${palette.text.secondary}] mb-1`}>
                                <strong>Tech:</strong>{" "}
                                <TypingText text={project.technologies.join(", ")} start={true} />
                            </p>
                        )}

                        {/* Skills */}
                        {project.skills.length > 0 && (
                            <p className={`text-xs text-[${palette.text.secondary}]`}>
                                <strong>Skills:</strong>{" "}
                                <TypingText text={project.skills.join(", ")} start={true} />
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

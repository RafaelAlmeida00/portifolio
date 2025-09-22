"use client";

import { palette } from "@/utils/color";
import { skills } from "@/utils/data";
import { FaTrophy } from "react-icons/fa";
import TypingText from "@/utils/TypingText";

export default function Skills() {
    return (
        <div
            className="flex justify-center items-start w-screen h-screen overflow-y-scroll py-16"
            style={{
                scrollbarWidth: "thin", // Firefox
                scrollbarColor: `${palette.accents.icon} ${palette.background.dark}` // Firefox
            }}        
            >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1040px] px-4 mt-15 mb-15">
                {skills.map((category, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border p-6"
                        style={{ borderColor: palette.border.medium }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <FaTrophy className={`text-[${palette.accents.icon}]`} />
                            <h2 className={`text-xl font-bold text-[${palette.text.primary}]`}>
                                {category.category}
                            </h2>
                        </div>
                        <p className={`text-sm text-[${palette.text.secondary}]`}>
                            <TypingText text={category.skills.join(", ")} start={true} />
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
}

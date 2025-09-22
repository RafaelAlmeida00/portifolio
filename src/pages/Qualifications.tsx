"use client";

import { palette } from "@/utils/color";
import { qualifications } from "@/utils/data"; // importe de onde estiver
import { FaCertificate } from "react-icons/fa"; // ícone diferente para qualifications
import TypingText from "@/utils/TypingText";

export default function Qualifications() {
    return (
        <div
            className="flex justify-center items-start w-screen h-screen overflow-y-scroll py-16"
            style={{
                scrollbarWidth: "thin", // Firefox
                scrollbarColor: `${palette.accents.icon} ${palette.background.dark}`, // Firefox
            }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1040px] px-4 mt-15 mb-15">
                {qualifications.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border p-6"
                        style={{ borderColor: palette.border.medium }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <FaCertificate className={`text-[${palette.accents.icon}]`} />
                            <h2 className={`text-xl font-bold text-[${palette.text.primary}]`}>
                                Qualification
                            </h2>
                        </div>
                        <p className={`text-sm text-[${palette.text.secondary}]`}>
                            <TypingText text={item} start={true} />
                        </p>
                    </div>
                ))}
            </div>

            {/* Scrollbar custom para Webkit */}
            <style jsx>{`
        div::-webkit-scrollbar {
          width: 12px;
        }
        div::-webkit-scrollbar-track {
          background: ${palette.background.dark};
        }
        div::-webkit-scrollbar-thumb {
          background-color: ${palette.accents.icon};
          border-radius: 6px;
          border: 3px solid ${palette.background.dark};
        }
      `}</style>
        </div>
    );
}

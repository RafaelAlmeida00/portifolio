"use client";

import { palette } from "@/utils/color";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import rafael from "../../public/rafael.jpg";
import Image from "next/image";
import TypingText from "@/utils/TypingText";
import { links } from "@/utils/data";

// Texto que será animado
const text = `  My name is Rafael, and I am a dedicated Software Engineer with a strong passion for driving innovation in industrial processes. Leveraging my hands-on experience on the shop floor, I specialize in developing full-stack solutions that seamlessly integrate digitalization and automation into complex industrial workflows. I thrive on creating efficient, scalable software that enhances operational performance and delivers tangible impact. Constantly exploring emerging technologies, I embrace challenging projects that push the boundaries of industrial innovation and digital transformation.`;


export default function Introduce() {
    return (
        <div
            className="flex justify-center items-center w-screen bg-[${palette.background.light}]"
            style={{ height: "calc(85vh - 2rem)" }}
        >
            {/* Lado esquerdo - pergaminho */}
            <section className="flex justify-center items-start w-2/3 h-full p-10">
                <motion.div
                    className="bg-[${palette.background.medium}] p-8 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <TypingText text={text} start={true} />
                </motion.div>
            </section>

            {/* Lado direito - polaroid estilo colagem */}
            <section className="flex justify-center items-start w-1/3 h-full pt-20">
                <div
                    className="relative w-72 h-96 rounded-lg shadow-xl flex flex-col items-center justify-between p-4"
                    style={{
                        backgroundColor: palette.background.dark,
                        border: `2px solid ${palette.border.dark}`,
                        transform: "rotate(-5deg)",
                    }}
                >
                    {/* Espaço superior - foto */}
                    <div
                        className="mt-4 w-60 h-60 border-3 flex justify-center items-center"
                        style={{
                            borderColor: palette.border.medium,
                            backgroundColor: palette.background.light,
                        }}
                    >
                        <Image
                            src={rafael}
                            alt="Rafael Almeida"
                            width={240}
                            height={240}
                            style={{ objectFit: "cover", borderRadius: "4px" }}
                        />
                    </div>

                    {/* Espaço inferior - links */}
                    <div className="flex justify-center items-center gap-6 mb-4">
                        {links.map((link, idx) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-[${palette.accents.icon}] hover:text-[${palette.accents.button}] transition-colors duration-200`}
                                >
                                    <Icon size={28} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            <style jsx>{`
        .animate-blink {
          display: inline-block;
          width: 1ch;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
}

"use client";

import { palette } from "@/utils/color";
import { motion } from "framer-motion";
import rafael from "../../public/rafael.jpg";
import Image from "next/image";
import TypingText from "@/utils/TypingText";
import { links } from "@/utils/data";

// Texto que será animado
const text = `  My name is Rafael, and I am a dedicated Software Engineer with a strong passion for driving innovation in industrial processes. Leveraging my hands-on experience on the shop floor, I specialize in developing full-stack solutions that seamlessly integrate digitalization and automation into complex industrial workflows. I thrive on creating efficient, scalable software that enhances operational performance and delivers tangible impact. Constantly exploring emerging technologies, I embrace challenging projects that push the boundaries of industrial innovation and digital transformation.`;

export default function Introduce() {
    return (
        <div
            className={`flex justify-center items-center w-screen bg-[${palette.background.light}]`}
            style={{ height: "calc(85vh - 2rem)" }}
        >
            {/* Layout principal */}
            <div className="flex w-full h-full flex-row md:flex-col lg:flex-row">
                {/* Lado esquerdo - texto */}
                <section className="flex justify-center items-start w-2/3 md:w-full lg:w-2/3 h-full p-6 md:p-4">
                    <motion.div
                        className={`bg-[${palette.background.medium}] p-6 md:p-4 rounded-lg w-full`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <TypingText text={text} start={true} />
                    </motion.div>
                </section>

                {/* Lado direito - polaroid */}
                <section className="flex justify-center items-start w-1/3 md:w-full lg:w-1/3 h-full pt-10 md:pt-6">
                    <div
                        className="relative w-72 h-96 md:w-60 md:h-80 sm:w-52 sm:h-72 rounded-lg shadow-xl flex flex-col items-center justify-between p-4"
                        style={{
                            backgroundColor: palette.background.dark,
                            border: `2px solid ${palette.border.dark}`,
                            transform: "rotate(-5deg)",
                        }}
                    >
                        {/* Foto */}
                        <div
                            className="mt-4 w-60 h-60 md:w-48 md:h-48 sm:w-40 sm:h-40 border-3 flex justify-center items-center"
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

                        {/* Links */}
                        {/* Links */}
                        <div className="flex w-full flex-row items-center justify-evenly gap-4 mb-4" id="links">
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
                                        <Icon size={24} />
                                    </a>
                                );
                            })}
                        </div>

                    </div>
                </section>
            </div>

            {/* Responsividade extra */}
            <style jsx>{`
        @media (max-width: 1024px) {
          section {
            padding: 1rem !important;
          }
        }
        @media (max-width: 768px) {
          div > div {
            flex-direction: column !important;
            gap: 1rem;
          }
          section {
            width: 100% !important;
            padding: 0.8rem !important;
          }
            #links {
            flex-direction: row !important;
          }
        }
        @media (max-width: 480px) {
          h1,
          p {
            font-size: 0.9rem !important;
          }
          .polaroid {
            width: 90% !important;
            height: auto !important;
          }
             #links {
            flex-direction: row !important;
          }
        }
      `}</style>
        </div>
    );
}

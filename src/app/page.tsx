"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookmark, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Introduce from "@/pages/Introduce";
import { palette } from "@/utils/color";
import TimeLine from "@/pages/TimeLine";
import Education from "@/pages/Education";
import SelfProjects from "@/pages/SelfProjects";
import Skills from "@/pages/Skills";
import Qualifications from "@/pages/Qualifications";

const pages = [
  { name: "Introduce Myself", component: <Introduce />, page: 1 },
  { name: "TimeLine", component: <TimeLine />, page: 2 },
  { name: "Education", component: <Education />, page: 3 },
  { name: "Self Projects", component: <SelfProjects />, page: 4 },
  { name: "Skills", component: <Skills />, page: 5 },
  { name: "Qualifications", component: <Qualifications />, page: 6 },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: palette.background.light,
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >

      {/* Header */}
      <header
        style={{
          height: "15vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem",
          backgroundColor: palette.background.medium,
          borderBottom: `2px solid ${palette.border.medium}`,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h1 style={{ color: palette.text.primary, fontSize: "2rem" }}>
            Portfolio
          </h1>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", height: "100%" }}>
          <span style={{ color: palette.text.secondary, fontSize: "1.2rem" }}>
            Page {pages[currentPage].page || currentPage + 1}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevPage}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: palette.accents.highlight,
              color: palette.text.primary,
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: `0 4px 10px ${palette.border.dark}`,
            }}
          >
            <FaArrowLeft /> Prev Page
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextPage}
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
            <FaArrowRight /> Next Page
          </motion.button>
          <div
            style={{
              display: "flex",
              height: "100%",
              alignItems: "flex-start",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                transform: "scaleY(2)",
                transformOrigin: "center top",
              }}
            >
              <FaBookmark color={palette.accents.icon} size={40} />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <motion.div
        style={{
          padding: "0.5rem 2rem",
          color: palette.accents.highlight,
          fontWeight: "bold",
          fontSize: "1rem",
          position: "relative",
          zIndex: 10,
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <motion.span
          key={currentPage}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          style={{ display: "flex", alignItems: "center", gap: "0.3rem", cursor: "default" }}
        >
          <span style={{ color: palette.accents.highlight }}>{">"}</span>
          <span style={{ color: palette.text.primary }}>{pages[currentPage].name.split(" ")[0]}</span>
        </motion.span>
      </motion.div>

      {/* Conteúdo */}
      <div
        style={{
          height: "calc(85vh - 2rem)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "2rem",
        }}
      >

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ x: "100%", opacity: 0, rotateY: 20 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            exit={{ x: "-100%", opacity: 0, rotateY: -20 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: palette.background.dark,
              borderRadius: "10px",
              padding: "2rem",
              boxShadow: `0 12px 30px rgba(0,0,0,0.25)`,
              color: palette.text.primary,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // Efeito de carta amassada
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  rgba(255,255,255,0.03),
                  rgba(255,255,255,0.03) 1px,
                  transparent 1px,
                  transparent 6px
                ),
                repeating-linear-gradient(
                  -45deg,
                  rgba(0,0,0,0.02),
                  rgba(0,0,0,0.02) 1px,
                  transparent 1px,
                  transparent 8px
                )
              `,
              backgroundBlendMode: "overlay",
              transform: "rotate(-0.3deg) skew(0.5deg, 0.5deg)",
            }}
          >
r
            {pages[currentPage].component}

          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { palette } from "@/utils/color";

interface Props {
    className?: string;
    particleCount?: number;
    wrinkleCount?: number;
}

export default function AncientScrollBackground({
    className,
    particleCount = 80,
    wrinkleCount = 40,
}: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // --- Partículas/Manchas mais fortes ---
        const particles: HTMLDivElement[] = [];
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement("div");
            const size = Math.random() * 8 + 4; // maior ainda
            p.style.position = "absolute";
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.backgroundColor = [
                palette.background.dark,   // escuro
                "#8b6e5059",                 // marrom médio
                "#5b463698",                 // marrom escuro
            ][Math.floor(Math.random() * 3)];
            p.style.borderRadius = "50%";
            p.style.opacity = `${0.2}`; // mais visível
            p.style.top = `${Math.random() * 100}%`;
            p.style.left = `${Math.random() * 100}%`;
            p.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.06)"; // sombra forte
            container.appendChild(p);
            particles.push(p);
        }

        particles.forEach((p) => {
            gsap.to(p, {
                x: Math.random() * 60 - 30,
                y: Math.random() * 60 - 30,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                duration: Math.random() * 12 + 5,
            });
        });

        // --- Rugas/Amassados mais destacados ---
        const wrinkles: HTMLDivElement[] = [];
        for (let i = 0; i < wrinkleCount; i++) {
            const w = document.createElement("div");
            const thickness = Math.random() * 3 + 2; // mais grossa
            w.style.position = "absolute";
            w.style.width = `${Math.random() * 120 + 80}px`; // mais longa
            w.style.height = `${thickness}px`;
            w.style.backgroundColor = "#5b46363f"; // escuro
            w.style.opacity = `${0.2}`; // mais visível
            w.style.top = `${Math.random() * 100}%`;
            w.style.left = `${Math.random() * 100}%`;
            w.style.transform = `rotate(${Math.random() * 360}deg)`;
            w.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.04)"; // sombra forte
            container.appendChild(w);
            wrinkles.push(w);
        }

        wrinkles.forEach((w) => {
            gsap.to(w, {
                x: Math.random() * 15 - 7.5,
                y: Math.random() * 15 - 7.5,
                rotation: Math.random() * 6 - 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                duration: Math.random() * 12 + 6,
            });
        });
    }, [particleCount, wrinkleCount]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                backgroundColor: "transparent",
                overflow: "hidden",
                zIndex: 9999,
            }}
        />
    );
}

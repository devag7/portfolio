"use client";

import Image from "next/image";
import { useLocalTimeIST } from "@/lib/clock";
import { Reveal } from "./Reveal";
import { EMAIL, LINKS, MAIN } from "@/lib/profile";

/** Dev's own work only: JantaHR screens and real source code from his projects. */
const SHOTS = [
  { src: "/images/work/jantahr-payroll.webp", w: 230, top: "8%", left: "30%", rotate: -7, delay: 0, alt: "JantaHR payroll run" },
  { src: "/images/work/rentwise-code.webp", w: 150, top: "30%", left: "14%", rotate: 6, delay: 80, alt: "RentWise source code" },
  { src: "/images/work/jantahr-compliance.webp", w: 210, top: "26%", left: "48%", rotate: -3, delay: 160, alt: "JantaHR compliance calendar" },
  { src: "/images/work/linkedin-mcp-code.webp", w: 150, top: "6%", left: "66%", rotate: 8, delay: 240, alt: "linkedin-mcp source code" },
  { src: "/images/work/jantahr-overview.webp", w: 200, top: "42%", left: "72%", rotate: -9, delay: 320, alt: "JantaHR dashboard" },
];

const LINK = { textDecoration: "underline", textUnderlineOffset: 4 } as const;

export function Footer() {
  const time = useLocalTimeIST();

  return (
    <footer data-bg="dark" className="footer">
      <div className="footer-cols">
        <div className="footer-col">
          <a href={`mailto:${EMAIL}`} style={LINK}>{EMAIL}</a>
          <span>Bengaluru, India, {time} IST</span>
        </div>
        <nav aria-label="Footer" className="footer-col">
          <a href="#about" style={LINK}>Experience</a>
          <a href="#work" style={LINK}>Work</a>
          <a href="#skills" style={LINK}>Skills</a>
          <a href="#contact" style={LINK}>Contact</a>
        </nav>
        <div className="footer-col">
          <a href={MAIN} style={LINK}>DevShipIt</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={LINK}>LinkedIn</a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" style={LINK}>GitHub</a>
          <a href={LINKS.x} target="_blank" rel="noopener noreferrer" style={LINK}>X</a>
        </div>
        <div className="footer-col footer-col--end">
          <a href={`${MAIN}/services/`} style={LINK}>Freelance services</a>
          <span>&copy; 2026 Dev Agarwalla</span>
        </div>
      </div>

      <div className="footer-mark">
        <Reveal as="div" rootMargin="-5% 0px">
          <p aria-hidden="true" className="footer-word">Dev Agarwalla</p>
        </Reveal>
        {SHOTS.map((p) => (
          <div
            key={p.src}
            aria-hidden="true"
            className="polaroid"
            style={{ top: p.top, left: p.left, width: p.w, transform: `rotate(${p.rotate}deg)`, animationDelay: `${p.delay}ms` }}
          >
            <Image src={p.src} alt="" width={460} height={345} sizes="230px" loading="lazy" />
          </div>
        ))}
      </div>
    </footer>
  );
}

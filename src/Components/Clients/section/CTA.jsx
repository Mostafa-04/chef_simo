// src/sections/CTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../../Reveal";

const CTA = () => {
  return (
    <section
      className="relative py-20 sm:py-28 lg:py-36 bg-[#111111] text-[#F7F3EC] text-center overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,24,34,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-4">
            LET'S CREATE SOMETHING TOGETHER
          </h2>
          <p className="font-serif italic text-xl text-[#F7F3EC]/70 mb-8">
            For brands, events, media and culinary projects.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-[#111111] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#CC1822]/30"
          >
            Work with Chef Simo
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
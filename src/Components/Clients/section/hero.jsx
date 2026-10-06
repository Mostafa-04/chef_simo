import React from "react";
import { Link } from "react-router-dom";
import { ChefHat, ArrowRight, Sparkles } from "lucide-react";
import ImagePlaceholder from "../../ImagePlaceholder";
import StatItem from "../../StatItem";

const stats = [
  { value: 1.4,  suffix: "M+", label: "followers",               decimals: 1 },
  { value: 2833, suffix: "",   label: "publications",            decimals: 0 },
  { value: 2018, suffix: "",   label: "MasterChef Maroc winner", decimals: 0 },
];

const zellige = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#111111] text-[#F7F3EC] pt-[110px] pb-12 overflow-hidden">
      {/* ── Background layers ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/back.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-[#111111]/70 pointer-events-none" />

      {/* Zellige */}
      <div
        className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_right,black_0%,transparent_75%)]"
        style={{ backgroundImage: zellige }}
      />

      {/* Glow + vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(204,24,34,0.18),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-transparent to-black/80 pointer-events-none" />

      {/* ── Contenu (au-dessus des layers) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* Texte */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#CC1822]/40 bg-[#CC1822]/10 backdrop-blur-sm text-[11px] tracking-[0.2em] uppercase text-[#E5303B] mb-6 animate-[fadeUp_1s_both]">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
              Moroccan Culinary Journey
            </span>

            <h1 className="font-serif font-semibold leading-[0.95] tracking-tight text-[clamp(4rem,11vw,10rem)] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] animate-[fadeUp_1.2s_both]">
              CHEF
              <br />
              <span className="text-[#E5303B]">SIMO</span>
            </h1>

            <p className="font-serif italic font-semibold text-xl sm:text-2xl text-[#E5303B] mb-4 animate-[fadeUp_1.2s_0.1s_both]">
              Chef · Culinary Expert · Food Ambassador
            </p>

            <p className="max-w-[46ch] text-[#F7F3EC]/80 animate-[fadeUp_1.2s_0.2s_both]">
              A Moroccan culinary journey, shared with the world.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-8 animate-[fadeUp_1.2s_0.3s_both]">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.1em] uppercase border border-[#CC1822] transition-all duration-300 hover:bg-white hover:text-[#111111] hover:border-white hover:-translate-y-1 hover:shadow-xl hover:shadow-[#CC1822]/30"
              >
                Discover Chef Simo
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 border border-[#F7F3EC] text-[#F7F3EC] text-[13px] tracking-[0.1em] uppercase bg-transparent transition-all duration-300 hover:bg-[#F7F3EC] hover:text-[#111111] hover:-translate-y-1"
              >
                Work with Simo
                <ChefHat
                  className="w-4 h-4 transition-transform group-hover:rotate-12"
                  strokeWidth={1.8}
                />
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="animate-[fadeUp_1.4s_0.2s_both]">
            <ImagePlaceholder
              src="/chef_simo.png"
              alt="Portrait du Chef Simo"
              caption="Hero portrait of Chef Simo"
              ratio="3/4"
              arched
              position="50% 20%" /* recadre sur le visage */
              className="max-w-md mx-auto lg:ml-auto hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* ── Stats ── */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mt-16 sm:mt-20 pt-8 border-t border-[#F7F3EC]/10">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </ul>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
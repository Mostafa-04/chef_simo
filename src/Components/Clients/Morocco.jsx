// src/pages/Morocco.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  MapPin,
  Sparkles,
  ArrowRight,
  Utensils,
  Sun,
  Waves,
  Mountain,
  Landmark,
  ChefHat,
} from "lucide-react";
import Reveal from "../Reveal";
import ImagePlaceholder from "../ImagePlaceholder";

/* ─────────────────────────────────────────────
   DONNÉES — Villes du Maroc
   ───────────────────────────────────────────── */
const cities = [
  {
    name: "Marrakech",
    subtitle: "The Red City",
    text: "Placeholder: flavours and stories of the red city.",
    icon: Sun,
    tag: "South",
    caption: "Marrakech food photo",
    src: "/marrakech.jpg",
    bg: "bg-[#F7F3EC]",
    position: "50% 30%",
  },
  {
    name: "Fès",
    subtitle: "Imperial Heritage",
    text: "Placeholder: imperial culinary heritage.",
    icon: Landmark,
    tag: "North",
    caption: "Fès food photo",
    src: "/Fés.jpg",
    bg: "bg-[#EFE8DC]",
    position: "50% 25%",
  },
  {
    name: "Casablanca",
    subtitle: "Urban & Coastal",
    text: "Placeholder: urban, coastal cuisine.",
    icon: Waves,
    tag: "Atlantic",
    caption: "Casablanca food photo",
    src: "/Casablanca.jpg",
    bg: "bg-[#F7F3EC]",
    position: "50% 30%",
  },
  {
    name: "Tangier",
    subtitle: "Where Two Seas Meet",
    text: "Placeholder: the meeting of two seas.",
    icon: Compass,
    tag: "Strait",
    caption: "Tangier food photo",
    src: "/tanger.jpg",
    bg: "bg-[#EFE8DC]",
    position: "50% 25%",
  },
  {
    name: "Agadir",
    subtitle: "Atlantic & Souss",
    text: "Placeholder: Atlantic and Souss flavours.",
    icon: Mountain,
    tag: "Souss",
    caption: "Agadir food photo",
    src: "/agadir.jpg",
    bg: "bg-[#F7F3EC]",
    position: "50% 30%",
  },
];

/* ─────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────── */
const MoroccoHero = () => {
  return (
    <section
      className="relative bg-[#111111] text-[#F7F3EC] pt-[170px] pb-20 sm:pb-24 overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(204,24,34,0.18),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CC1822]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#CC1822]/40 bg-[#CC1822]/10 text-[11px] tracking-[0.2em] uppercase text-[#E5303B] mb-6">
            <Compass className="w-3.5 h-3.5" strokeWidth={2} />
            A Culinary Journey
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-serif font-semibold leading-[1] text-[clamp(2.8rem,8vw,6.5rem)] mb-4">
            MOROCCO{" "}
            <span className="text-[#E5303B]">ON A PLATE</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-serif italic text-xl sm:text-2xl text-[#F7F3EC]/70 max-w-2xl">
            Discover Morocco through its flavours, ingredients and stories.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   2. SECTION VILLE (composant réutilisable)
   ───────────────────────────────────────────── */
const CitySection = ({ city, index }) => {
  const { name, subtitle, text, icon: Icon, tag, caption, src, bg, position } = city;

  // Alterne le sens : pair = image à gauche, impair = image à droite
  const reversed = index % 2 === 1;

  return (
    <section
      className={`${bg} text-[#111111] py-16 sm:py-20 lg:py-24`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <Reveal>
            <div className="relative">
              <ImagePlaceholder
                src={src}
                alt={`${name} — ${caption}`}
                caption={caption}
                ratio="3/4"
                arched
                position={position}
                className="max-w-md mx-auto lg:mx-0 hover:scale-[1.02]"
              />

              {/* Badge index décoratif */}
              <span className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#CC1822] text-white flex items-center justify-center font-serif font-semibold text-xl sm:text-2xl shadow-lg shadow-[#CC1822]/30">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>

          {/* Texte */}
          <Reveal delay={150}>
            {/* Tag + Icône */}
            <div className="flex items-center gap-3 mb-5">
              <span className="p-2 rounded-full bg-[#CC1822]/10 border border-[#CC1822]/30">
                <Icon
                  className="w-4 h-4 text-[#E5303B]"
                  strokeWidth={1.8}
                />
              </span>
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#CC1822]">
                {tag}
              </span>
            </div>

            <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-2">
              {name}
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#E5303B] mb-5">
              {subtitle}
            </p>

            <p className="text-[#111111]/75 max-w-xl mb-8">{text}</p>

            {/* Petit séparateur */}
            <div className="flex items-center gap-2 mb-8">
              <span className="h-[2px] w-12 bg-[#CC1822]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#CC1822]" />
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-[#111111] text-[#111111] text-[12px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#CC1822] hover:border-[#CC1822] hover:text-white hover:-translate-y-1"
            >
              Explore {name}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   3. GRILLE DE NAVIGATION RAPIDE (bonus)
   ───────────────────────────────────────────── */
const CityQuickNav = () => {
  return (
    <section
      className="relative py-14 sm:py-16 bg-[#111111] text-[#F7F3EC] overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-8">
          <p className="font-serif italic text-lg text-[#F7F3EC]/70 text-center">
            Jump to a city
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {cities.map(({ name, icon: Icon }, i) => (
            <Reveal key={name} delay={i * 80}>
              <a
                href={`#${name.toLowerCase().replace(/[^a-z]/g, "")}`}
                className="group flex items-center justify-center gap-2 py-3 px-4 border border-[#F7F3EC]/15 hover:border-[#CC1822] hover:bg-[#CC1822]/10 transition-all duration-300"
              >
                <Icon
                  className="w-4 h-4 text-[#E5303B]"
                  strokeWidth={1.8}
                />
                <span className="text-sm tracking-wide text-[#F7F3EC]/80 group-hover:text-white transition-colors">
                  {name}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   4. CITATION / BANDEAU
   ───────────────────────────────────────────── */
const MoroccoQuote = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#EFE8DC] text-[#111111] text-center">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Utensils
            className="w-10 h-10 text-[#CC1822] mx-auto mb-6"
            strokeWidth={1.5}
          />
          <p className="font-serif italic text-2xl sm:text-3xl leading-relaxed text-[#111111]/85">
            “Each Moroccan city carries its own flavour its own story
            written in spice, saffron and sunlight.”
          </p>
          <p className="mt-6 text-xs tracking-[0.3em] uppercase text-[#CC1822]">
            Chef Simo
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   5. CTA FINALE
   ───────────────────────────────────────────── */
const MoroccoCTA = () => {
  return (
    <section
      className="relative py-20 sm:py-28 lg:py-32 bg-[#111111] text-[#F7F3EC] text-center overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,24,34,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <ChefHat
            className="w-10 h-10 text-[#E5303B] mx-auto mb-6"
            strokeWidth={1.5}
          />
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-4">
            TASTE MOROCCO WITH CHEF SIMO
          </h2>
          <p className="font-serif italic text-xl text-[#F7F3EC]/70 mb-8">
            Media, events, culinary projects bring Morocco to your table.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-[#111111] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#CC1822]/30"
            >
              Work with Chef Simo
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#F7F3EC] text-[#F7F3EC] text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#F7F3EC] hover:text-[#111111] hover:-translate-y-1"
            >
              See projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────── */
const Morocco = () => {
  return (
    <>
      <MoroccoHero />
      

      {cities.map((city, i) => (
        <div
          key={city.name}
          id={city.name.toLowerCase().replace(/[^a-z]/g, "")}
        >
          <CitySection city={city} index={i} />
        </div>
      ))}

      <MoroccoQuote />
      <MoroccoCTA />
    </>
  );
};

export default Morocco;
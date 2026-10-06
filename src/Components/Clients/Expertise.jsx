// src/pages/Expertise.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ChefHat,
  Globe2,
  Utensils,
  Briefcase,
  Wine,
  BookOpen,
  ArrowRight,
  Star,
} from "lucide-react";
import Reveal from "../Reveal";
import ImagePlaceholder from "../ImagePlaceholder";

/* ─────────────────────────────────────────────
   DONNÉES — 6 domaines d'expertise
   ───────────────────────────────────────────── */
const expertises = [
  {
    icon: Sparkles,
    title: "Moroccan Cuisine",
    text: "Tradition, technique and identity.",
    caption: "Moroccan Cuisine",
    src: "/plan_marocain.jpg",
    tag: "Signature",
  },
  {
    icon: Globe2,
    title: "International Cuisine",
    text: "A global culinary perspective.",
    caption: "International Cuisine",
    src: "/International_Cuisine.jpg",
    tag: "Global",
  },
  {
    icon: Utensils,
    title: "Culinary Techniques",
    text: "Craft explained clearly.",
    caption: "Culinary Techniques",
    src: "/Culinary_Techniques.jpg",
    tag: "Craft",
  },
  {
    icon: Briefcase,
    title: "Food Consulting",
    text: "Expertise for professional projects.",
    caption: "Food Consulting",
    src: "/Food_Consulting.jpg",
    tag: "Business",
  },
  {
    icon: Wine,
    title: "Gastronomy",
    text: "Culture, flavour and refinement.",
    caption: "Gastronomy",
    src: "/gastronomy.jpg",
    tag: "Art",
  },
  {
    icon: BookOpen,
    title: "Culinary Storytelling",
    text: "Food told as a story.",
    caption: "Culinary Storytelling",
    src: "Culinary_Storytelling.jpg",
    tag: "Media",
  },
];

/* ─────────────────────────────────────────────
   1. HERO / PAGE HEADER
   ───────────────────────────────────────────── */
const ExpertiseHero = () => {
  return (
    <section
      className="relative bg-[#111111] text-[#F7F3EC] pt-[170px] pb-20 sm:pb-24 overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Glow décoratif */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(204,24,34,0.18),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CC1822]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#CC1822]/40 bg-[#CC1822]/10 text-[11px] tracking-[0.2em] uppercase text-[#E5303B] mb-6">
            <Star className="w-3.5 h-3.5" strokeWidth={2} />
            Expert Areas
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-serif font-semibold leading-[1] text-[clamp(2.8rem,8vw,6.5rem)] mb-4">
            CULINARY{" "}
            <span className="text-[#E5303B]">EXPERTISE</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-serif italic text-xl sm:text-2xl text-[#F7F3EC]/70 max-w-2xl">
            Six areas where Chef Simo brings his knowledge.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   2. CARTE D'EXPERTISE (composant réutilisable)
   ───────────────────────────────────────────── */
const ExpertiseCard = ({ icon: Icon, title, text, caption, src, tag, index }) => {
  return (
    <Reveal delay={index * 100}>
      <article className="group relative flex flex-col h-full bg-white border border-[#111111]/10 hover:border-[#CC1822]/40 transition-colors duration-500 overflow-hidden">
        {/* Image */}
        <div className="relative overflow-hidden">
          <ImagePlaceholder
            src={src}
            alt={title}
            caption={caption}
            ratio="4/3"
            className="group-hover:scale-105"
          />

          {/* Tag en haut */}
          {tag && (
            <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#CC1822] text-white text-[10px] tracking-[0.2em] uppercase">
              {tag}
            </span>
          )}

          {/* Numéro décoratif */}
          <span className="absolute top-3 right-4 z-10 font-serif text-5xl font-semibold text-white/20 group-hover:text-[#E5303B]/40 transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Contenu */}
        <div className="relative flex flex-col flex-1 p-6 sm:p-7">
          <div className="flex items-center gap-3 mb-3">
            <span className="p-2 rounded-full bg-[#CC1822]/10 border border-[#CC1822]/30 group-hover:bg-[#CC1822] transition-colors duration-300">
              <Icon
                className="w-4 h-4 text-[#E5303B] group-hover:text-white transition-colors"
                strokeWidth={1.8}
              />
            </span>
            <h3 className="font-serif font-semibold text-xl sm:text-2xl transition-colors group-hover:text-[#CC1822]">
              {title}
            </h3>
          </div>

          <p className="text-[15px] text-[#111111]/70 mb-5">{text}</p>

          {/* Lien discret */}
          <Link
            to="/contact"
            className="mt-auto inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#111111]/50 group-hover:text-[#CC1822] transition-colors"
          >
            Learn more
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* Liseré rouge qui pousse au hover */}
        <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#CC1822] group-hover:w-full transition-all duration-500" />
      </article>
    </Reveal>
  );
};

/* ─────────────────────────────────────────────
   3. GRILLE DES EXPERTISES
   ───────────────────────────────────────────── */
const ExpertiseGrid = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F7F3EC] text-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-14 max-w-3xl">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            SIX AREAS OF EXPERTISE
          </h2>
          <p className="font-serif italic text-xl opacity-75">
            From Moroccan tradition to international gastronomy where Chef
            Simo brings his knowledge to life.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {expertises.map((item, i) => (
            <ExpertiseCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   4. BANDEAU CITATION (décoratif)
   ───────────────────────────────────────────── */
const ExpertiseQuote = () => {
  return (
    <section
      className="relative py-16 sm:py-20 bg-[#111111] text-[#F7F3EC] overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <ChefHat
            className="w-10 h-10 text-[#E5303B] mx-auto mb-6"
            strokeWidth={1.5}
          />
          <p className="font-serif italic text-2xl sm:text-3xl leading-relaxed text-[#F7F3EC]/90">
            “Cooking is where tradition meets creativity every plate tells
            a story.”
          </p>
          <p className="mt-6 text-xs tracking-[0.3em] uppercase text-[#E5303B]">
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
const ExpertiseCTA = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-[#EFE8DC] text-[#111111] text-center overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-4">
            NEED CULINARY EXPERTISE?
          </h2>
          <p className="font-serif italic text-xl opacity-75 mb-8">
            Consulting, workshops, media, events let's talk about your
            project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#111111] hover:-translate-y-1 hover:shadow-xl"
            >
              Work with Chef Simo
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#111111] text-[#111111] text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#111111] hover:text-white hover:-translate-y-1"
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
const Expertise = () => {
  return (
    <>
      <ExpertiseHero />
      <ExpertiseGrid />
      <ExpertiseQuote />
      <ExpertiseCTA />
    </>
  );
};

export default Expertise;
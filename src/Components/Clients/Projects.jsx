// src/pages/Projects.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  ArrowRight,
  Sparkles,
  Calendar,
  Megaphone,
  Utensils,
  Handshake,
  ExternalLink,
  Tag,
  ChevronRight,
} from "lucide-react";
import Reveal from "../Reveal";
import ImagePlaceholder from "../ImagePlaceholder";

/* ─────────────────────────────────────────────
   DONNÉES — Projets
   Toutes les cartes ont le MÊME ratio (4/3) et la MÊME taille.
   ───────────────────────────────────────────── */
const projects = [
  {
    icon: Handshake,
    title: "Brand Collaboration",
    text: "Example project: placeholder.",
    tag: "Placeholder",
    category: "Brand",
    caption: "Example",
    src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
    ratio: "4/3",
    year: "2024",
  },
  {
    icon: Calendar,
    title: "Culinary Event",
    text: "Example project: placeholder.",
    tag: "Placeholder",
    category: "Event",
    caption: "Example",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    ratio: "4/3",
    year: "2024",
  },
  {
    icon: Megaphone,
    title: "Food Campaign",
    text: "Example project: placeholder.",
    tag: "Placeholder",
    category: "Campaign",
    caption: "Example",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    ratio: "4/3",
    year: "2023",
  },
  {
    icon: Utensils,
    title: "Gastronomy Project",
    text: "Example project: placeholder.",
    tag: "Placeholder",
    category: "Gastronomy",
    caption: "Example",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    ratio: "4/3",
    year: "2023",
  },
];

/* Catégories pour le filtre */
const categories = [
  { label: "All", icon: Sparkles },
  { label: "Brand", icon: Handshake },
  { label: "Event", icon: Calendar },
  { label: "Campaign", icon: Megaphone },
  { label: "Gastronomy", icon: Utensils },
];

/* ─────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────── */
const ProjectsHero = () => {
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
            <Briefcase className="w-3.5 h-3.5" strokeWidth={2} />
            Portfolio
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-serif font-semibold leading-[1] text-[clamp(2.8rem,8vw,6.5rem)] mb-4">
            BEHIND{" "}
            <span className="text-[#E5303B]">CHEF SIMO</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-serif italic text-xl sm:text-2xl text-[#F7F3EC]/70 max-w-2xl">
            Example projects. Real collaborations will be added later.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   2. FILTRE CATÉGORIES
   ───────────────────────────────────────────── */
const CategoryFilter = ({ active, onChange }) => {
  return (
    <Reveal className="mb-10">
      <div className="flex flex-wrap gap-3">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => onChange(label)}
            className={`group inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase border transition-all duration-300
              ${
                active === label
                  ? "bg-[#CC1822] text-white border-[#CC1822] shadow-lg shadow-[#CC1822]/20"
                  : "border-[#111111]/20 text-[#111111]/70 hover:border-[#CC1822] hover:text-[#CC1822] hover:-translate-y-0.5"
              }`}
          >
            <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
            {label}
          </button>
        ))}
      </div>
    </Reveal>
  );
};

/* ─────────────────────────────────────────────
   3. CARTE PROJET — taille et ratio UNIFORMES
   ───────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
  const { icon: Icon, title, text, tag, caption, src, ratio, year } = project;

  return (
    <Reveal delay={index * 100}>
      <article className="group relative flex flex-col bg-white border border-[#111111]/10 hover:border-[#CC1822]/40 transition-all duration-500 overflow-hidden h-full">
        {/* Image — même ratio pour toutes les cartes */}
        <div className="relative overflow-hidden">
          <ImagePlaceholder
            src={src}
            alt={title}
            caption={caption}
            ratio={ratio}
            className="group-hover:scale-105"
          />

          {/* Overlay dégradé */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Tag catégorie */}
          <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 bg-[#CC1822] text-white text-[10px] tracking-[0.2em] uppercase">
            <Tag className="w-3 h-3" strokeWidth={2} />
            {tag}
          </span>

          {/* Année */}
          <span className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white text-[10px] tracking-widest">
            {year}
          </span>

          {/* Bouton "voir" au hover */}
          <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#111111] text-[11px] tracking-[0.2em] uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              View project
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
            </span>
          </div>
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

        {/* Liseré rouge hover */}
        <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#CC1822] group-hover:w-full transition-all duration-500" />
      </article>
    </Reveal>
  );
};

/* ─────────────────────────────────────────────
   4. GRILLE PROJETS — 3 colonnes égales
   ───────────────────────────────────────────── */
const ProjectsGrid = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F7F3EC] text-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-12 max-w-3xl">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            SELECTED PROJECTS
          </h2>
          <p className="font-serif italic text-xl opacity-75">
            A selection of example collaborationsbrands, events, campaigns
            and gastronomy.
          </p>
        </Reveal>

        <CategoryFilter active={active} onChange={setActive} />

        {/* 1 colonne mobile → 2 tablette → 3 desktop, toutes égales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif italic text-xl text-[#111111]/60">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   5. PROCESSUS / COLLABORATION
   ───────────────────────────────────────────── */
const processSteps = [
  { number: "01", title: "Discover", text: "We discuss your brand, goals and vision." },
  { number: "02", title: "Create", text: "Chef Simo designs the culinary concept." },
  { number: "03", title: "Deliver", text: "Production, execution and storytelling." },
];

const CollaborationProcess = () => {
  return (
    <section
      className="relative py-20 sm:py-28 bg-[#111111] text-[#F7F3EC] overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-14">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            HOW WE COLLABORATE
          </h2>
          <p className="font-serif italic text-xl text-[#F7F3EC]/70">
            From first idea to final plate.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {processSteps.map(({ number, title, text }, i) => (
            <Reveal key={number} delay={i * 150}>
              <div className="relative p-8 border border-[#F7F3EC]/10 hover:border-[#CC1822]/50 transition-colors duration-500">
                <span className="font-serif text-6xl font-semibold text-[#E5303B]/30 block mb-4">
                  {number}
                </span>
                <h3 className="font-serif font-semibold text-2xl mb-2">
                  {title}
                </h3>
                <p className="text-[#F7F3EC]/70">{text}</p>

                {i < processSteps.length - 1 && (
                  <ChevronRight
                    className="hidden sm:block absolute top-1/2 -right-4 lg:-right-6 w-8 h-8 text-[#CC1822]/50 -translate-y-1/2"
                    strokeWidth={1.5}
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   6. CTA FINALE
   ───────────────────────────────────────────── */
const ProjectsCTA = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-[#EFE8DC] text-[#111111] text-center overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Briefcase
            className="w-10 h-10 text-[#CC1822] mx-auto mb-6"
            strokeWidth={1.5}
          />
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-4">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="font-serif italic text-xl opacity-75 mb-8">
            Let's bring your culinary idea to life with Chef Simo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#111111] hover:-translate-y-1 hover:shadow-xl"
            >
              Start a project
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </Link>
            <Link
              to="/media"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#111111] text-[#111111] text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#111111] hover:text-white hover:-translate-y-1"
            >
              See media
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
const Projects = () => {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <CollaborationProcess />
      <ProjectsCTA />
    </>
  );
};

export default Projects;
// src/pages/Media.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Tv,
  Play,
  Mic,
  Calendar,
  Newspaper,
  Film,
  Trophy,
  ArrowRight,
  ExternalLink,
  X,
} from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Reveal from "../Reveal";
import ImagePlaceholder from "../ImagePlaceholder";

/* ─────────────────────────────────────────────
   DONNÉES — Apparitions média
   ───────────────────────────────────────────── */
const mediaItems = [
  {
    icon: Trophy,
    title: "MasterChef Maroc",
    text: "Placeholder",
    category: "TV Show",
    caption: "Video placeholder",
    src: "/media/masterchef.png",
    videoUrl: "",             // laisser vide tant qu'il n'y a pas de vraie vidéo
    year: "2018",
    featured: true,
  },
  {
    icon: Tv,
    title: "TV",
    text: "Placeholder",
    category: "Television",
    caption: "Video placeholder",
    src: "/media/tv.png",
    videoUrl: "",
    year: "—",
  },
  {
    icon: Mic,
    title: "Interviews",
    text: "Placeholder",
    category: "Interview",
    caption: "Video placeholder",
    src: "/media/interviews.png",
    videoUrl: "",
    year: "—",
  },
  {
    icon: Calendar,
    title: "Events",
    text: "Placeholder",
    category: "Live",
    caption: "Video placeholder",
    src: "/media/events.png",
    videoUrl: "",
    year: "—",
  },
  {
    icon: Newspaper,
    title: "Press",
    text: "Placeholder",
    category: "Print & Online",
    caption: "Video placeholder",
    src: "/media/press.png",
    videoUrl: "",
    year: "—",
  },
  {
    icon: Film,
    title: "Video appearances",
    text: "Placeholder",
    category: "Digital",
    caption: "Video placeholder",
    src: "/media/video-appearances.png",
    videoUrl: "",
    year: "—",
  },
];

/* Filtres catégories */
const categories = [
  { label: "All", icon: Film },
  { label: "TV Show", icon: Trophy },
  { label: "Television", icon: Tv },
  { label: "Interview", icon: Mic },
  { label: "Live", icon: Calendar },
  { label: "Print & Online", icon: Newspaper },
  { label: "Digital", icon: Film },
];

/* ─────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────── */
const MediaHero = () => {
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
            <Film className="w-3.5 h-3.5" strokeWidth={2} />
            Press & Media
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-serif font-semibold leading-[1] text-[clamp(2.8rem,8vw,6.5rem)] mb-4">
            CHEF SIMO{" "}
            <span className="text-[#E5303B]">IN THE MEDIA</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-serif italic text-xl sm:text-2xl text-[#F7F3EC]/70 max-w-2xl">
            Appearances, interviews and events. Real media to be added.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   2. FILTRE CATÉGORIES
   ───────────────────────────────────────────── */
const MediaFilter = ({ active, onChange }) => {
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
   3. CARTE MEDIA (vidéo cliquable)
   ───────────────────────────────────────────── */
const MediaCard = ({ item, index, onPlay }) => {
  const {
    icon: Icon,
    title,
    text,
    category,
    caption,
    src,
    year,
  } = item;

  return (
    <Reveal delay={index * 100}>
      <article className="group relative flex flex-col h-full bg-white border border-[#111111]/10 hover:border-[#CC1822]/40 transition-all duration-500 overflow-hidden">
        {/* Image + bouton play */}
        <div className="relative overflow-hidden">
          <ImagePlaceholder
            src={src}
            alt={title}
            caption={caption}
            ratio="16/9"
            className="group-hover:scale-105"
          />

          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none" />

          {/* Bouton play central */}
          <button
            type="button"
            onClick={() => onPlay(item)}
            aria-label={`Play ${title}`}
            className="absolute inset-0 z-10 flex items-center justify-center group/play"
          >
            <span className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white bg-black/40 backdrop-blur-sm text-white transition-all duration-300 group-hover/play:bg-[#CC1822] group-hover/play:border-[#CC1822] group-hover/play:scale-110">
              {/* Halo pulsé */}
              <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-60" />
              <Play
                className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-current"
                strokeWidth={1.5}
              />
            </span>
          </button>

          {/* Badge catégorie */}
          <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 bg-[#CC1822] text-white text-[10px] tracking-[0.2em] uppercase">
            <Icon className="w-3 h-3" strokeWidth={2} />
            {category}
          </span>

          {/* Année */}
          {year && year !== "—" && (
            <span className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white text-[10px] tracking-widest">
              {year}
            </span>
          )}
        </div>

        {/* Contenu */}
        <div className="relative flex flex-col flex-1 p-6 sm:p-7">
          <h3 className="font-serif font-semibold text-xl sm:text-2xl mb-2 transition-colors group-hover:text-[#CC1822]">
            {title}
          </h3>
          <p className="text-[15px] text-[#111111]/70">{text}</p>

          <button
            type="button"
            onClick={() => onPlay(item)}
            className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#111111]/50 group-hover:text-[#CC1822] transition-colors self-start"
          >
            Watch now
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Liseré rouge hover */}
        <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#CC1822] group-hover:w-full transition-all duration-500" />
      </article>
    </Reveal>
  );
};

/* ─────────────────────────────────────────────
   4. MODALE VIDÉO
   ───────────────────────────────────────────── */
const VideoModal = ({ item, onClose }) => {
  // Fermer avec Escape + bloquer scroll body
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-[fadeIn_0.3s_ease-out]"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      />

      {/* Contenu */}
      <div className="relative w-full max-w-4xl bg-[#111111] border border-[#CC1822]/30 shadow-2xl animate-[scaleIn_0.4s_cubic-bezier(0.2,0.7,0.2,1)]">
        {/* Bouton fermer */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 sm:-top-14 p-2 text-[#F7F3EC] hover:text-[#E5303B] transition-colors z-10"
        >
          <X className="w-7 h-7" strokeWidth={1.5} />
        </button>

        {/* Zone vidéo */}
        <div className="relative aspect-video bg-black">
          {item.videoUrl ? (
            <iframe
              src={item.videoUrl}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <Play
                className="w-14 h-14 text-[#CC1822] mb-4"
                strokeWidth={1.5}
              />
              <p className="font-serif italic text-lg text-[#F7F3EC]/80 mb-2">
                Video coming soon
              </p>
              <p className="text-sm text-[#F7F3EC]/50">
                {item.title} && real media to be added.
              </p>
            </div>
          )}
        </div>

        {/* Infos bas */}
        <div className="p-6 sm:p-8 border-t border-[#F7F3EC]/10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#CC1822]/15 text-[#E5303B] text-[10px] tracking-[0.2em] uppercase mb-3">
            <item.icon className="w-3 h-3" strokeWidth={2} />
            {item.category}
          </span>
          <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-[#F7F3EC] mb-2">
            {item.title}
          </h3>
          <p className="text-[#F7F3EC]/60">{item.text}</p>
        </div>
      </div>

      {/* Keyframes locales */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

/* ─────────────────────────────────────────────
   5. GRILLE MEDIA (avec filtre)
   ───────────────────────────────────────────── */
const MediaGrid = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    active === "All"
      ? mediaItems
      : mediaItems.filter((m) => m.category === active);

  return (
    <>
      <section className="py-20 sm:py-28 lg:py-36 bg-[#F7F3EC] text-[#111111]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
              MEDIA APPEARANCES
            </h2>
            <p className="font-serif italic text-xl opacity-75">
              TV, interviews, events, press and digital — a selection to be
              completed.
            </p>
          </Reveal>

          <MediaFilter active={active} onChange={setActive} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {filtered.map((item, i) => (
              <MediaCard
                key={item.title}
                item={item}
                index={i}
                onPlay={setSelected}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif italic text-xl text-[#111111]/60">
                No media in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modale */}
      {selected && (
        <VideoModal item={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

/* ─────────────────────────────────────────────
   6. RÉSEAUX SOCIAUX
   ───────────────────────────────────────────── */
const SocialFollow = () => {
  const socials = [
    {
      icon: FaInstagram,
      label: "Instagram",
      handle: "@chef_simo_officiel",
      href: "https://www.instagram.com/chef_simo_officiel",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      handle: "Chef Simo",
      href: "#",
    },
  ];

  return (
    <section
      className="relative py-20 sm:py-24 bg-[#111111] text-[#F7F3EC] overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="text-center mb-12">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            FOLLOW THE JOURNEY
          </h2>
          <p className="font-serif italic text-xl text-[#F7F3EC]/70">
            1.4M+ followers on Instagram.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {socials.map(({ icon: Icon, label, handle, href }, i) => (
            <Reveal key={label} delay={i * 150}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 border border-[#F7F3EC]/15 hover:border-[#CC1822] hover:bg-[#CC1822]/10 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="p-3 rounded-full border border-[#CC1822]/50 bg-[#CC1822]/10 group-hover:bg-[#CC1822] transition-colors">
                  <Icon
                    className="w-5 h-5 text-[#E5303B] group-hover:text-white transition-colors"
                    strokeWidth={1.8}
                  />
                </span>
                <div className="flex-1">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#F7F3EC]/50 mb-0.5">
                    {label}
                  </p>
                  <p className="font-serif font-semibold text-lg text-[#F7F3EC]">
                    {handle}
                  </p>
                </div>
                <ExternalLink
                  className="w-4 h-4 text-[#F7F3EC]/40 group-hover:text-[#E5303B] transition-colors"
                  strokeWidth={1.8}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   7. CTA FINALE
   ───────────────────────────────────────────── */
const MediaCTA = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-[#EFE8DC] text-[#111111] text-center overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Mic
            className="w-10 h-10 text-[#CC1822] mx-auto mb-6"
            strokeWidth={1.5}
          />
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-4">
            MEDIA & PRESS INQUIRIES
          </h2>
          <p className="font-serif italic text-xl opacity-75 mb-8">
            Interviews, features, TV appearances get in touch with Chef
            Simo's team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#111111] hover:-translate-y-1 hover:shadow-xl"
            >
              Contact press team
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
const Media = () => {
  return (
    <>
      <MediaHero />
      <MediaGrid />
      <SocialFollow />
      <MediaCTA />
    </>
  );
};

export default Media;
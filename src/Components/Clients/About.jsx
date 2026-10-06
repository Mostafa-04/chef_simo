// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  ChefHat,
  Globe2,
  Briefcase,
  ArrowRight,
  Award,
  Quote,
} from "lucide-react";
import Reveal from "../Reveal";
import ImagePlaceholder from "../ImagePlaceholder";

/* ─────────────────────────────────────────────
   1. HERO / PAGE HEADER
   ───────────────────────────────────────────── */
const AboutHero = () => {
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
          <h1 className="font-serif font-semibold leading-[1] text-[clamp(2.8rem,8vw,6.5rem)] mb-4">
            ABOUT{" "}
            <span className="text-[#E5303B]">
              CHEF SIMO
            </span>
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="font-serif italic text-xl sm:text-2xl text-[#F7F3EC]/70">
            Who is Chef Simo?
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   2. WHO IS CHEF SIMO?
   ───────────────────────────────────────────── */
const WhoIsChefSimo = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F7F3EC] text-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Portrait */}
          <Reveal>
            <ImagePlaceholder
              src="/chef_simo.png"
              alt="Portrait du Chef Simo"
              caption="Portrait"
              ratio="3/4"
              arched
              position="50% 20%"
              className="max-w-md mx-auto lg:mx-0 hover:scale-[1.02]"
            />
          </Reveal>

          {/* Texte */}
          <Reveal delay={150}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#CC1822]/40 bg-[#CC1822]/10 text-[11px] tracking-[0.2em] uppercase text-[#E5303B] mb-6">
              <ChefHat className="w-3.5 h-3.5" strokeWidth={2} />
              Biography
            </span>

            <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-6">
              WHO IS CHEF SIMO?
            </h2>

            <div className="space-y-4 text-[#111111]/75 max-w-xl">
              <p>
                Winner of <strong className="text-[#111111]">MasterChef Maroc 2018</strong>,
                international chef, food and culinary expert, consultant and
                food ambassador.
              </p>
              <p className="italic text-[#111111]/60">
                Biography text to be provided by Chef Simo.
              </p>
            </div>

            {/* Petits badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: Trophy, label: "MasterChef 2018" },
                { icon: Globe2, label: "International" },
                { icon: Award, label: "Food Ambassador" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#111111]/15 text-xs tracking-wider uppercase text-[#111111]/70 hover:border-[#CC1822] hover:text-[#CC1822] transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   3. TIMELINE — PROFESSIONAL JOURNEY
   ───────────────────────────────────────────── */
const timeline = [
  {
    date: "Date to be confirmed",
    title: "Beginnings",
    text: "Placeholder: early culinary journey.",
  },
  {
    date: "2018",
    title: "MasterChef Maroc",
    text: "Winner of MasterChef Maroc 2018.",
    highlight: true,
  },
  {
    date: "Date to be confirmed",
    title: "International Chef",
    text: "Placeholder: international experience.",
  },
  {
    date: "Date to be confirmed",
    title: "Food Ambassador & Consultant",
    text: "Placeholder: ambassador and consulting work.",
  },
  {
    date: "Today",
    title: "Chef Simo",
    text: "1.4M+ followers on Instagram.",
    current: true,
  },
];

const ProfessionalJourney = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#EFE8DC] text-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-14">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            PROFESSIONAL JOURNEY
          </h2>
          <p className="font-serif italic text-xl opacity-75">
            A timeline with placeholders for confirmed dates.
          </p>
        </Reveal>

        {/* Timeline */}
        <ol className="relative max-w-3xl border-l border-[#CC1822] pl-8 sm:pl-10">
          {timeline.map(({ date, title, text, highlight, current }, i) => (
            <Reveal key={title} delay={i * 100}>
              <li className="relative pb-10 last:pb-0">
                {/* Diamond marker */}
                <span
                  className={`absolute -left-[42px] sm:-left-[50px] top-2 w-3.5 h-3.5 rotate-45 transition-colors
                    ${
                      current
                        ? "bg-[#E5303B] shadow-[0_0_0_6px_rgba(229,48,59,0.15)]"
                        : highlight
                        ? "bg-[#E5303B]"
                        : "bg-[#CC1822]"
                    }`}
                />

                <time
                  className={`block text-xs sm:text-sm tracking-widest uppercase mb-2 ${
                    current ? "text-[#E5303B] font-semibold" : "text-[#CC1822]"
                  }`}
                >
                  {date}
                </time>

                <h3 className="font-serif font-semibold text-2xl mb-1">
                  {title}
                </h3>
                <p className="text-[#111111]/70 max-w-xl">{text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   4. ROLES & ACHIEVEMENTS
   ───────────────────────────────────────────── */
const roles = [
  {
    icon: Trophy,
    title: "MasterChef Maroc 2018",
    text: "Winner.",
    caption: "Visual",
    src: "/master_chef.png",
  },
  {
    icon: ChefHat,
    title: "Culinary Expertise",
    text: "Details to be added.",
    caption: "Culinary",
    src: "/chef_simo.png",
  },
  {
    icon: Globe2,
    title: "Food Ambassador",
    text: "Details to be added.",
    caption: "Ambassador",
    src: "/chef_simo3.png",
  },
  {
    icon: Briefcase,
    title: "Consultant",
    text: "Details to be added.",
    caption: "Consulting",
    src: "/Consultant.png",
  },
];

const RolesAchievements = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F7F3EC] text-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-14">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            ROLES & ACHIEVEMENTS
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {roles.map(({ icon: Icon, title, text, caption, src }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="group cursor-pointer">
                <div className="mb-4 overflow-hidden">
                  <ImagePlaceholder
                    src={src}
                    alt={title}
                    caption={`Image placeholder`}
                    ratio="4/3"
                    className="group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1.5 rounded-full bg-[#CC1822]/10 border border-[#CC1822]/30 group-hover:bg-[#CC1822] transition-colors">
                    <Icon
                      className="w-3.5 h-3.5 text-[#E5303B] group-hover:text-white transition-colors"
                      strokeWidth={1.8}
                    />
                  </span>
                  <h3 className="font-serif font-semibold text-xl transition-colors group-hover:text-[#CC1822]">
                    {title}
                  </h3>
                </div>

                <p className="text-[15px] text-[#111111]/70">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   5. CTA FINALE
   ───────────────────────────────────────────── */
const AboutCTA = () => {
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
          <Quote className="w-10 h-10 text-[#E5303B] mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-4">
            WORK WITH CHEF SIMO
          </h2>
          <p className="font-serif italic text-xl text-[#F7F3EC]/70 mb-8">
            For brands, events, media and culinary projects.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-[#111111] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#CC1822]/30"
          >
            Get in touch
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

/* ─────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────── */
const About = () => {
  return (
    <>
      <AboutHero />
      <WhoIsChefSimo />
      <ProfessionalJourney />
      <RolesAchievements />
      <AboutCTA />
    </>
  );
};

export default About;
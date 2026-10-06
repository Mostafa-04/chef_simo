// src/components/Footer.jsx
import React from "react";
import {
  Mail,
  ChefHat,
  ArrowUp,
  MapPin,
  Phone,
} from "lucide-react";
import { FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/chef_simo_officiel",
      label: "Instagram",
    },
    {
      icon: FaYoutube,
      href: "#",
      label: "YouTube",
    },
    {
      icon: FaFacebook,
      href: "#",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { label: "Accueil", href: "#home" },
    { label: "À propos", href: "#about" },
    { label: "Expériences", href: "#experiences" },
    { label: "Galerie", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#111111] text-[#F7F3EC] overflow-hidden">
      {/* Decorative pattern background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.6'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CC1822] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-8">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-5">
              <span className="p-2.5 rounded-full border border-[#CC1822]/60 bg-[#CC1822]/10">
                <ChefHat className="w-6 h-6 text-[#E5303B]" strokeWidth={1.5} />
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl tracking-[0.14em] font-semibold">
                CHEF SIMO
              </h2>
            </div>

            <p className="font-serif italic text-[#E5303B] text-lg sm:text-xl mb-4">
              Chef · Culinary Expert · Food Ambassador
            </p>

            <p className="text-sm leading-relaxed text-[#F7F3EC]/70 max-w-md mb-6">
              Une signature culinaire marocaine où tradition, excellence et
              créativité se rencontrent. Disponible pour collaborations,
              événements et projets gastronomiques.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-3 rounded-full border border-[#F7F3EC]/15 hover:border-[#CC1822] hover:bg-[#CC1822] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#CC1822]/30"
                >
                  <Icon
                    className="w-5 h-5 text-[#F7F3EC]/80 group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h3 className="font-serif text-xl mb-5 tracking-wide relative inline-block">
              Navigation
              <span className="block h-[2px] w-12 bg-[#CC1822] mt-2 mx-auto md:mx-0" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-[#F7F3EC]/70 hover:text-[#E5303B] transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#E5303B] transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 text-center md:text-left">
            <h3 className="font-serif text-xl mb-5 tracking-wide relative inline-block">
              Contact
              <span className="block h-[2px] w-12 bg-[#CC1822] mt-2 mx-auto md:mx-0" />
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:simomasterchefmaroc2018@gmail.com"
                  className="group flex items-center gap-3 justify-center md:justify-start text-sm text-[#F7F3EC]/70 hover:text-[#E5303B] transition-colors"
                >
                  <span className="p-2 rounded-full bg-[#CC1822]/10 border border-[#CC1822]/30 group-hover:bg-[#CC1822] transition-colors">
                    <Mail
                      className="w-4 h-4 text-[#E5303B] group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className="break-all">
                    simomasterchefmaroc2018@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+212600000000"
                  className="group flex items-center gap-3 justify-center md:justify-start text-sm text-[#F7F3EC]/70 hover:text-[#E5303B] transition-colors"
                >
                  <span className="p-2 rounded-full bg-[#CC1822]/10 border border-[#CC1822]/30 group-hover:bg-[#CC1822] transition-colors">
                    <Phone
                      className="w-4 h-4 text-[#E5303B] group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </span>
                  +212 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start text-sm text-[#F7F3EC]/70">
                <span className="p-2 rounded-full bg-[#CC1822]/10 border border-[#CC1822]/30">
                  <MapPin
                    className="w-4 h-4 text-[#E5303B]"
                    strokeWidth={1.5}
                  />
                </span>
                Maroc
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-[#F7F3EC]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F7F3EC]/50 text-center sm:text-left">
            © {currentYear} Chef Simo. Tous droits réservés.
          </p>

          <p className="text-[11px] text-[#F7F3EC]/35 italic text-center">
            Front-end prototype for approval. Not the final site.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="group flex items-center gap-2 text-xs tracking-widest text-[#F7F3EC]/60 hover:text-[#E5303B] transition-colors"
          >
            HAUT
            <span className="p-1.5 rounded-full border border-[#F7F3EC]/20 group-hover:border-[#CC1822] group-hover:bg-[#CC1822] transition-all duration-300 group-hover:-translate-y-0.5">
              <ArrowUp
                className="w-3.5 h-3.5 group-hover:text-white transition-colors"
                strokeWidth={2}
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
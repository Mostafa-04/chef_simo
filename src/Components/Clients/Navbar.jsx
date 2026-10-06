// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChefHat } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Expertise", to: "/expertise" },
  { label: "Morocco on a Plate", to: "/morocco" },
  { label: "Projects", to: "/projects" },
  { label: "Media", to: "/media" },
  { label: "Work with Simo", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Ferme le menu mobile à chaque changement de route
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Détecte le scroll → fond sombre + shrink
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll du body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Ferme avec la touche Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Classes partagées pour les liens desktop
  const desktopLinkClasses = ({ isActive }) =>
    `relative text-[13px] tracking-wide transition-colors duration-300 group ${
      isActive ? "text-[#F7F3EC]" : "text-[#F7F3EC]/75 hover:text-[#F7F3EC]"
    }`;

  const desktopUnderlineClasses = ({ isActive }) =>
    `absolute left-0 -bottom-1.5 h-[1px] bg-[#E5303B] transition-all duration-300 ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`;

  return (
    <>

      <header
        className={`fixed top-0 inset-x-0 z-[60] transition-all duration-500
          ${
            scrolled
              ? "bg-[#111111]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.35)] py-2"
              : "bg-transparent py-4"
          }`}
      >
      
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* ── Logo ── */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-[#F7F3EC] "
          >
            <span className="p-1.5 rounded-full border border-[#CC1822]/50 bg-[#CC1822]/10 transition-colors group-hover:bg-[#CC1822] group-hover:border-[#CC1822]">
              <ChefHat
                className="w-5 h-5 text-[#E5303B] group-hover:text-white transition-colors"
                strokeWidth={1.5}
              />
            </span>
            <span className="font-serif text-xl sm:text-2xl tracking-[0.14em] font-semibold">
              CHEF SIMO
            </span>
          </Link>

          {/* ── Navigation desktop ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ label, to }) => (
              <NavLink key={to} to={to} end={to === "/"} className={desktopLinkClasses}>
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1.5 h-[1px] bg-[#E5303B] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ── CTA desktop ── */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border border-[#CC1822] bg-[#CC1822] text-white text-[12px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-[#111111] hover:border-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#CC1822]/30"
          >
            Book Chef
          </Link>

          {/* ── Burger mobile ── */}
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative z-[80] p-2 text-[#F7F3EC] hover:text-[#E5303B] transition-colors"
          >
            {open ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* ── Menu mobile ── */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-500
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Panneau latéral */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#111111] border-l border-[#CC1822]/30
            transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Motif décoratif */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.6'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative h-full flex flex-col pt-24 px-8 pb-8 overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ label, to }, i) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  style={{
                    transitionDelay: open ? `${i * 60 + 100}ms` : "0ms",
                  }}
                  className={({ isActive }) =>
                    `group flex items-center justify-between py-3.5 border-b border-[#F7F3EC]/10
                     text-[15px] tracking-wide transition-all duration-500
                     ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
                     ${
                       isActive
                         ? "text-[#E5303B]"
                         : "text-[#F7F3EC]/80 hover:text-[#E5303B]"
                     }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{label}</span>
                      <span
                        className={`h-[1px] bg-[#E5303B] transition-all duration-300 ${
                          isActive ? "w-6" : "w-0 group-hover:w-6"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA mobile */}
            <Link
              to="/"
              className="mt-8 inline-flex justify-center items-center px-6 py-3.5 bg-[#CC1822] text-white text-[12px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-[#111111]"
            >
              Work with Simo
            </Link>

            {/* Infos bas de menu */}
            <div className="mt-auto pt-8 text-[11px] text-[#F7F3EC]/40">
              <p className="font-serif italic text-[#E5303B] mb-2 text-sm">
                Chef · Culinary Expert
              </p>
              <p>© {new Date().getFullYear()} Chef Simo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
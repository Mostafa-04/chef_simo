// src/sections/MoroccoOnAPlate.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Reveal from "../../Reveal";
import ImagePlaceholder from "../../ImagePlaceholder";

const cities = [
  { name: "Marrakech", caption: "Marrakech", src: "/marrakech.jpg", alt: "Marrakech cityscape" },
  { name: "Fès", caption: "Fès", src: "/Fés.jpg", alt: "Fès cityscape" },
  { name: "Casablanca", caption: "Casablanca", src: "/Casablanca.jpg", alt: "Casablanca cityscape" },
  { name: "Tangier", caption: "Tangier", src: "/tanger.jpg", alt: "Tangier cityscape" },
  { name: "Agadir", caption: "Agadir", src: "/agadir.jpg", alt: "Agadir cityscape" },
];

const MoroccoOnAPlate = () => {
  return (
    <section
      className="relative py-20 sm:py-28 lg:py-36 bg-[#111111] text-[#F7F3EC] overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(204,24,34,0.15),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-14">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            MOROCCO ON A PLATE
          </h2>
          <p className="font-serif italic text-xl text-[#F7F3EC]/70">
            Discover Morocco through its flavours, ingredients and stories.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {cities.map(({ name, caption, src, alt }, i) => (
            <Reveal key={name} delay={i * 80}>
              <Link
                to="/morocco"
                className="group relative block overflow-hidden"
              >
                <ImagePlaceholder
                  caption={caption}
                    src={src}
                    alt={alt}
                  ratio="3/4"
                  className="group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* City name */}
                <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                  <MapPin
                    className="w-4 h-4 text-[#E5303B]"
                    strokeWidth={2}
                  />
                  <span className="font-serif font-semibold text-xl sm:text-2xl text-white">
                    {name}
                  </span>
                </div>

                {/* Hover border */}
                <span className="absolute inset-0 border border-transparent group-hover:border-[#CC1822] transition-colors duration-300 pointer-events-none" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoroccoOnAPlate;
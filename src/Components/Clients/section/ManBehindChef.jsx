// src/sections/ManBehindChef.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import Reveal from "../../Reveal";
import ImagePlaceholder from "../../ImagePlaceholder";

const ManBehindChef = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F7F3EC] text-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-14">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            THE MAN BEHIND THE CHEF
          </h2>
          <p className="font-serif italic text-xl opacity-80">
            Personality, passion and a Moroccan story.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          <Reveal>
            <ImagePlaceholder
                src="/chef_simo3.png"
              caption="Portrait placeholder"
              ratio="3/4"
              arched
              className="max-w-md mx-auto lg:mx-0 hover:scale-[1.02]"
            />
          </Reveal>

          <Reveal delay={150}>
            <Quote
              className="w-10 h-10 text-[#E5303B] mb-6"
              strokeWidth={1.5}
            />
            <p className="text-[#111111]/75 mb-8 max-w-xl leading-relaxed">
              Placeholder text: this space tells Chef Simo's story in his own
              words his personality, his passion, his experience and his
              Moroccan identity. Content to be supplied by Chef Simo.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#111111] hover:-translate-y-1 hover:shadow-xl"
            >
              Read his story
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

export default ManBehindChef;
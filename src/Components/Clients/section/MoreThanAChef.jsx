// src/sections/MoreThanAChef.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../../Reveal";
import ImagePlaceholder from "../../ImagePlaceholder";

const MoreThanAChef = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F7F3EC] text-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          <Reveal>
            <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-6">
              MORE THAN A CHEF
            </h2>
            <p className="text-[#111111]/75 mb-8 max-w-xl">
              Chef Simo brings together culinary expertise, Moroccan
              gastronomy, media presence, creativity and professional
              experience. He is a chef, a voice for Moroccan food culture, and
              a partner for brands and projects.
            </p>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#111111] hover:-translate-y-1 hover:shadow-xl"
            >
              See his expertise
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <ImagePlaceholder
                src="/chef_simo2.png"
                alt="Chef Simo in action"
              caption="Editorial image"
              ratio="3/4"
              className="hover:scale-[1.02]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default MoreThanAChef;
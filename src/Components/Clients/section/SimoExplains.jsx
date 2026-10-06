// src/sections/SimoExplains.jsx
import React from "react";
import { Utensils, Lightbulb, Leaf, BookOpen } from "lucide-react";
import Reveal from "../../Reveal";
import ImagePlaceholder from "../../ImagePlaceholder";

const cards = [
  {
    icon: Utensils,
    title: "Culinary Techniques",
    text: "Methods explained step by step.",
    caption: "Techniques",
    src: "/Culinary_Techniques.jpg",
    alt: "Culinary techniques illustration"
  },
  {
    icon: Lightbulb,
    title: "Chef Tips",
    text: "Practical advice from the kitchen.",
    caption: "Tips",
    src: "/Chef_Tips.jpeg",
    alt: "Chef tips illustration"
  },
  {
    icon: Leaf,
    title: "Ingredients",
    text: "What to choose, and why it matters.",
    caption: "Ingredients",
    src: "/Ingredients.jpg",
    alt: "Ingredients illustration"
  },
  {
    icon: BookOpen,
    title: "Food Knowledge",
    text: "The stories and science behind food.",
    caption: "Knowledge",
    src: "/Food_Knowledge.jpg",
    alt: "Food knowledge illustration"
  },
];

const SimoExplains = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#EFE8DC] text-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <Reveal className="mb-14">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            SIMO EXPLAINS
          </h2>
          <p className="font-serif italic text-xl opacity-80">
            Knowledge, technique and passion behind every dish.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {cards.map(({ icon: Icon, title, text, caption }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="group cursor-pointer">
                <div className="mb-3 overflow-hidden">
                  <ImagePlaceholder
                    src={cards[i].src}
                    alt={cards[i].alt}
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
                  <h3 className="font-serif font-semibold text-2xl transition-colors group-hover:text-[#CC1822]">
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

export default SimoExplains;
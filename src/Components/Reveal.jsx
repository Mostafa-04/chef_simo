// src/components/Reveal.jsx
import React from "react";
import { useReveal } from "../hooks/useReveal";

const Reveal = ({ children, delay = 0, className = "" }) => {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
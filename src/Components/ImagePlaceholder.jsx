// src/components/ImagePlaceholder.jsx
import React from "react";

const ImagePlaceholder = ({
  src,                              // ← nouveau : chemin de l'image
  alt = "",
  caption = "Image placeholder",
  ratio = "4/3",
  arched = false,
  className = "",
  imgClassName = "object-cover",
  position = "center",              // ← object-position (ex: "top", "center", "50% 20%")
}) => {
  const hasImage = Boolean(src);

  return (
    <figure
      style={{ aspectRatio: ratio }}
      className={`relative overflow-hidden bg-gradient-to-br from-[#3a1c1f] to-[#141414]
        transition-transform duration-700
        ${
          arched
            ? "rounded-t-full border-2 border-[#E5303B] outline outline-1 outline-offset-8 outline-[#E5303B]"
            : ""
        }
        ${className}`}
    >
      {hasImage ? (
        // ── Vraie image ──
        <img
          src={src}
          alt={alt || caption}
          loading="lazy"
          style={{ objectPosition: position }}
          className={`absolute inset-0 w-full h-full ${imgClassName}`}
        />
      ) : (
        // ── Placeholder décoratif ──
        <>
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.6'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(229,48,59,0.18),transparent_60%)]" />
          <figcaption className="absolute bottom-0 left-0 z-10 text-[12px] text-white/60 px-4 py-3">
            {caption}
          </figcaption>
        </>
      )}
    </figure>
  );
};

export default ImagePlaceholder;
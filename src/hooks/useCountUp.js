// src/hooks/useCountUp.js
import { useEffect, useRef, useState } from "react";

/**
 * Anime un nombre de 0 → end quand l'élément devient visible.
 * @param {number} end       - Valeur finale
 * @param {number} duration  - Durée en ms
 * @param {number} decimals  - Nombre de décimales à afficher
 */
export const useCountUp = (end, duration = 2000, decimals = 0) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  // Démarre quand l'élément entre dans le viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Animation d'incrémentation
  useEffect(() => {
    if (!started) return;

    let raf;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return {
    ref,
    display: value.toLocaleString("fr-FR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }),
  };
};
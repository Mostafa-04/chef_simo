// src/components/StatItem.jsx
import React from "react";
import { useCountUp } from "../hooks/useCountUp";

const StatItem = ({ value, label, suffix = "", decimals = 0, duration = 2000 }) => {
  const { ref, display } = useCountUp(value, duration, decimals);

  return (
    <li ref={ref} className="text-center sm:text-left">
      <b className="block font-serif font-semibold text-4xl sm:text-5xl text-[#E5303B] tabular-nums">
        {display}
        {suffix}
      </b>
      <span className="text-sm text-[#F7F3EC]/70">{label}</span>
    </li>
  );
};

export default StatItem;
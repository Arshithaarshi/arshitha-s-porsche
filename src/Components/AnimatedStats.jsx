import React, { useEffect, useRef, useState } from "react";
import "./AnimatedStats.css";

const statsData = [
  { value: 140, label: "MPH TOP SPEED (FASTEST IN CUV SEGMENT)" },
  { value: 268, label: "MAXIMUM HORSEPOWER" },
  { value: 295, label: "MAXIMUM LB-FT OF TORQUE" }
];

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedStats({ duration = 1400 }) {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [angles, setAngles] = useState(statsData.map(() => 0));
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    startRef.current = null;

    function step(timestamp) {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);

      const nextCounts = statsData.map((s) => Math.round(s.value * eased));
      const nextAngles = statsData.map((s) => 360 * eased);

      setCounts(nextCounts);
      setAngles(nextAngles);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // make sure final values are exact
        setCounts(statsData.map((s) => s.value));
        setAngles(statsData.map(() => 360));
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [duration]);

  return (
    <div className="stats-wrapper">
      {statsData.map((s, i) => (
        <div
          key={i}
          className={`stat-card ${i === 2 ? "stat-card--wide" : ""}`}
        >
          <div
            className="ring"
            style={{
              background: `conic-gradient(var(--ring-color) ${angles[i]}deg, rgba(255,255,255,0.06) ${angles[i]}deg)`
            }}
          >
            <div className="ring-inner">
              <span className="count">{counts[i]}</span>
            </div>
          </div>

          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}


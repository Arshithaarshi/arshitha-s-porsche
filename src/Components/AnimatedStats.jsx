import React, { useEffect, useRef, useState } from "react";
import "./AnimatedStats.css";

const statsData = [
  { value: 140, label: "MPH TOP SPEED (FASTEST IN CUV SEGMENT)" },
  { value: 268, label: "MAXIMUM HORSEPOWER" },
  { value: 295, label: "MAXIMUM LB-FT OF TORQUE" },      // ➕ Added
  { value: 3.9, label: "SECONDS 0–60 MPH" }               // ➕ Added
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

      const nextCounts = statsData.map((s) =>
        typeof s.value === "number" && s.value % 1 !== 0
          ? Math.round(s.value * eased * 10) / 10
          : Math.round(s.value * eased)
      );

      const nextAngles = statsData.map(() => 360 * eased);

      setCounts(nextCounts);
      setAngles(nextAngles);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
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
      {statsData.map((s, i) => {
        const wideClass = i === 2 ? "stat-card--wide" : "";
        return (
          <div key={i} className={`stat-card ${wideClass}`}>
            <div className="ring-outer">
              <div
                className="ring"
                style={{
                  background: `conic-gradient(
                    rgba(213,0,28,1) ${angles[i]}deg,
                    rgba(213,0,28,0.15) ${angles[i]}deg 380deg,
                    rgba(255,255,255,0.06) 380deg
                  )`
                }}
              >
                <div className="ring-inner">
                  <span className="count">{counts[i]}</span>
                </div>
              </div>
            </div>

            <div className="stat-label">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}




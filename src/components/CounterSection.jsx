"use client";
import { Award, ShieldCheck, SmilePlus, Users } from "lucide-react";
import React, { useState, useEffect } from "react";

const Counter = ({ end, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="counter-item has__flex flex__column items__center justify__center has__gap">
      <div className="counter-icon">{icon}</div>
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section className="counter-section is__section">
      <div className="counter-container container has__flex items__center justify__center has__gap">
        <Counter end={986} label="Finished Projects" icon={<ShieldCheck />} />
        <Counter end={896} label="Happy Clients" icon={<SmilePlus />} />
        <Counter end={396} label="Skilled Experts" icon={<Users />} />
        <Counter end={496} label="Honorable Awards" icon={<Award />} />
      </div>
    </section>
  );
};

export default CounterSection;

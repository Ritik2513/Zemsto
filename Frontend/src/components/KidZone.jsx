import React from "react";
import KidImage from "../assets/KidZone/kid.jpg"

const KidZone = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Kids Zone: Zemsto <br /> Books of Records
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
            Every child is a champion. We're building a digital arena where kids
            can showcase talents, win trophies, and enter the official Zemsto
            Book of Records.
          </p>

          {/* FEATURES */}
          <div className="flex gap-10 mt-10 flex-wrap">
            <Feature icon="🏆" title="MEDALS" />
            <Feature icon="🎖️" title="BADGES" />
            <Feature icon="🌍" title="GLOBAL RANK" />
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 backdrop-blur-xl p-3">
            <img
              src={KidImage}
              alt="Kids Winners"
              className="rounded-2xl w-full max-w-md object-cover"
            />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-emerald-400/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title }) => (
  <div className="flex flex-col items-center text-center group cursor-pointer">
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-2xl group-hover:scale-110 transition">
      {icon}
    </div>
    <p className="mt-3 text-sm tracking-widest text-gray-300">{title}</p>
  </div>
);

export default KidZone;

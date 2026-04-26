import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Gift } from "lucide-react";

import CashbackCard from "../assets/Hero/cashback-card.png";
import FloatingCoins from "../assets/Hero/floating-coins.png";
import HappyFamily from "../assets/Hero/happy-family.png";
import HealthCard from "../assets/Hero/health-card.png";
import Phone from "../assets/Hero/phone-mockup.png";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-badge", {
        y: -20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title span",
          { y: 80, opacity: 0, stagger: 0.12, duration: 0.8 },
          "-=0.2"
        )
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-right", { x: 80, opacity: 0, duration: 1 }, "-=0.8");

      // Floating animation (infinite smooth motion)
      gsap.utils.toArray(".floating-card").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -18 : 18,
          duration: 2.5 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="pt-36 pb-20 overflow-hidden px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            India's First School Fee Rewards Platform
          </div>

          {/* TITLE */}
          <h1 className="hero-title text-5xl md:text-6xl font-bold leading-tight text-[#0B3C5D]">
            <span className="text-black px-2">Don't Just Pay</span>
            <br />
            <span className="text-black px-2">School Fees.</span>
            <br />
            <span className="text-black px-2">Get Value Back.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-sub text-lg text-gray-600 mt-6 max-w-xl">
            India's first platform that transforms school fee payments into
            cashback, rewards, and real financial benefits for families.
          </p>

          {/* CTA */}
          <div className="hero-cta flex gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0B3C5D] text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 px-6 py-3 rounded-xl font-semibold text-gray-700"
            >
              View Plans
            </motion.button>
          </div>

          {/* TRUST ROW */}
          <div className="flex flex-wrap gap-6 mt-10 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-green-500" />
              Secure payments
            </div>
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-green-500" />
              Instant transfer
            </div>
            <div className="flex items-center gap-2">
              <Gift size={18} className="text-green-500" />
              Real rewards
            </div>
          </div>

          {/* 🔥 TOTAL IMPACT CARD (NEW SECTION) */}
          <div className="mt-8 bg-white shadow-lg rounded-2xl p-4 flex items-center gap-4 w-fit">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/40?img=1"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                className="w-8 h-8 rounded-full border"
              />
            </div>

            <div>
              <p className="text-xs text-gray-500 font-medium">
                TOTAL IMPACT
              </p>
              <p className="text-lg font-bold text-[#0B3C5D]">
                ₹12,48,32,000 <span className="text-green-600 text-sm">saved</span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right relative hidden md:block">
          {/* Phone */}
          <img
            src={Phone}
            alt="app"
            className="w-[470px] ml-auto drop-shadow-2xl relative z-10"
          />

          {/* Floating Elements */}
          <div className="floating-card absolute top-10 left-10 p-3">
            <img src={CashbackCard} className="w-48" />
          </div>

          <div className="floating-card absolute bottom-10 left-0 p-3">
            <img src={HealthCard} className="w-48" />
          </div>

          <div className="floating-card absolute top-0 right-0 p-3">
            <img src={FloatingCoins} className="w-48" />
          </div>

          <div className="floating-card absolute bottom-32 right-0 bg-white p-4 rounded-2xl shadow-xl z-50">
            <p className="text-xs text-gray-500">Cashback Earned</p>
            <p className="text-xl font-bold text-green-600">₹2,450</p>
          </div>

          <div className="floating-card absolute bottom-0 right-10 p-2 z-50">
            <img src={HappyFamily} className="w-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
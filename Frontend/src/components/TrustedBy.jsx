import React from "react";
import { motion } from "framer-motion";

const TrustedBy = () => {
  return (
    <section className="bg-[#F4F7FB] py-28 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.08)] py-24 px-8 relative overflow-hidden">
        {/* LEFT CLUSTER */}
        <FloatingImg
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
          className="top-[8%] left-[6%] w-24 h-24"
          delay={0}
        />
        <FloatingImg
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
          className="top-[30%] left-[3%] w-20 h-20"
          delay={0.1}
        />
        <FloatingImg
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200"
          className="top-[55%] left-[8%] w-28 h-28"
          delay={0.2}
        />
        <FloatingImg
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200"
          className="top-[18%] left-[18%] w-20 h-20"
          delay={0.3}
        />
        <FloatingImg
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200"
          className="top-[48%] left-[18%] w-24 h-24"
          delay={0.4}
        />

        {/* RIGHT CLUSTER */}
        <FloatingImg
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200"
          className="top-[10%] right-[8%] w-28 h-28"
          delay={0.2}
        />
        <FloatingImg
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200"
          className="top-[40%] right-[6%] w-20 h-20"
          delay={0.3}
        />
        <FloatingImg
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200"
          className="top-[65%] right-[10%] w-24 h-24"
          delay={0.4}
        />
        <FloatingImg
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200"
          className="top-[25%] right-[22%] w-20 h-20"
          delay={0.5}
        />
        <FloatingImg
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200"
          className="top-[55%] right-[19%] w-28 h-28"
          delay={0.6}
        />

        {/* CENTER CONTENT */}
        <div className="relative z-10 text-center max-w-xl mx-auto">
          <div className="inline-block px-5 py-2 rounded-full bg-gray-100 text-sm font-semibold mb-6">
            Testimonials
          </div>

          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Trusted by Families
          </h2>
          <h3 className="text-5xl font-bold text-gray-400">
            and Leading Schools Across India
          </h3>

          <p className="text-gray-500 mt-6 text-lg">
           Thousands of parents use Zemsto to pay school fees smarter, unlock
  real rewards, and enjoy benefits like healthcare savings, education
  financing, and exclusive family perks — all from one simple platform.
          </p>

          <button className="mt-10 bg-black text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Read Success Stories →
          </button>
        </div>
      </div>
    </section>
  );
};

const FloatingImg = ({ src, className, delay }) => (
  <motion.img
    src={src}
    className={`absolute rounded-2xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.15)] ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    animate={{ y: [0, -8, 0] }}
    transition={{
      opacity: { duration: 0.6, delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    }}
  />
);

export default TrustedBy;

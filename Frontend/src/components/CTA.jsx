import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className=" py-32 px-6 text-center relative overflow-hidden font-poppins">
      {/* glow blobs */}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* small badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block mb-8 px-6 py-2 rounded-full border border-[#2ECC71]/40 text-[#2ECC71] text-sm font-semibold tracking-wider"
        >
          JOIN 120,000+ FAMILIES
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-black leading-tight"
        >
          The Future of <br />
          Education is <span className="text-[#2ECC71]">Rewarding.</span>
        </motion.h2>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
        >
          {/* primary */}
          <button className="px-10 py-4 rounded-full text-lg font-semibold accent text-white shadow-xl hover:scale-105 transition cursor-pointer">
            Get Started for Free
          </button>

          {/* secondary */}
          <button className="px-10 py-4 rounded-full text-lg font-semibold bg-white/10 text-black backdrop-blur-md border border-black/20 hover:bg-black/20 transition cursor-pointer">
            Talk to an Agent
          </button>
        </motion.div>

        {/* footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 mt-10 text-sm"
        >
          No hidden fees. Just smarter school payments and real rewards.
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;

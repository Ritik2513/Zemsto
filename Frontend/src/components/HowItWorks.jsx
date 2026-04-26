import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wallet, IndianRupee, Gift } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "1",
    title: "Choose Your Plan",
    text: "Select a subscription plan that fits your needs. Monthly, quarterly, or annual options available.",
    alignment: "-mt-10", // Positioned lower
  },
  {
    id: "2",
    title: "Pay School Fees",
    text: "Link your school and pay fees securely through our platform. Instant confirmation to school.",
    alignment: "mt-60", // Positioned higher (at the peak)
  },
  {
    id: "3",
    title: "Unlock Benefits",
    text: "Get instant access to cashback, healthcare, loans, coupons, job listings, and more rewards.",
    alignment: "mt-14", // Positioned middle-low
  },
];

const HowItWorks = () => {
  const sectionRef = useRef();
  const pathRef = useRef();

  useEffect(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set up path for animation
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-32 overflow-hidden font-poppins"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-32 space-y-2">
          <h2 className="text-5xl font-bold text-[#0f172a]">How It Works</h2>
          <p className="text-gray-500 text-base ">
            Three simple steps to transform your school fee payments into
            valuable family benefits
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="relative hidden md:block min-h-[400px]">
          {/* Animated Wave Path */}
          <svg
            viewBox="0 0 1200 300"
            fill="none"
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M0,220 C150,220 300,50 450,50 C700,50 800,280 900,280 C1050,280 1200,150 1300,150"
              stroke="#4F7CA4"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {/* Steps Container */}
          <div className="relative flex justify-between items-start">
            {steps.map((step, i) => {
              return (
                <div
                  key={step.id}
                  className={`w-1/4 relative z-10 ${step.alignment}`}
                >
                  <div className="relative mb-10">
                    {/* Big Faded Number */}
                    <span className="absolute -top-4 right-12 text-[150px] font-bold text-gray-100/80 leading-none select-none -z-10">
                      {step.id}
                    </span>

                    {/* Hexagon Icon Container */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.3 }}
                      className="w-16 h-16 bg-white shadow-[0_10px_25px_-5px_rgba(59,130,246,0.3)] flex items-center justify-center"
                      style={{
                        clipPath:
                          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                      }}
                    ></motion.div>
                  </div>

                  {/* Content */}
                  <div className="pr-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View (Simple Stack) */}
        <div className="md:hidden space-y-16">
          {steps.map((step) => (
            <div key={step.id} className="flex gap-6">
              <div className="text-4xl font-bold text-gray-200">{step.id}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

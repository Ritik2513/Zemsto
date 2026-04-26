import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { GraduationCap, CreditCard, Wallet } from "lucide-react";
import { gsap } from "gsap";

const messages = [
  "Finding best courses...",
  "Unlocking exclusive rewards...",
  "Preparing your cashback...",
  "Almost ready...",
];

const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const [msgIndex, setMsgIndex] = useState(0);

  // GSAP refs
  const courseRef = useRef(null);
  const cardRef = useRef(null);
  const walletRef = useRef(null);
  const arrow1 = useRef(null);
  const arrow2 = useRef(null);
  const coinsRef = useRef([]);

  // Text + progress logic
  useEffect(() => {
    const msgTimer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 1600);

    let fake = 0;
    const timer = setInterval(() => {
      fake += Math.random() * 8;
      setProgress((prev) => Math.min(Math.max(prev, fake), 95));
    }, 200);

    window.addEventListener("load", () => {
      setTimeout(() => {
        setProgress(100);
        triggerCoinBurst();
        setTimeout(() => {
          setShow(false);
          setTimeout(onComplete, 600);
        }, 900);
      }, 800);
    });

    return () => {
      clearInterval(timer);
      clearInterval(msgTimer);
    };
  }, [onComplete]);

  // 🎬 Cinematic GSAP timeline
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

    tl.from(courseRef.current, {
      scale: 0,
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    })
      .from(arrow1.current, { x: -30, opacity: 0, duration: 0.4 })
      .to(courseRef.current, {
        x: 120,
        duration: 0.7,
        ease: "power2.inOut",
      })
      .from(cardRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      }, "-=0.3")
      .from(arrow2.current, { x: -30, opacity: 0, duration: 0.4 })
      .to(cardRef.current, {
        x: 120,
        duration: 0.7,
        ease: "power2.inOut",
      })
      .from(walletRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.3")
      .to(walletRef.current, {
        keyframes: { scale: [1, 1.2, 1] },
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
  }, []);

  // 💰 Coin burst animation
  const triggerCoinBurst = () => {
    coinsRef.current.forEach((coin, i) => {
      gsap.fromTo(
        coin,
        { opacity: 1, scale: 0, x: 0, y: 0 },
        {
          opacity: 0,
          scale: 1.4,
          x: gsap.utils.random(-120, 120),
          y: gsap.utils.random(-140, -60),
          duration: 1.2,
          delay: i * 0.05,
          ease: "power3.out",
        }
      );
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow background */}
          <div className="absolute w-[600px] h-[600px] bg-[#2ECC71]/10 rounded-full blur-[120px] -top-40 -left-40" />
          <div className="absolute w-[500px] h-[500px] bg-[#F39C12]/10 rounded-full blur-[120px] -bottom-40 -right-40" />

          {/* Journey animation */}
          <div className="flex items-center gap-16 mb-14 z-10 relative">
            <IconCard refEl={courseRef} Icon={GraduationCap} />
            <Arrow refEl={arrow1} />
            <IconCard refEl={cardRef} Icon={CreditCard} />
            <Arrow refEl={arrow2} />
            <IconCard refEl={walletRef} Icon={Wallet} />

            {/* Coins */}
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                ref={(el) => (coinsRef.current[i] = el)}
                className="absolute text-[#F39C12] text-xl opacity-0"
              >
                ₹
              </div>
            ))}
          </div>

          <h1 className="text-5xl font-bold text-[#0B3C5D] mb-3 z-10">
            Zemsto
          </h1>

          <motion.p
            key={msgIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#0B3C5D]/70 mb-10 z-10"
          >
            {messages[msgIndex]}
          </motion.p>

          {/* Progress */}
          <div className="w-72 h-2 bg-gray-200 rounded-full overflow-hidden z-10">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2ECC71] to-[#F39C12]"
              animate={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-xs text-[#0B3C5D]/50 mt-3">
            {Math.round(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const IconCard = ({ Icon, refEl }) => (
  <div
    ref={refEl}
    className="w-[72px] h-[72px] rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center"
  >
    <Icon size={30} color="#0B3C5D" />
  </div>
);

const Arrow = ({ refEl }) => (
  <div ref={refEl} className="text-[#F39C12] text-3xl font-bold">
    →
  </div>
);

export default PageLoader;
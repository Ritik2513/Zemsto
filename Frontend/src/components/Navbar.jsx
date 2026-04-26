import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  "How it Works",
  "Benefits",
  "Plans",
  "For Schools",
  "Kids Zone",
];

const Navbar = () => {
  const navRef = useRef();
  const mobileMenuRef = useRef();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Navbar entrance animation
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // Scroll shrink effect
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 40);
    });
  }, []);

  // Mobile drawer animation
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
      );
    }
  }, [open]);

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <div className="w-full flex justify-center pt-4 px-4 fixed top-0 z-50 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm ">
        <div
          ref={navRef}
          className={`w-full max-w-7xl backdrop-blur-md bg-white/70 border border-white/40 rounded-2xl flex items-center justify-between px-4 md:px-6 transition-all duration-300
          ${scrolled ? "py-2 shadow-2xl scale-[0.98]" : "py-3 shadow-xl"}`}
        >
          {/* LOGO */}
          <motion.img
            src="/Logo/logo.png"
            alt="Zemsto"
            whileHover={{ rotate: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-10 w-auto cursor-pointer"
          />

          {/* DESKTOP MENU */}
          <div className="relative hidden md:flex items-center gap-2 bg-gray-100 p-1 rounded-xl shadow-inner">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onHoverStart={() => setActive(index)}
                onHoverEnd={() => setActive(null)}
                className="relative px-5 py-2 rounded-lg text-sm font-medium text-gray-700 z-10 flex items-center"
              >
                {active === index && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-lg shadow"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                <span className="relative z-20">{item}</span>

                {item === "Plans" && (
                  <span className="ml-2 text-xs secondary text-white px-2 py-0.5 rounded-full relative z-20">
                    Popular
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* CTA Desktop */}
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="hidden md:block accent text-white font-semibold px-5 py-2.5 rounded-xl shadow-md"
            >
              Contact Us
            </motion.button>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SIDE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* overlay */}
          <div
            className="w-full bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* drawer */}
          <div
            ref={mobileMenuRef}
            className="w-[80%] max-w-sm h-screen bg-white shadow-2xl p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <img src="/logo.png" className="h-9" />
              <X
                size={28}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className="text-lg font-medium text-gray-700 text-left"
                >
                  {item}
                </button>
              ))}

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="accent text-white py-3 rounded-xl mt-4 font-semibold shadow-md"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

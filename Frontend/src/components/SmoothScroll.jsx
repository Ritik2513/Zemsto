import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,          // scroll speed
      easing: (t) => 1 - Math.pow(1 - t, 4), // premium easeOutQuart
      smoothWheel: true,
      smoothTouch: false,     // keep touch natural for mobile
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
};

export default SmoothScroll;
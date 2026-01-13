import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../hooks/use-language";

const brands = [
  "Acme Corp", "GlobalTech", "Nebula", "FoxRun", "Circle", "Trekker",
  "Zenith", "Horizon", "Pinnacle", "Aether", "Quantum", "Nexus"
];

export function LogoCarousel() {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const startAnimation = () => {
    // We animate from the current x position to a far left position
    // The duration is calculated based on remaining distance to keep speed constant
    const currentX = x.get();
    const targetX = -2000;
    const distance = Math.abs(targetX - currentX);
    const baseDuration = 40; // Duration for full 2000px
    const duration = (distance / 2000) * baseDuration;

    controls.start({
      x: targetX,
      transition: {
        duration: duration > 0 ? duration : baseDuration,
        ease: "linear",
        onComplete: () => {
          x.set(0);
          startAnimation();
        }
      }
    });
  };

  useEffect(() => {
    if (!isPaused) {
      startAnimation();
    } else {
      controls.stop();
    }
  }, [isPaused]);

  return (
    <div className="w-full py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider">
          {t("trustedBrands")}
        </p>
      </div>
      
      <div 
        className="relative flex overflow-x-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          ref={containerRef}
          className="flex whitespace-nowrap"
          style={{ x }}
          animate={controls}
          drag="x"
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => {
            setIsPaused(false);
          }}
        >
          {/* Quadruple the list to ensure infinite feel during drag */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="mx-8 text-2xl font-display font-bold text-slate-300 hover:text-primary transition-colors select-none"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

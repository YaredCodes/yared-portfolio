"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-125 w-500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/2.5 blur-[120px] md:block"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}
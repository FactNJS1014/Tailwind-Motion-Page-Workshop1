"use client";
import { motion } from "framer-motion";

import Image from "next/image";

const MotionImage = motion(Image);

export default function HeroImageSection() {
  return (
    <div className="relative">
      <MotionImage
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
        src="/assets/black.png"
        alt="hero"
        width={500}
        height={500}
        className="img-shado relative z-40 h-[400px] md:h-[700px]"
      />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
        className="rounded-full w-[180px] h-[180px] border-20 border-amber-500  absolute top-24 -right-16
              z-10 "
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
        className="absolute -top-20 left-[250px] z-1"
      >
        <h1 className="text-[120px] scale-150 font-bold text-gray-950/40 leading-none">
          Coder your life
        </h1>
      </motion.div>
    </div>
  );
}

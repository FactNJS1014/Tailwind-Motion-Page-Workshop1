"use client";
import BgImage from "../../public/assets/bg-slate.png";
import HeroImageSection from "../HeroImageSection/HeroImageSection";
import TextContent from "../TextContent/TextContent";
import ThirdSection from "../ThirdSection/ThirdSection";
import Navbar from "../Navbar/Navbar";

import { motion } from "framer-motion";

export default function Hero() {
  const bgImage = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <motion.main
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
      style={bgImage}
    >
      <section className="min-h-[750px] w-full relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <TextContent />
            <HeroImageSection />
            <ThirdSection />
          </div>
        </div>
      </section>
    </motion.main>
  );
}

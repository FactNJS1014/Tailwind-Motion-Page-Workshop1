"use client";
import { motion } from "framer-motion";

export default function TextContent() {
  return (
    <div className="text-orange-200 mt-[100px] md-mt-0 p-4 space-y-28">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
        className="text-5xl font-bold leading-tight ml-14"
      >
        Frontend Cafe
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.6 }}
        className="relative"
      >
        <div className="relative z-10 space-y-4">
          <h1
            className="text-2xl text-orange-400 md:text-4xl
                  font-bold"
          >
            Code life Style Coders
          </h1>
          <h1 className="text-sm opacity-55 leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            numquam, atque earum nam officiis facere soluta porro repellendus
            temporibus libero sed provident sequi similique iste ducimus iure
            minus corrupti. Dignissimos?
          </h1>
        </div>
        <div className="absolute z-0 -top-6 -left-10 w-[270px] h-[200px] bg-gray-700/25">
          <div className="w-full h-full opacity-50"></div>
        </div>
      </motion.div>
    </div>
  );
}

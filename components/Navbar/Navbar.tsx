"use client";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <nav className="absolute top-0 left-0 w-full pt-10 text-white z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center px-10">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="text-2xl font-semibold uppercase tracking-wider"
            >
              <span className="text-orange-400">FactWeb.</span>
              Coder Cafe
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              onClick={() => setSidebar(!sidebar)}
            >
              <GiHamburgerMenu className="text-2xl cursor-pointer" />
            </motion.div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {sidebar && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-orange-200 to-orange-400
          backdrop-blur-sm z-10"
          >
            <div className="w-full h-full justify-center items-center">
              <div className="flex flex-col gap-6 items-center justify-center text-white h-full">
                <div className="w-[1px] h-[70px] bg-white"></div>

                <div className="inline-block p-2 rounded-full  cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>

                <div className="inline-block p-2 rounded-full  cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>

                <div className="inline-block p-2 rounded-full  cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

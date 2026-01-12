"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-r from-orange-400 to-orange-500 py-12 text-white"
      >
        <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CompanyDetails />
            <FooterLinks />
            <SocialMedia />
          </div>
        </div>
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright © 2025 Fact Cafe Coder. All rights reserved.
        </p>
      </motion.div>
    </>
  );
}

function CompanyDetails() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold uppercase tracking-wider">
          Fact Cafe Coder
        </h1>
        <p className="text-sm max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          distinctio adipisci suscipit officiis illum ipsum, nostrum animi culpa
          cupiditate exercitationem, tenetur ad illo! Voluptatem explicabo
          excepturi sapiente quasi cum error.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FaPhone />
            <p>+66 123456789</p>
          </div>
          <div className="flex items-center gap-2">
            <FaMapLocation />
            <p>123 Main St, Anytown, USA</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function FooterLinks() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold uppercase tracking-wider">
          Quick Links
        </h1>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function SocialMedia() {
  const creditCardImg = "/assets/creditCard.png";
  const scbImage = "/assets/scb.png";
  const kbankImage = "/assets/kbank.png";
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        <h1 className="text-3xl font-bold uppercase tracking-wider">
          Follow Us
        </h1>
        <div className="flex items-center gap-4">
          <FaFacebook className="text-3xl hover:scale-110 duration-300 cursor-pointer" />
          <FaInstagram className="text-3xl hover:scale-110 duration-300 cursor-pointer" />
          <FaGoogle className="text-3xl hover:scale-110 duration-300 cursor-pointer" />
          <FaTelegram className="text-3xl hover:scale-110 duration-300 cursor-pointer" />
        </div>
        <div className="space-y-2">
          <div>
            <p>Payment Methods</p>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={creditCardImg}
              alt="creditCard"
              width={60}
              height={60}
            />
            <Image src={scbImage} alt="scb" width={60} height={60} />
            <Image src={kbankImage} alt="kbank" width={60} height={60} />
          </div>
        </div>
      </motion.div>
    </>
  );
}

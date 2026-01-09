"use client";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-36">
        <div className="flex flex-col justify-center items-center gap-8 md:flex-row">
          <Form />
          <Gps />
        </div>
      </div>
    </>
  );
}

const Form = () => {
  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
        className="text-3xl font-bold text-gray-600"
      >
        Buy our product from anywhere
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
        className="flex items-center gap-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="input-style w-full lg:w-[150px]"
        />
        <input
          type="text"
          placeholder="Email"
          className="input-style w-full "
        />
      </motion.div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Country"
          className="input-style w-full "
        />
        <input
          type="text"
          placeholder="ZipCode"
          className="input-style w-full lg:w-[150px]"
        />
      </div>
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="primary-btn w-full shadow-xl"
      >
        Buy Now
      </motion.button>
    </div>
  );
};

const Gps = () => {
  const gpsMaps =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985877.0347861537!2d105.0041981!3d15.15383155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31142eb485e0fccd%3A0x3786785e8dd045c7!2z4Lit4Li44Lia4Lil4Lij4Liy4LiK4LiY4Liy4LiZ4Li1!5e0!3m2!1sth!2sth!4v1739964511442!5m2!1sth!2sth";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
      className=""
    >
      <iframe
        className="rounded-xl w-full sm:w-[300px] sm:h-[250px] overflow-hidden shadow-2xl mx-auto"
        src={gpsMaps}
        title="maps"
        width={600}
        height={350}
        style={{ border: 2, borderRadius: "0.5rem" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
};

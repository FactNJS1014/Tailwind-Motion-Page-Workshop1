"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Banner() {
  const bannerImage = "/assets/coffee-cover.jpg";
  const Appstore = "/assets/app_store.png";
  const GooglePlay = "/assets/play_store.png";
  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  const MotionImage = motion(Image);
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          style={bannerStyle}
          className="sm:min-h-[400px] flex items-center justify-center bg-center px-4 py-6 sm:px-8 sm:py-12 md:justify-end rounded-xl img-shadow2"
        >
          <div>
            <div className="max-w-xl mx-autospace-y-4 lg:space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3,
                }}
                className="text-xl sm:text-3xl font-semibold text-center text-black"
              >
                Download the app
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                className="text-center text-gray-600 sm:px-10 md:text-xl lg:text-lg"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, officiis autem sed numquam inventore velit earum vel
                quia consectetur ex mollitia? Natus saepe sunt dicta dolores
                consequatur enim, illum corporis.
              </motion.p>

              {/* section Img */}
              <div className="flex justify-center items-center gap-4">
                {/* logo app store */}
                <MotionImage
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.9,
                  }}
                  src={Appstore}
                  alt="Appstore"
                  width={200}
                  height={200}
                />
                {/* logo google play */}
                <MotionImage
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1,
                  }}
                  src={GooglePlay}
                  alt="GooglePlay"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

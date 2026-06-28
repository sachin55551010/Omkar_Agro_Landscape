"use client";
import { cormorant, merienda } from "../constants/custom_fonts";
import { motion } from "motion/react";
const AboutPage = () => {
  return (
    <main className="relative min-h-dvh w-dvw overflow-hidden bg-(--dark-green) flex flex-col items-center justify-center px-6 py-16">
      {/* Small Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 rounded-full border border-(--secondary-bg)/30 bg-(--secondary-bg)/10 px-5 py-2"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-(--secondary-bg)">
          Since 2012
        </p>
      </motion.div>

      {/* Heading */}
      <div
        className={`${cormorant.className} text-center text-4xl lg:text-6xl font-semibold leading-tight lg:w-[70%]`}
      >
        {"Growing Green Spaces with Passion & Purpose"
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className={`inline-block mr-3 ${
                index <= 3
                  ? "text-(--base-bg)"
                  : `text-(--secondary-bg) ${merienda.className}`
              }`}
            >
              {word}
            </motion.span>
          ))}
      </div>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="my-8 h-0.5 bg-(--secondary-bg)"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="max-w-3xl text-center text-(--base-bg)/85 text-lg leading-8"
      >
        Bringing nature closer to homes, gardens, resorts, hotels, and
        commercial landscapes with premium plants, handcrafted pots, and
        thoughtful landscaping solutions designed to create beautiful outdoor
        experiences.
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-14 flex flex-wrap justify-center gap-12"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-(--secondary-bg)">12+</h2>
          <p className="mt-1 text-sm uppercase tracking-widest text-(--base-bg)/70">
            Years Experience
          </p>
        </div>

        <div className="hidden h-12 w-px bg-(--base-bg)/20 lg:block" />

        <div className="text-center">
          <h2 className="text-3xl font-bold text-(--secondary-bg)">1000+</h2>
          <p className="mt-1 text-sm uppercase tracking-widest text-(--base-bg)/70">
            Plants Delivered
          </p>
        </div>

        <div className="hidden h-12 w-px bg-(--base-bg)/20 lg:block" />

        <div className="text-center">
          <h2 className="text-3xl font-bold text-(--secondary-bg)">500+</h2>
          <p className="mt-1 text-sm uppercase tracking-widest text-(--base-bg)/70">
            Happy Clients
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default AboutPage;

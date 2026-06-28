"use client";
import flower_pot from "../public/flower_pot (1).png";
import plant from "../public/plant.jpg";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import ProductList from "./components/ProductList";
import { plants } from "../app/constants/product_list";
import { merienda } from "./constants/custom_fonts";

export default function Home() {
  const heading = "Transforming Outdoor Spaces Into Living Masterpieces";

  return (
    <main className={`relative w-dvw`}>
      <section className="relative h-dvh w-dvw">
        {/* Background Image */}
        <Image
          src={plant}
          alt="Landscape"
          fill
          priority
          placeholder="blur"
          className="object-cover brightness-40"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center gap-2">
          {/* Heading */}
          <div className="max-w-5xl leading-12">
            {heading.split(" ").map((word, wordIndex) => {
              const globalIndex =
                heading.split(" ").slice(0, wordIndex).join(" ").length +
                wordIndex;

              return (
                <span key={wordIndex} className="mr-3 inline-block">
                  {word.split("").map((char, charIndex) => {
                    const index = globalIndex + charIndex;

                    return (
                      <motion.span
                        key={charIndex}
                        className={`inline-block text-3xl font-bold lg:text-6xl ${
                          index > 35 && index < 56
                            ? `text-(--primary-text) ${merienda.className}`
                            : "text-white"
                        }`}
                        initial={{
                          opacity: 0,
                          filter: "blur(10px)",
                        }}
                        animate={{
                          opacity: 1,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.02,
                        }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              );
            })}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-6 max-w-2xl text-sm text-gray-200 lg:text-lg"
          >
            Professional landscaping, garden maintenance, and premium-quality
            plants designed to create beautiful and sustainable outdoor spaces.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 flex flex-wrap justify-center gap-3"
          >
            <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
              🌿 Premium Plants
            </div>

            <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
              🛠 Expert Maintenance
            </div>

            <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              🏡 Custom Landscaping
            </div>
          </motion.div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 }}
            >
              <Link
                href="/contact"
                className="rounded-md border border-white px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-gray-800"
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 }}
            >
              <Link
                href="/products"
                className="rounded-md bg-(--primary-bg) px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-(--secondary-bg)"
              >
                Explore Plants
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-10 flex gap-8 lg:gap-16 text-white"
          >
            <div>
              <h3 className="text-2xl font-bold lg:text-3xl">500+</h3>
              <p className="text-xs text-gray-300 lg:text-sm">
                Plants Delivered
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold lg:text-3xl">100+</h3>
              <p className="text-xs text-gray-300 lg:text-sm">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold lg:text-3xl">5★</h3>
              <p className="text-xs text-gray-300 lg:text-sm">
                Customer Rating
              </p>
            </div>
          </motion.div>
        </div>

        {/* first pot */}
        <motion.div
          className="absolute top-50 right-40 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 4,
              delay: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src={flower_pot} alt="flower_pot" height={150} width={150} />
          </motion.div>
        </motion.div>

        {/* second pot */}
        <motion.div
          className="absolute top-50 left-40 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 4,
              delay: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image src={flower_pot} alt="flower_pot" height={150} width={150} />
          </motion.div>
        </motion.div>
      </section>

      {/* product list */}
      <section className="p-4">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="h-0.5 w-8 bg-(--accent-green) rounded-full"></span>
          <span className="text-sm uppercase tracking-[0.2em] text-(--accent-green)">
            Green Collection
          </span>
        </div>

        <h4 className="text-4xl font-bold text-zinc-500">Products</h4>

        <p className="mt-2 max-w-2xl text-zinc-400">
          Discover a wide variety of ornamental plants, flowering species, and
          landscaping favorites.
        </p>
        <ProductList plants={plants} />
      </section>
    </main>
  );
}

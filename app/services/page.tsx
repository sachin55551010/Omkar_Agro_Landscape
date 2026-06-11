"use client";
import Link from "next/link";
import { motion } from "motion/react";
import serviceImg from "../../public/heroimg.jpg";
import { ServiceList } from "../services/ServiceList";
import Image from "next/image";
import FAQSection from "../components/FAQSection";
const ServicePage = () => {
  const heading = "OUR SERVICES";
  return (
    <div className="max-w-dvw overflow-x-hidden">
      <div className="relative h-100">
        <Image
          src={serviceImg}
          alt="Service Background"
          fill
          priority
          className="object-cover"
        />
        <div className="inset-0 absolute bg-black/40"></div>
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end p-2">
          <div className="mb-8 flex gap-2 text-lg font-semibold">
            <Link href="/">
              <h4 className="border-r-2 pr-2 text-gray-400">Home</h4>
            </Link>

            <Link href="/services">
              <h4 className="text-gray-400">Service</h4>
            </Link>
          </div>

          {/* Animated Heading */}
          <div className="mb-8 flex flex-wrap text-gray-200">
            {heading.split("").map((text, index) => (
              <motion.h1
                key={`${text}-${index}`}
                className="flex text-5xl font-semibold tracking-wide text-gray-300 lg:text-6xl"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {text === " " ? "\u00A0" : text}
              </motion.h1>
            ))}
          </div>
        </div>
      </div>

      <ServiceList />
      <FAQSection />
    </div>
  );
};
export default ServicePage;

import Link from "next/link";
import { serviceList } from "../constants/service_list";
import { motion } from "motion/react";
import Image from "next/image";
export const ServiceList = () => {
  const handleBtn = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="p-3">
      <div className="grid gap-8 mt-20 lg:grid-cols-2 overflow-hidden">
        {serviceList.map((elem, index) => {
          const Icon = elem.icon;

          return (
            <motion.div
              key={index}
              className="relative h-100 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={elem.image}
                alt={elem.title}
                fill
                priority
                placeholder="blur"
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                <div className="bg-(--secondary-bg) w-fit p-3 rounded-full absolute top-5 right-5 hover:bg-(--primary-bg) transition-all duration-300">
                  <Icon strokeWidth={2} />
                </div>

                <h6 className="text-white text-3xl font-semibold tracking-wider">
                  {elem.title}
                </h6>

                <p className="text-white/80 tracking-wider text-sm mt-2">
                  {elem.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Link href="/contact">
        <button
          onClick={handleBtn}
          className="bg-(--primary-bg) w-full mt-14 py-3 rounded-lg text-(--secondary-text) font-bold"
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
};

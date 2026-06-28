"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { motion } from "motion/react";
import { merienda } from "../constants/custom_fonts";
import logo from "../../public/agro_logo.png";

const Footer = () => {
  return (
    <footer className="bg-(--dark-green) min-h-dvh px-6 lg:px-20 py-16">
      <div className="">
        {/* Brand */}
        <div className="border-b border-[#a2cb8b]/40 pb-10">
          <div className="flex items-center gap-2">
            <div>
              <Image src={logo} alt="logo" height={70} width={70} />
            </div>
            <h2
              className={`text-5xl md:text-7xl tracking-tight text-(--base-bg) ${merienda.className}`}
            >
              Omkar Agro
            </h2>
          </div>

          <p className="mt-4 max-w-lg text-(--base-bg) text-base leading-relaxed">
            Landscaping, gardening and outdoor spaces designed to feel natural,
            timeless and beautiful.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 py-10">
          {/* Navigation */}
          <div>
            <p className="uppercase tracking-[0.18em] text-[0.68rem] text-(--base-bg) font-medium mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { title: "Home", url: "/" },
                { title: "Services", url: "/service" },
                { title: "Projects", url: "/projects" },
                { title: "Contact", url: "/contact" },
              ].map((item) => {
                return (
                  <motion.div
                    className="w-fit"
                    key={item.title}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={item.url}
                      key={item.title}
                      className="text-(--base-bg)/85 hover:opacity-100 transition-opacity cursor-pointer text-[0.95rem]"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="uppercase tracking-[0.18em] text-[0.68rem] text-(--base-bg) font-medium mb-4">
              Contact
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: <MdEmail className="text-(--base-bg) shrink-0" />,
                  text: "contact@landscape.com",
                },
                {
                  icon: <MdPhone className="text-(--base-bg) shrink-0" />,
                  text: "+91 98765 43210 : +91 70182 62730",
                },
                {
                  icon: <MdLocationOn className="text-(--base-bg) shrink-0" />,
                  text: "Vill Khairi, P.O. Jubbarhatti, Near Shimla Airport(HP)",
                },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-(--base-bg)/80 text-sm"
                >
                  {icon}
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="uppercase tracking-[0.18em] text-[0.68rem] text-(--base-bg) font-medium mb-4">
              Social
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebook size={16} />, label: "Facebook" },
                { icon: <IoLogoWhatsapp size={16} />, label: "WhatsApp" },
                { icon: <MdEmail size={16} />, label: "Email" },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-(--primary-bg) text-(--base-bg) flex items-center justify-center hover:bg-(--accent-green) hover:border-(--secondary-bg) transition-colors cursor-pointer"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-(--primary-bg)/40 pt-5 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-(--base-bg)/60">
            © {new Date().getFullYear()} Omkar Agro Nursery &amp; Landscapes
          </p>
          <p className="text-xs text-(--base-bg)/60">
            Crafted with nature in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

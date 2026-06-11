"use client";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#f8fbf5] px-6 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Brand */}
        <div className="border-b border-[#a2cb8b]/40 pb-10">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-[#2f4f2f]">
            Jai Jawala
          </h2>
          <p className="mt-4 max-w-lg text-[#1f6f5f]/70 text-base leading-relaxed">
            Landscaping, gardening and outdoor spaces designed to feel natural,
            timeless and beautiful.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 py-10">
          {/* Navigation */}
          <div>
            <p className="uppercase tracking-[0.18em] text-[0.68rem] text-[#5d8a52] font-medium mb-4">
              Navigation
            </p>
            <ul className="space-y-3">
              {["Home", "Services", "Projects", "Contact"].map((item) => (
                <li
                  key={item}
                  className="text-[#2f4f2f]/85 hover:opacity-100 transition-opacity cursor-pointer text-[0.95rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="uppercase tracking-[0.18em] text-[0.68rem] text-[#5d8a52] font-medium mb-4">
              Contact
            </p>
            <div className="space-y-3">
              {[
                {
                  icon: <MdEmail className="text-[#5d8a52] shrink-0" />,
                  text: "contact@landscape.com",
                },
                {
                  icon: <MdPhone className="text-[#5d8a52] shrink-0" />,
                  text: "+91 98765 43210",
                },
                {
                  icon: <MdLocationOn className="text-[#5d8a52] shrink-0" />,
                  text: "Shimla, Himachal Pradesh",
                },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-[#2f4f2f]/80 text-sm"
                >
                  {icon}
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="uppercase tracking-[0.18em] text-[0.68rem] text-[#5d8a52] font-medium mb-4">
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
                  className="w-9 h-9 rounded-full border border-[#a2cb8b] text-[#2f4f2f] flex items-center justify-center hover:bg-[#dff0d8] hover:border-[#84b179] transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#a2cb8b]/40 pt-5 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-[#1f6f5f]/60">
            © {new Date().getFullYear()} Jai Jawala Nursery &amp; Landscaping
          </p>
          <p className="text-xs text-[#1f6f5f]/60">
            Crafted with nature in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { navItems } from "../constants/nav_links";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { useStateStore } from "../store/useStateStore";
import { useEffect } from "react";
interface CloseMenuProp {
  closeMenu: () => void;
}
const SideMenu = ({ closeMenu }: CloseMenuProp) => {
  const { isMenuOpen } = useStateStore();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);
  return (
    <motion.aside
      className="fixed top-0 right-0 h-dvh w-dvw bg-(--primary-bg) shadow-lg md:hidden flex z-100"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <nav className="p-6">
        <ul className="flex flex-col gap-10 relative">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <Link
                href={item.href}
                onClick={closeMenu}
                className="text-4xl font-bold hover:text-green-600 transition-colors"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.div
          onClick={closeMenu}
          className="absolute top-6 right-5"
          initial={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1, rotate: 360, scale: 1 }}
          exit={{ rotate: 360 }}
        >
          <IoClose size={50} />
        </motion.div>
      </nav>
    </motion.aside>
  );
};

export default SideMenu;

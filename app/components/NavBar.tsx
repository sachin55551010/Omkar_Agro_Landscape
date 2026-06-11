"use client";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { navItems } from "../constants/nav_links";
import SideMenu from "./SideMenu";

import { useStateStore } from "../store/useStateStore";

const NavBar = () => {
  const { isMenuOpen, closeMenu, openMenu } = useStateStore();

  return (
    <nav className="absolute w-dvw z-50 flex items-center justify-between px-4 py-3 backdrop-blur-sm border">
      {/* Logo */}
      <div className="text-gray-300 font-bold">Logo</div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-gray-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-gray-200 text-3xl cursor-pointer">
        <IoMenu onClick={openMenu} />
      </div>

      {/* Mobile Side Menu */}

      <AnimatePresence>
        {isMenuOpen && <SideMenu closeMenu={closeMenu} />}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;

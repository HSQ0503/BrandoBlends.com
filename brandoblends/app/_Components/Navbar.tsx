"use client";

import React, { useState } from "react";
import { FiMenu, FiX, } from "react-icons/fi";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import MainLogo from "./Logo";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-neutral-950 py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <MainLogo />
        <div className="hidden gap-6 lg:flex">
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <span>Gallery</span>
      </button>
      <button className=" border-2 border-[#000080] bg-[#000080] px-4 py-2 font-semibold text-white transition-colors hover:border-[#000000] hover:bg-[#000000] hover:text-white">
        Book Appointment
      </button>
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      {/* Hamburger Menu Icon */}
      <button onClick={() => setOpen(true)} className="block text-3xl text-white">
        <FiMenu />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-neutral-950 text-white"
          >
            {/* Header Section */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-700">
              <MainLogo />
              <button
                onClick={() => setOpen(false)}
                className="text-3xl text-white hover:text-gray-300"
              >
                <FiX />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col items-center justify-center gap-8 flex-grow text-lg font-medium">
              <a
                href="/gallery"
                className="px-4 py-2 text-white border-2 border-white rounded-md hover:bg-white hover:text-black transition"
                onClick={() => setOpen(false)}
              >
                Gallery
              </a>
              <a
                href="/appointment"
                className="px-4 py-2 bg-[#000080] text-white border-2 border-[#000080] rounded-md hover:bg-[#000000] hover:border-[#000000] transition"
                onClick={() => setOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Component() {
  return <Navbar />;
}
